import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { blogCategories, blogPosts } from '@/data/blogPosts'

// Static blog: all posts live in src/data/blogPosts.js (no backend)
const allPosts = blogPosts.map((post) => ({
  ...post,
  category: blogCategories.find((c) => c.id === post.blog_category_id) || null,
}))

const allCategories = blogCategories.map((cat) => ({
  ...cat,
  posts_count: blogPosts.filter((p) => p.blog_category_id === cat.id).length,
}))

function stripHtml(html) {
  return (html || '').replace(/<[^>]*>/g, ' ')
}

function filterPosts({ categoryId, tag, featured, search } = {}) {
  let result = allPosts
  if (categoryId) {
    result = result.filter((p) => p.blog_category_id === Number(categoryId))
  }
  if (tag) result = result.filter((p) => p.tags?.includes(tag))
  if (featured) result = result.filter((p) => p.is_featured)
  if (search) {
    const q = search.toLowerCase()
    result = result.filter((p) =>
      [p.title, p.excerpt, stripHtml(p.content), ...(p.tags || [])]
        .join(' ')
        .toLowerCase()
        .includes(q)
    )
  }
  return result
}

export const useBlogStore = defineStore('blog', () => {
  // State
  const posts = ref([])
  const categories = ref([])
  const currentPost = ref(null)
  const relatedPosts = ref([])
  const loading = ref(false)
  const error = ref(null)

  // Pagination state
  const currentPage = ref(1)
  const totalPosts = ref(0)
  const perPage = ref(10)
  const lastPage = ref(1)

  // Getters
  const hasMorePosts = computed(() => currentPage.value < lastPage.value)

  const featuredPosts = computed(() =>
    posts.value.filter((post) => post.is_featured)
  )

  const recentPosts = computed(() => [...posts.value].slice(0, 5))

  const allTags = computed(() => {
    const tags = new Set()
    posts.value.forEach((post) => {
      if (post.tags && Array.isArray(post.tags)) {
        post.tags.forEach((tag) => tags.add(tag))
      }
    })
    return Array.from(tags)
  })

  // Actions
  async function fetchPosts(params = {}) {
    error.value = null
    const page = params.page || 1
    const size = params.perPage || perPage.value
    const filtered = filterPosts(params)
    const pageItems = filtered.slice((page - 1) * size, page * size)

    posts.value = page === 1 ? pageItems : [...posts.value, ...pageItems]
    totalPosts.value = filtered.length
    currentPage.value = page
    perPage.value = size
    lastPage.value = Math.max(1, Math.ceil(filtered.length / size))

    return { data: pageItems, error: null }
  }

  async function fetchPost(slug) {
    error.value = null
    const post = allPosts.find((p) => p.slug === slug)

    if (!post) {
      currentPost.value = null
      relatedPosts.value = []
      error.value = 'Post not found'
      return { data: null, error: new Error('Post not found') }
    }

    currentPost.value = post
    const sameCategory = allPosts.filter(
      (p) => p.id !== post.id && p.blog_category_id === post.blog_category_id
    )
    const others = allPosts.filter(
      (p) => p.id !== post.id && p.blog_category_id !== post.blog_category_id
    )
    relatedPosts.value = [...sameCategory, ...others].slice(0, 3)

    return { data: post, error: null }
  }

  async function fetchCategories() {
    categories.value = allCategories
    return { data: allCategories, error: null }
  }

  async function loadMorePosts(params = {}) {
    if (!hasMorePosts.value) return

    return fetchPosts({
      ...params,
      page: currentPage.value + 1,
    })
  }

  function resetPagination() {
    currentPage.value = 1
    totalPosts.value = 0
    lastPage.value = 1
    posts.value = []
  }

  function clearCurrentPost() {
    currentPost.value = null
    relatedPosts.value = []
  }

  return {
    // State
    posts,
    categories,
    currentPost,
    relatedPosts,
    loading,
    error,
    currentPage,
    totalPosts,
    perPage,
    lastPage,

    // Getters
    hasMorePosts,
    featuredPosts,
    recentPosts,
    allTags,

    // Actions
    fetchPosts,
    fetchPost,
    fetchCategories,
    loadMorePosts,
    resetPagination,
    clearCurrentPost,
  }
})
