import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import api from '@/utils/api'
import { dummyPosts, getDummyPost } from '@/data/dummyBlogs'

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

  // Apply dummy posts as fallback content
  function applyDummyPosts() {
    posts.value = [...dummyPosts]
    totalPosts.value = dummyPosts.length
    currentPage.value = 1
    lastPage.value = 1
  }

  // Actions
  async function fetchPosts(params = {}) {
    loading.value = true
    error.value = null

    try {
      const queryParams = new URLSearchParams({
        per_page: params.perPage || perPage.value,
        page: params.page || currentPage.value,
      })

      if (params.categoryId) {
        queryParams.append('category_id', params.categoryId)
      }

      if (params.tag) {
        queryParams.append('tag', params.tag)
      }

      if (params.featured) {
        queryParams.append('featured', '1')
      }

      if (params.search) {
        queryParams.append('q', params.search)
      }

      const response = await api.get(`/blog/posts?${queryParams.toString()}`)

      if (response.data && response.data.success) {
        if (params.page === 1 || !params.page) {
          posts.value = response.data.data || []
        } else {
          // Append for "load more" functionality
          posts.value = [...posts.value, ...(response.data.data || [])]
        }
        totalPosts.value = response.data.total || 0
        currentPage.value = response.data.current_page || 1
        lastPage.value = response.data.last_page || 1
        perPage.value = response.data.per_page || 10

        // Fallback: no published posts yet — show dummy posts
        // (only on unfiltered first page, so search/filter empty states stay accurate)
        if (
          posts.value.length === 0 &&
          !params.categoryId &&
          !params.tag &&
          !params.search &&
          !params.featured
        ) {
          applyDummyPosts()
        }

        return { data: response.data, error: null }
      } else {
        throw new Error(response.data?.['sub-title'] || 'Failed to fetch posts')
      }
    } catch (err) {
      error.value = err.message || 'Failed to fetch posts'
      // Fallback: API unreachable — show dummy posts instead of an error page
      if (
        !params.categoryId &&
        !params.tag &&
        !params.search &&
        !params.featured
      ) {
        applyDummyPosts()
        error.value = null
        return { data: { data: posts.value }, error: null }
      }
      return { data: null, error: err }
    } finally {
      loading.value = false
    }
  }

  async function fetchPost(slug) {
    loading.value = true
    error.value = null
    currentPost.value = null
    relatedPosts.value = []

    // Dummy post — serve locally, no API call (slug doesn't exist in backend)
    const dummy = getDummyPost(slug)
    if (dummy) {
      currentPost.value = dummy
      relatedPosts.value = dummyPosts.filter((p) => p.slug !== slug)
      loading.value = false
      return { data: dummy, error: null }
    }

    try {
      const response = await api.get(`/blog/posts/${slug}`)

      if (response.data && response.data.success) {
        currentPost.value = response.data.data
        relatedPosts.value = response.data.related_posts || []

        // Increment views
        incrementViews(slug)

        return { data: response.data.data, error: null }
      } else {
        throw new Error(response.data?.['sub-title'] || 'Post not found')
      }
    } catch (err) {
      error.value = err.message || 'Failed to fetch post'
      return { data: null, error: err }
    } finally {
      loading.value = false
    }
  }

  async function fetchCategories() {
    try {
      const response = await api.get('/blog/categories')

      if (response.data && response.data.success) {
        categories.value = response.data.data || []
        return { data: response.data.data, error: null }
      } else {
        throw new Error(
          response.data?.['sub-title'] || 'Failed to fetch categories'
        )
      }
    } catch (err) {
      console.error('Failed to fetch categories:', err)
      return { data: null, error: err }
    }
  }

  async function incrementViews(slug) {
    try {
      await api.post(`/blog/posts/${slug}/view`)
    } catch (err) {
      // Silently fail - views increment is not critical
      console.error('Failed to increment views:', err)
    }
  }

  async function loadMorePosts(params = {}) {
    if (!hasMorePosts.value || loading.value) return

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
    incrementViews,
    loadMorePosts,
    resetPagination,
    clearCurrentPost,
  }
})
