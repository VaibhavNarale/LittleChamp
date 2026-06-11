<script setup>
import { ref, computed, nextTick, watch } from 'vue'
import api from '@/utils/api'
import botAvatar from '@/assets/ai-robot-icon.png'

/* ------------------------------------------------------------------
   Mind Growup Jr. — Floating AI Chat Widget ("Growie")
   ------------------------------------------------------------------
   Replies come from a built-in contextual fallback so the bot works
   out of the box. When the backend AI endpoint is ready, set
   USE_AI_BACKEND = true and it will POST to /ai/chat with:
     { messages: [{ role, content }] }   ->   { reply: '...' }
------------------------------------------------------------------- */
const USE_AI_BACKEND = false

const WELCOME =
  "Hi there! 👋 I'm Growie, your Mind Growup Jr. helper. Ask me about our subjects, pricing, free trial, or how to register — I'm happy to help!"

const SUGGESTIONS = [
  'What subjects do you teach?',
  'How much does it cost?',
  'How do I start a free trial?',
  'I want to register my playgroup',
]

const open = ref(false)
const showGreeting = ref(true)
const messages = ref([])
const input = ref('')
const loading = ref(false)
const scrollEl = ref(null)

/* ---- Lead capture (Name -> Mobile -> Email, then chat) ---- */
const STAGE = { NAME: 'name', MOBILE: 'mobile', EMAIL: 'email', CHAT: 'chat' }
const stage = ref(STAGE.NAME)
const chatStarted = ref(false)
const lead = ref({ name: '', mobile: '', email: '' })

const firstName = computed(() => (lead.value.name || '').split(' ')[0])

const inputPlaceholder = computed(() => {
  switch (stage.value) {
    case STAGE.NAME:
      return 'Type your name…'
    case STAGE.MOBILE:
      return 'Type your mobile number…'
    case STAGE.EMAIL:
      return 'Type your email…'
    default:
      return 'Type your message…'
  }
})

const toggleOpen = () => {
  open.value = !open.value
  showGreeting.value = false
  if (open.value && messages.value.length === 0) {
    messages.value.push({ role: 'assistant', text: WELCOME })
    messages.value.push({
      role: 'assistant',
      text: 'Before we begin, may I know your name? 😊',
    })
    stage.value = STAGE.NAME
  }
  if (open.value) scrollToBottom()
}

const scrollToBottom = async () => {
  await nextTick()
  if (scrollEl.value) scrollEl.value.scrollTop = scrollEl.value.scrollHeight
}

watch(messages, scrollToBottom, { deep: true })

// Push an assistant message with a short "typing" delay
const botSay = async (text, delay = 550) => {
  loading.value = true
  scrollToBottom()
  await new Promise((r) => setTimeout(r, delay))
  messages.value.push({ role: 'assistant', text })
  loading.value = false
  scrollToBottom()
}

// Handle the Name -> Mobile -> Email questions
const handleCapture = async (content) => {
  if (stage.value === STAGE.NAME) {
    if (content.length < 2 || /\d/.test(content)) {
      await botSay(
        "Oops, that doesn't look like a name. What should I call you? 😊"
      )
      return
    }
    lead.value.name = content
    stage.value = STAGE.MOBILE
    await botSay(
      `Nice to meet you, ${firstName.value}! 📱 What's your mobile number?`
    )
    return
  }

  if (stage.value === STAGE.MOBILE) {
    const digits = content.replace(/\D/g, '')
    const ten = digits.length > 10 ? digits.slice(-10) : digits
    if (!/^[6-9]\d{9}$/.test(ten)) {
      await botSay(
        "Hmm, that doesn't look like a valid 10-digit mobile number. Could you enter it again? 📱"
      )
      return
    }
    lead.value.mobile = ten
    stage.value = STAGE.EMAIL
    await botSay('Great! 📧 And your email address?')
    return
  }

  if (stage.value === STAGE.EMAIL) {
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(content)) {
      await botSay(
        "That email doesn't look quite right. Mind typing it again? 📧"
      )
      return
    }
    lead.value.email = content
    stage.value = STAGE.CHAT
    await botSay(
      `Thanks, ${firstName.value}! 🎉 You're all set. How can I help you today? Ask me about our subjects, pricing, free trial, or registration!`
    )
  }
}

const sendMessage = async (text) => {
  const content = (text ?? input.value).trim()
  if (!content || loading.value) return

  messages.value.push({ role: 'user', text: content })
  input.value = ''
  scrollToBottom()

  // Collect Name / Mobile / Email before normal chat
  if (stage.value !== STAGE.CHAT) {
    await handleCapture(content)
    return
  }

  chatStarted.value = true
  loading.value = true
  scrollToBottom()

  let reply = ''
  try {
    if (USE_AI_BACKEND) {
      const history = messages.value.map((m) => ({
        role: m.role,
        content: m.text,
      }))
      const res = await api.post('/ai/chat', {
        messages: history,
        lead: lead.value,
      })
      reply = res.data?.reply || res.data?.data?.reply || ''
    }
  } catch {
    reply = ''
  }

  if (!reply) {
    await new Promise((r) => setTimeout(r, 650))
    reply = localReply(content)
  }

  messages.value.push({ role: 'assistant', text: reply })
  loading.value = false
  scrollToBottom()
}

/* ---- Built-in contextual fallback ---- */
function localReply(text) {
  const q = text.toLowerCase()
  const has = (...w) => w.some((x) => q.includes(x))

  if (has('hi', 'hello', 'hey', 'namaste') && q.length < 12)
    return 'Hello! 😊 I can help with subjects, pricing, free trials, registration, or contacting our team. What would you like to know?'
  if (has('subject', 'teach', 'learn', 'course', 'math', 'reading', 'craft'))
    return 'We make learning fun across three areas: 🔢 Maths, 📖 Your AI-Buddy (reading), and 🎨 Craft & Drawing — for Pre-K to Grade 7. Want to explore them? Visit the Subjects page from the top menu!'
  if (has('price', 'cost', 'fee', 'plan', 'subscription', 'pay'))
    return 'You can start with a free trial and explore all features. For full plan details, check our Pricing page in the top menu. 💚'
  if (has('trial', 'free', 'start', 'sign up', 'signup', 'demo'))
    return 'Getting started is easy! Click “Book Free AI Strategy Call” at the top, or the Register button, create your account, and start exploring 500+ games. 🚀'
  if (has('doctor', 'pediatric', 'health', 'dr '))
    return 'We have a Doctor Program! Partner doctors meet families twice a month, chat on WhatsApp, and welcome branch visits. You can apply via Register → Doctor Registration. 🩺'
  if (
    has('playgroup', 'school', 'pre-school', 'preschool', 'nursery', 'daycare')
  )
    return 'Lovely! You can register your playgroup via Register → Playgroup Registration. You’ll get 500+ games, parent progress updates, and a safe, guided space for little ones. 🧒'
  if (has('register', 'registration', 'join', 'enroll'))
    return 'You can register as a Parent, Doctor, or Playgroup. Look for the “Register” menu at the top — which one are you interested in?'
  if (has('feature', 'what do you', 'how it works', 'about'))
    return 'Mind Growup Jr offers 500+ interactive games, adaptive learning, progress reports, a parent dashboard, and a 100% safe, ad-free space. See the Features page for the full list! ⭐'
  if (has('screen time', 'screen', 'how long', 'hours'))
    return 'For ages 5–10 we suggest short, focused sessions of about 20–30 minutes, a few times a week. Our games are built in fun, rewarding bursts. 🌳'
  if (has('contact', 'phone', 'call', 'email', 'whatsapp', 'reach', 'talk to'))
    return 'You can reach our team at 📞 +91 98217 49524 or ✉️ Info@mindgrowupjr.com. The Contact page also has a quick message form and WhatsApp link!'
  if (has('thank', 'thanks', 'great', 'awesome', 'ok', 'okay'))
    return 'You’re most welcome! 😊 Is there anything else I can help you with?'
  return 'Great question! I can help with our subjects, pricing, free trial, registration (parent / doctor / playgroup), or contacting our team. Could you tell me a little more about what you need?'
}
</script>

<template>
  <div class="cw-root">
    <!-- Chat Panel -->
    <transition name="cw-slide">
      <div v-if="open" class="cw-panel">
        <!-- Header -->
        <div class="cw-head">
          <div class="cw-avatar">
            <img :src="botAvatar" alt="Growie" />
            <span class="cw-online"></span>
          </div>
          <div class="cw-head-info">
            <h4>Growie</h4>
            <p><span class="cw-dot"></span> Mind Growup Jr. Helper</p>
          </div>
          <button class="cw-close" aria-label="Close chat" @click="toggleOpen">
            <i class="fas fa-chevron-down"></i>
          </button>
        </div>

        <!-- Messages -->
        <div ref="scrollEl" class="cw-messages">
          <div
            v-for="(m, i) in messages"
            :key="i"
            class="cw-msg"
            :class="m.role === 'user' ? 'cw-msg--user' : 'cw-msg--bot'"
          >
            <div v-if="m.role === 'assistant'" class="cw-msg-avatar">
              <img :src="botAvatar" alt="Growie" />
            </div>
            <div class="cw-bubble">{{ m.text }}</div>
          </div>

          <!-- Typing -->
          <div v-if="loading" class="cw-msg cw-msg--bot">
            <div class="cw-msg-avatar">
              <img :src="botAvatar" alt="Growie" />
            </div>
            <div class="cw-bubble cw-typing">
              <span></span><span></span><span></span>
            </div>
          </div>
        </div>

        <!-- Suggestions -->
        <div v-if="stage === 'chat' && !chatStarted" class="cw-suggestions">
          <button
            v-for="(s, i) in SUGGESTIONS"
            :key="i"
            class="cw-chip"
            @click="sendMessage(s)"
          >
            {{ s }}
          </button>
        </div>

        <!-- Input -->
        <form class="cw-input-bar" @submit.prevent="sendMessage()">
          <input
            v-model="input"
            :type="
              stage === 'mobile' ? 'tel' : stage === 'email' ? 'email' : 'text'
            "
            class="cw-input"
            :placeholder="inputPlaceholder"
            :disabled="loading"
          />
          <button
            type="submit"
            class="cw-send"
            :disabled="loading || !input.trim()"
            aria-label="Send"
          >
            <i class="fas fa-paper-plane"></i>
          </button>
        </form>

        <p class="cw-footer">Powered by Mind Growup Jr. AI</p>
      </div>
    </transition>

    <!-- Greeting bubble -->
    <transition name="cw-fade">
      <div v-if="!open && showGreeting" class="cw-greeting" @click="toggleOpen">
        <button
          class="cw-greeting-close"
          aria-label="Dismiss"
          @click.stop="showGreeting = false"
        >
          <i class="fas fa-times"></i>
        </button>
        <span>👋 Hi! Need help? Chat with me!</span>
      </div>
    </transition>

    <!-- Launcher -->
    <button
      class="cw-launcher"
      :class="{ 'is-open': open }"
      aria-label="Open chat"
      @click="toggleOpen"
    >
      <span class="cw-launcher-icon">
        <i v-if="!open" class="fas fa-comment-dots"></i>
        <i v-else class="fas fa-times"></i>
      </span>
      <span v-if="!open" class="cw-launcher-pulse"></span>
    </button>
  </div>
</template>

<style scoped>
.cw-root {
  position: fixed;
  right: 24px;
  bottom: 24px;
  z-index: 9995;
}

/* ===== Launcher ===== */
.cw-launcher {
  position: relative;
  width: 62px;
  height: 62px;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  color: white;
  font-size: 24px;
  background: linear-gradient(135deg, #4a8b3f, #5ea750);
  box-shadow: 0 10px 30px rgba(74, 139, 63, 0.45);
  transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: auto;
}

.cw-launcher:hover {
  transform: scale(1.08);
}

.cw-launcher.is-open {
  background: linear-gradient(135deg, #e91e8c, #b5179e);
}

.cw-launcher-icon {
  display: flex;
  transition: transform 0.3s ease;
}

.cw-launcher-pulse {
  position: absolute;
  inset: 0;
  border-radius: 50%;
  background: rgba(74, 139, 63, 0.5);
  animation: cw-pulse 2s infinite;
  z-index: -1;
}

@keyframes cw-pulse {
  0% {
    transform: scale(1);
    opacity: 0.6;
  }
  70% {
    transform: scale(1.6);
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
}

/* ===== Greeting bubble ===== */
.cw-greeting {
  position: absolute;
  bottom: 74px;
  right: 0;
  width: 220px;
  background: white;
  color: #2d3436;
  font-size: 14px;
  font-weight: 600;
  padding: 14px 16px;
  border-radius: 16px 16px 4px 16px;
  box-shadow: 0 12px 35px rgba(0, 0, 0, 0.16);
  cursor: pointer;
  line-height: 1.4;
}

.cw-greeting-close {
  position: absolute;
  top: -8px;
  left: -8px;
  width: 22px;
  height: 22px;
  border-radius: 50%;
  border: none;
  background: #e91e8c;
  color: white;
  font-size: 11px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* ===== Panel ===== */
.cw-panel {
  position: absolute;
  bottom: 78px;
  right: 0;
  width: 370px;
  max-width: calc(100vw - 32px);
  height: 520px;
  max-height: calc(100vh - 130px);
  background: white;
  border-radius: 22px;
  box-shadow: 0 24px 70px rgba(27, 20, 100, 0.22);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border: 1px solid #eef0f4;
}

.cw-head {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 16px 18px;
  background: linear-gradient(135deg, #4a8b3f 0%, #3a7a30 60%, #1b1464 100%);
  color: white;
}

.cw-avatar {
  position: relative;
  width: 44px;
  height: 44px;
  flex-shrink: 0;
}

.cw-avatar img {
  width: 44px;
  height: 44px;
  border-radius: 50%;
  object-fit: cover;
  background: white;
  padding: 3px;
  border: 2px solid rgba(255, 255, 255, 0.5);
}

.cw-online {
  position: absolute;
  right: 0;
  bottom: 0;
  width: 11px;
  height: 11px;
  background: #2ecc71;
  border: 2px solid white;
  border-radius: 50%;
}

.cw-head-info {
  flex: 1;
  min-width: 0;
}

.cw-head-info h4 {
  margin: 0;
  font-size: 16px;
  font-weight: 800;
  color: white;
}

.cw-head-info p {
  margin: 2px 0 0;
  font-size: 12px;
  color: rgba(255, 255, 255, 0.85);
  display: flex;
  align-items: center;
  gap: 6px;
}

.cw-dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: #2ecc71;
  display: inline-block;
}

.cw-close {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: none;
  background: rgba(255, 255, 255, 0.18);
  color: white;
  cursor: pointer;
  transition: background 0.25s;
}

.cw-close:hover {
  background: rgba(255, 255, 255, 0.3);
}

/* Messages */
.cw-messages {
  flex: 1;
  padding: 18px;
  overflow-y: auto;
  background:
    radial-gradient(circle at 15% 0%, rgba(74, 139, 63, 0.05), transparent 55%),
    radial-gradient(
      circle at 100% 100%,
      rgba(233, 30, 140, 0.05),
      transparent 50%
    ),
    #fbfcfe;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.cw-messages::-webkit-scrollbar {
  width: 6px;
}
.cw-messages::-webkit-scrollbar-thumb {
  background: #d6dbe3;
  border-radius: 3px;
}

.cw-msg {
  display: flex;
  align-items: flex-end;
  gap: 7px;
  max-width: 88%;
  animation: cw-pop 0.3s ease;
}

@keyframes cw-pop {
  from {
    opacity: 0;
    transform: translateY(8px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.cw-msg--user {
  margin-left: auto;
  flex-direction: row-reverse;
}

.cw-msg-avatar img {
  width: 28px;
  height: 28px;
  border-radius: 50%;
  object-fit: cover;
  background: #f0f2f5;
  padding: 2px;
}

.cw-bubble {
  padding: 11px 15px;
  border-radius: 16px;
  font-size: 14px;
  line-height: 1.5;
  white-space: pre-wrap;
  word-wrap: break-word;
}

.cw-msg--bot .cw-bubble {
  background: white;
  color: #2d3436;
  border: 1px solid #eef0f4;
  border-bottom-left-radius: 5px;
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.04);
}

.cw-msg--user .cw-bubble {
  background: linear-gradient(135deg, #4a8b3f, #5ea750);
  color: white;
  border-bottom-right-radius: 5px;
}

.cw-typing {
  display: inline-flex;
  gap: 4px;
  align-items: center;
}

.cw-typing span {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: #b6bfca;
  animation: cw-blink 1.2s infinite ease-in-out;
}
.cw-typing span:nth-child(2) {
  animation-delay: 0.2s;
}
.cw-typing span:nth-child(3) {
  animation-delay: 0.4s;
}

@keyframes cw-blink {
  0%,
  80%,
  100% {
    opacity: 0.3;
    transform: scale(0.8);
  }
  40% {
    opacity: 1;
    transform: scale(1);
  }
}

/* Suggestions */
.cw-suggestions {
  display: flex;
  flex-wrap: wrap;
  gap: 7px;
  padding: 12px 16px 0;
}

.cw-chip {
  font-size: 12.5px;
  font-weight: 600;
  color: #4a8b3f;
  background: #f1f8ee;
  border: 1px solid #d8ead0;
  border-radius: 50px;
  padding: 7px 13px;
  cursor: pointer;
  transition: all 0.25s ease;
}

.cw-chip:hover {
  transform: translateY(-2px);
  filter: brightness(0.97);
}

/* Input */
.cw-input-bar {
  display: flex;
  gap: 9px;
  padding: 14px 16px 6px;
}

.cw-input {
  flex: 1;
  padding: 12px 16px;
  border: 2px solid #e8ebf0;
  border-radius: 50px;
  font-size: 14px;
  outline: none;
  transition: all 0.25s ease;
  font-family: inherit;
}

.cw-input:focus {
  border-color: #4a8b3f;
  box-shadow: 0 0 0 4px rgba(74, 139, 63, 0.08);
}

.cw-send {
  width: 44px;
  height: 44px;
  flex-shrink: 0;
  border: none;
  border-radius: 50%;
  background: linear-gradient(135deg, #4a8b3f, #5ea750);
  color: white;
  font-size: 15px;
  cursor: pointer;
  transition: all 0.25s ease;
  box-shadow: 0 6px 16px rgba(74, 139, 63, 0.32);
}

.cw-send:hover:not(:disabled) {
  transform: scale(1.08) rotate(8deg);
}

.cw-send:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.cw-footer {
  text-align: center;
  font-size: 10.5px;
  color: #aab2bd;
  margin: 0;
  padding: 4px 0 10px;
}

/* Transitions */
.cw-slide-enter-active,
.cw-slide-leave-active {
  transition: all 0.28s cubic-bezier(0.34, 1.4, 0.64, 1);
}
.cw-slide-enter-from,
.cw-slide-leave-to {
  opacity: 0;
  transform: translateY(20px) scale(0.96);
}

.cw-fade-enter-active,
.cw-fade-leave-active {
  transition: all 0.3s ease;
}
.cw-fade-enter-from,
.cw-fade-leave-to {
  opacity: 0;
  transform: translateY(8px);
}

/* Responsive */
@media (max-width: 480px) {
  .cw-root {
    right: 16px;
    bottom: 16px;
  }
  .cw-panel {
    width: calc(100vw - 24px);
    height: 70vh;
  }
}
</style>
