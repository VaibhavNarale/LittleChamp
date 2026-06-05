// Dummy blog posts shown while no real posts exist in the backend.
// They automatically disappear once the API starts returning published posts.
import mathImg from '@/assets/math-gamification.jpg'
import digitalLearningImg from '@/assets/digital-learning-gamification.jpg'
import craftImg from '@/assets/new-images/Kids_hands_creating_on_card_arches_with_an_array_of_craft_suppplies.webp'
import readingImg from '@/assets/reading-gamification-1.jpg'
import vedicMathImg from '@/assets/new-images/vedic-math.webp'

export const dummyPosts = [
  {
    id: 'dummy-1',
    slug: 'fun-math-games-for-kids',
    title: '5 Fun Math Games That Make Your Child Fall in Love with Numbers',
    excerpt:
      'Worried your little one finds maths boring? These five playful game ideas turn counting, addition and shapes into giggles — at home, with zero prep.',
    content: `
      <p>Ask any parent what subject their child resists the most and chances are the answer is <strong>maths</strong>. But here's a secret: kids don't dislike numbers — they dislike worksheets. Wrap the same concepts inside a game, and suddenly your 5-year-old is begging for "one more round" of addition.</p>
      <h2>1. Snakes, Ladders &amp; Sums</h2>
      <p>Take your regular Snakes and Ladders board, but with a twist — before every move, your child must solve a quick sum to earn their dice roll. Start with simple counting for Pre-K and move up to two-digit addition for older kids.</p>
      <h2>2. Kitchen Counting</h2>
      <p>The kitchen is India's best maths lab! Ask your child to count out 12 rajma beans, split rotis into halves and quarters, or measure rice in cups. Fractions become delicious when dinner depends on them.</p>
      <h2>3. Shape Detective</h2>
      <p>Hand your child a "detective notebook" and send them around the house hunting for circles, triangles and rectangles. The fan is a circle, the door is a rectangle — geometry is hiding everywhere.</p>
      <h2>4. Number Hopscotch</h2>
      <p>Draw a hopscotch grid with chalk, but call out sums instead of numbers — "Jump to 3 + 4!" It builds mental maths <em>and</em> burns off all that evening energy.</p>
      <h2>5. Play Digital Maths Games</h2>
      <p>Apps like <strong>Mind Growup Jr</strong> turn curriculum-aligned maths into colourful adventures — counting with friendly animals in Pre-K all the way to fractions and word problems in higher grades, with progress reports so you always know how your child is doing.</p>
      <h2>The Takeaway</h2>
      <p>Ten minutes of playful maths a day beats an hour of forced practice. Keep it light, celebrate small wins, and watch your child start saying the magic words: <em>"Can we play the maths game again?"</em></p>
    `,
    featured_image: mathImg,
    video_url: null,
    blog_category_id: 1,
    category: { id: 1, name: 'Learning Tips' },
    tags: ['Math', 'Games', 'Activities'],
    published_at: '2026-05-28T09:00:00.000Z',
    views: 248,
    is_featured: true,
    author: { first_name: 'Mind Growup', last_name: 'Team' },
  },
  {
    id: 'dummy-2',
    slug: 'screen-time-that-counts-game-based-learning',
    title: "Screen Time That Counts: A Parent's Guide to Game-Based Learning",
    excerpt:
      'Not all screen time is equal. Learn how to tell mindless scrolling apart from meaningful play, and how game-based learning actually helps your child grow.',
    content: `
      <p>"How much screen time is too much?" is the question every modern Indian parent wrestles with. But research increasingly shows that the better question is — <strong>what kind</strong> of screen time is it?</p>
      <h2>Passive vs. Active Screen Time</h2>
      <p>Watching random videos is <em>passive</em> — your child consumes without thinking. Game-based learning is <em>active</em> — every tap is a decision, every level a problem to solve. The brain treats these two experiences completely differently.</p>
      <h2>Why Games Work for Young Learners</h2>
      <ul>
        <li><strong>Instant feedback:</strong> Kids know immediately whether they got it right, so they self-correct without fear of red marks.</li>
        <li><strong>Safe failure:</strong> Losing a game level feels like "try again", not "you failed" — which builds resilience.</li>
        <li><strong>Rewards that motivate:</strong> Stars, badges and streaks keep children practising concepts they'd abandon on paper.</li>
        <li><strong>Personalised pace:</strong> A good learning game adjusts to your child — slowing down on tricky topics, speeding past mastered ones.</li>
      </ul>
      <h2>A Simple Rule of Thumb</h2>
      <p>Before handing over the tablet, ask: <em>"Will my child create, solve or decide something — or just watch?"</em> If the answer is solve and decide, that screen time is working <strong>for</strong> your child, not against them.</p>
      <h2>How to Get Started</h2>
      <p>Set a fixed "learning play" window — 20 to 30 minutes after school works well for most families. Sit with your child for the first few sessions, celebrate their badges, and review the progress report together each week. Platforms like <strong>Mind Growup Jr</strong> make this easy with parent dashboards that show exactly what your child practised and where they need help.</p>
      <p>Screen time doesn't have to be a battle. Choose the right kind, set a routine, and watch the screen become your teaching partner.</p>
    `,
    featured_image: digitalLearningImg,
    video_url: null,
    blog_category_id: 2,
    category: { id: 2, name: 'Parenting' },
    tags: ['Parenting', 'EdTech'],
    published_at: '2026-06-02T09:00:00.000Z',
    views: 186,
    is_featured: false,
    author: { first_name: 'Mind Growup', last_name: 'Team' },
  },
  {
    id: 'dummy-3',
    slug: 'craft-and-drawing-brain-building-time',
    title: 'Why Craft & Drawing Time Is Secretly Brain-Building Time',
    excerpt:
      'That mess of paper, glue and crayons on your floor? It is one of the most powerful learning tools your child has. Here is the science behind creative play.',
    content: `
      <p>When parents compare subjects, craft and drawing often get pushed to the bottom of the list — "first finish your maths, then you can draw." But child development experts will tell you something surprising: <strong>creative time is learning time</strong>, and some of the most important skills your child needs are built with crayons, scissors and clay.</p>
      <h2>Fine Motor Skills = Writing Skills</h2>
      <p>Every time your child folds paper for origami, rolls clay into a ball, or colours inside a shape, they are strengthening the same tiny hand muscles needed for neat handwriting. A child who crafts regularly almost always finds writing easier.</p>
      <h2>Drawing Builds Pre-Reading Skills</h2>
      <p>Before children can recognise letters, they need to notice shapes, lines and patterns. Drawing trains exactly that. A circle with two dots becomes a face — and later, a circle with a tail becomes the letter 'Q'.</p>
      <h2>Creativity Teaches Problem-Solving</h2>
      <p>What happens when the paper boat keeps sinking, or the tower of blocks keeps falling? Your child experiments, adjusts and tries again. That is engineering thinking — at age five!</p>
      <h2>It Builds Confidence and Calm</h2>
      <p>Finishing a drawing gives children a sense of "I made this!" — a confidence boost no worksheet can match. Art time also slows busy little minds down, which is why many schools now use drawing as a calming activity.</p>
      <h2>Make It a Habit</h2>
      <p>You don't need fancy supplies — old newspapers, leftover wool, and a box of crayons go a long way. For structured creative learning, the <strong>Craft &amp; Drawing</strong> section on Mind Growup Jr offers step-by-step activities by grade — from finger painting in Pre-K to origami and sketching for older kids.</p>
      <p>So the next time your child reaches for the colour box before the textbook — smile. Their brain is doing serious work.</p>
    `,
    featured_image: craftImg,
    video_url: null,
    blog_category_id: 3,
    category: { id: 3, name: 'Creativity' },
    tags: ['Craft', 'Drawing', 'Creativity'],
    published_at: '2026-05-25T09:00:00.000Z',
    views: 157,
    is_featured: false,
    author: { first_name: 'Mind Growup', last_name: 'Team' },
  },
  {
    id: 'dummy-4',
    slug: 'ai-learning-buddy-reading-practice',
    title: "Meet Your Child's AI Buddy: Reading Practice Without the Pressure",
    excerpt:
      'Some kids freeze when asked to read aloud in class. An AI learning buddy gives them a patient, judgement-free space to practise — and the results are remarkable.',
    content: `
      <p>Picture this: your child is asked to read aloud in class. Twenty pairs of eyes turn towards them. They know the words, but the fear of making a mistake in front of everyone makes them stumble. Sound familiar?</p>
      <p>For many children — especially shy ones — the biggest barrier to reading fluently isn't ability. It's <strong>pressure</strong>.</p>
      <h2>Why an AI Buddy Changes Everything</h2>
      <p>An AI learning buddy never sighs, never rushes, and never laughs at a mispronounced word. It simply waits, encourages and gently corrects. For a hesitant reader, that safety makes all the difference.</p>
      <ul>
        <li><strong>Unlimited patience:</strong> Your child can repeat the same phonics sound twenty times — the buddy stays just as cheerful on attempt twenty as attempt one.</li>
        <li><strong>Practice anytime:</strong> Ten minutes before dinner, a quick session on Sunday morning — reading practice fits your family's schedule.</li>
        <li><strong>Adapts to your child:</strong> Struggling with 'th' sounds? The buddy notices and brings more practice words. Flying through vocabulary? It levels up.</li>
        <li><strong>Mood-aware learning:</strong> A good AI buddy checks how your child is feeling and adjusts its tone — gentler on tough days, more playful on energetic ones.</li>
      </ul>
      <h2>What the Research Says</h2>
      <p>Studies on computer-assisted reading consistently show that children who practise in low-pressure digital environments improve faster in fluency and are more willing to read aloud in class afterwards. Confidence built in private shows up in public.</p>
      <h2>AI + Parents = The Winning Team</h2>
      <p>An AI buddy is a practice partner, not a replacement for you. The magic formula is simple: let your child practise with their <strong>Your AI-Buddy</strong> sessions on Mind Growup Jr during the week, then have them read their favourite story to you on the weekend. Watch how proudly they perform what they've practised!</p>
    `,
    featured_image: readingImg,
    video_url: null,
    blog_category_id: 1,
    category: { id: 1, name: 'Learning Tips' },
    tags: ['Reading', 'AI', 'Confidence'],
    published_at: '2026-05-20T09:00:00.000Z',
    views: 203,
    is_featured: false,
    author: { first_name: 'Mind Growup', last_name: 'Team' },
  },
  {
    id: 'dummy-5',
    slug: 'vedic-maths-tricks-for-kids',
    title: '3 Easy Vedic Maths Tricks That Make Your Child Feel Like a Genius',
    excerpt:
      "India's ancient maths shortcuts can turn slow, scary calculations into party tricks. Teach your child these three tonight and watch their eyes light up.",
    content: `
      <p>Long before calculators, Indian mathematicians developed <strong>Vedic Maths</strong> — a collection of brilliantly simple shortcuts that make big calculations feel like magic tricks. And kids absolutely love magic tricks.</p>
      <p>Here are three easy ones to try with your child tonight. Best suited for Grades 3 and above.</p>
      <h2>Trick 1: Multiply by 11 in Two Seconds</h2>
      <p>To multiply a two-digit number by 11, just add the two digits and place the sum in the middle!</p>
      <p><strong>Example:</strong> 52 × 11 → 5 + 2 = 7 → put 7 between 5 and 2 → <strong>572</strong>. Done!</p>
      <h2>Trick 2: Doubling and Halving</h2>
      <p>Stuck on an awkward multiplication? Halve one number and double the other — the answer stays the same.</p>
      <p><strong>Example:</strong> 4 × 35 is tricky, but halve 4 and double 35: 2 × 70 = <strong>140</strong>. Much friendlier!</p>
      <h2>Trick 3: Subtracting from 100 (or 1000)</h2>
      <p>To subtract any number from 100, subtract each digit from 9 — except the last one, which you subtract from 10.</p>
      <p><strong>Example:</strong> 100 − 37 → first digit: 9 − 3 = 6, last digit: 10 − 7 = 3 → <strong>63</strong>. No borrowing, no tears!</p>
      <h2>Why These Tricks Matter</h2>
      <p>It's not just about speed. When a child discovers they can out-calculate a grown-up, something wonderful happens — maths stops being scary and starts being <em>theirs</em>. That confidence spills into every other topic.</p>
      <p>Want more? The Mathematics section on <strong>Mind Growup Jr</strong> wraps mental maths techniques like these into games and challenges, grade by grade — so the "genius feeling" never wears off.</p>
    `,
    featured_image: vedicMathImg,
    video_url: null,
    blog_category_id: 1,
    category: { id: 1, name: 'Learning Tips' },
    tags: ['Math', 'Vedic Maths', 'Tricks'],
    published_at: '2026-05-12T09:00:00.000Z',
    views: 312,
    is_featured: false,
    author: { first_name: 'Mind Growup', last_name: 'Team' },
  },
]

export const isDummySlug = (slug) => dummyPosts.some((p) => p.slug === slug)

export const getDummyPost = (slug) => dummyPosts.find((p) => p.slug === slug)
