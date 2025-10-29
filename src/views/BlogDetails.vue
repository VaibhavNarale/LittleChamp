<script setup>
import { onMounted, onBeforeUnmount, nextTick } from 'vue'
import { initTemplateScripts, cleanupTemplateScripts } from '@/utils/initScripts'

onMounted(async () => {
  await nextTick()
  setTimeout(() => {
    initTemplateScripts()
  }, 100)
})

onBeforeUnmount(() => {
  cleanupTemplateScripts()
})
</script>

<template>
  <!-- Modern Hero Section -->
  <section class="blogdetails-hero-section">
    <div class="blogdetails-hero-bg">
      <div class="container">
        <div class="blogdetails-hero-content">
          <nav class="modern-breadcrumb">
            <router-link to="/" class="breadcrumb-link">Home</router-link>
            <i class="fas fa-chevron-right"></i>
            <router-link to="/blog" class="breadcrumb-link">Blog</router-link>
            <i class="fas fa-chevron-right"></i>
            <span class="breadcrumb-current">Blog Details</span>
          </nav>
          <div class="hero-badge">
            <i class="fas fa-newspaper badge-icon"></i>
            <span>Article</span>
          </div>
          <h1 class="blogdetails-hero-title">
            Latest From
            <span class="gradient-text-light d-block">Our Blog</span>
          </h1>
        </div>
      </div>
    </div>
    <div class="hero-wave-bottom">
      <svg viewBox="0 0 1440 120" preserveAspectRatio="none">
        <path d="M0,64 C240,96 480,96 720,64 C960,32 1200,32 1440,64 L1440,120 L0,120 Z" fill="#FFFFFF"/>
      </svg>
    </div>
  </section>

  <!--======== Blog Section ========-->
  <section class="vs-blog-wrapper blog-details space-page">
    <div class="container">
      <div class="row gx-60">
        <div class="col-xl-8 col-lg-7">
          <div class="vs-blog blog-single wow fadeInUp" data-wow-delay="0.1s">
            <div class="blog-img">
              <img src="/assets/img/blog/blog-single.jpg" alt="BLog Img">
            </div>
            <div class="blog-content">
              <div class="blog-meta">
                <span><i class="fal fa-calendar-alt"></i><a href="#">22 June, 2024</a></span>
                <span><i class="fal fa-user-tag"></i>by <a href="#">Rodja Hartmann</a></span>
                <span><i class="fal fa-folder-open"></i><a href="#">Kids</a><a href="#">Education</a><a href="#">Knowledge</a></span>
                <span><i class="fal fa-comments"></i><a href="#">239 Comments</a></span>
              </div>
              <h2 class="blog-title">We will to make your children's learning better mindset and expert.</h2>
              <p>Analyzing competing products or services can give you an idea of what already exists in your industry. This can help you find ways to improve your idea. It can also help you target weaknesses in your product or service before you spend time and money creating it. Be sure to note your competitor's prices during this process, which will give you a range of how much customers are currently spending on similar products.</p>
              <p>Once you've worked hard researching your idea and know it has the potential to last in the market, it's time to take your business to the next level by making it official. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi Rapidiously formulate collaborative platforms with intermandated.</p>
              <div class="blog-inner-list">
                <ul>
                  <li>If you've been asking yourself "what kind of business can I start with no money?" Check out some of these business ideas...</li>
                  <li>Asking yourself "what kind of business can I start with no money?" Check out some of these business ideas that you can do part time...</li>
                </ul>
              </div>
              <p>This can help you find ways to improve your idea. It can also help you target weaknesses in your product or service before you spend time and money creating it. Be sure to note your competitor's prices during this process. Rapidiously formulate collaborative platforms with intermandated.</p>
              <blockquote class="block-quote">
                <p>Analyzing competing products or services can give you idea of what already exists in your industry. This can help find ways to improve your idea on mind...</p>
                <cite>Angelina D. Smith</cite>
              </blockquote>
              <p>It can also help you target weaknesses in your product or service before you spend time and money creating it. Be sure to note your competitor's prices during this process, which will give you a range of how much customers are currently spending on similar products. Enim ad minim veniam, quis nostrud exercitation ullamco laboris during this process, which will give you a range</p>
            </div>
            <div class="share-links clearfix wow fadeInUp" data-wow-delay="0.1s">
              <div class="row justify-content-between">
                <div class="col-md-auto">
                  <span class="share-links-title">Tags: </span>
                  <div class="tagcloud"><a href="#">Education</a> <a href="#">Kids</a> <a href="#">Care</a></div>
                </div>
                <div class="col-md-auto text-md-end">
                  <span class="share-links-title">Share Now:</span>
                  <ul class="multi-social">
                    <li>
                      <a href="https://www.facebook.com/sharer/sharer.php?u=permalink"><i class="fab fa-facebook-f"></i></a>
                    </li>
                    <li>
                      <a href="#share?url=permalink"><i class="fab fa-twitter"></i></a>
                    </li>
                    <li>
                      <a href="#share?url=permalink"><i class="fab fa-linkedin-in"></i></a>
                    </li>
                    <li>
                      <a href="https://instagramcom/share?url=permalink"><i class="fab fa-instagram"></i></a>
                    </li>
                  </ul>
                </div>
              </div>
            </div><!-- / Share end -->
            <div class="blog-author d-md-flex align-items-center wow fadeInUp" data-wow-delay="0.1s">
              <div class="media-img">
                <img src="/assets/img/blog/author-1.jpg" alt="Blog Author">
              </div>
              <div class="media-body">
                <p class="author-degi">Written by</p>
                <h3 class="author-name"><a href="#">Jasmine Yulk</a></h3>
                <p class="author-text mb-0">Monotonectally procrastinate transparent architectures before robust oppo Progressively parallel task 24/365 mindshare and multimedia online feedback good services</p>
              </div>
            </div>
            <!-- Comment Start -->
            <div class="vs-comment-wrap wow fadeInUp" data-wow-delay="0.1s">
              <h3 class="blog-inner-title">3 Comments</h3>
              <ul class="comment-list">
                <li class="vs-comment">
                  <div class="vs-post-comment">
                    <div class="comment-avater"><img src="/assets/img/blog/author-2.jpg" alt="Comment Author" ></div>
                    <div class="comment-content">
                      <span class="commented-on">22 April, 2024</span>
                      <h4 class="name">Jeny Jone</h4>
                      <p class="text">Monotonectally procrastinate transparent architectures before robust oppo Progressively parallel task 24/365 mindshare and multimedia online feedback good services</p>
                      <div class="reply_and_edit">
                        <a href="#commentForm" class="reply-btn">Reply</a>
                      </div>
                    </div>
                  </div>
                  <ul class="children">
                    <li class="vs-comment">
                      <div class="vs-post-comment">
                        <div class="comment-avater"><img src="/assets/img/blog/author-1.jpg" alt="Comment Author"></div>
                        <div class="comment-content">
                          <span class="commented-on">23 April, 2024</span>
                          <h4 class="name">Jasmine Yulk</h4>
                          <p class="text">Competently provide access to fully researched methods of empowerment without sticky models. Credibly morph front-end niche markets.</p>
                          <div class="reply_and_edit">
                            <a href="#commentForm" class="reply-btn">Reply</a>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </li>
                <li class="vs-comment">
                  <div class="vs-post-comment">
                    <div class="comment-avater"><img src="/assets/img/blog/author-2.jpg" alt="Comment Author"></div>
                    <div class="comment-content">
                      <span class="commented-on">22 April, 2024</span>
                      <h4 class="name">Jeny Jone</h4>
                      <p class="text">Monotonectally procrastinate transparent architectures before robust oppo Progressively parallel task 24/365 mindshare and multimedia online feedback good services</p>
                      <div class="reply_and_edit">
                        <a href="#commentForm" class="reply-btn">Reply</a>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <!-- Comment Form -->
            <div class="vs-comment-form wow fadeInUp" data-wow-delay="0.1s">
              <div class="form-title">
                <h3 class="blog-inner-title">Leave a Comment</h3>
                <p class="form-text">Your email address will not be published. Required fields are marked *</p>
              </div>
              <div class="row">
                <div class="col-12 form-group">
                  <textarea placeholder="Write a Comment" id="commentForm" class="form-control style2"></textarea>
                  <i class="far fa-pencil-alt"></i>
                </div>
                <div class="col-md-6 form-group">
                  <input type="text" placeholder="Your Name" class="form-control style2">
                  <i class="fal fa-user"></i>
                </div>
                <div class="col-md-6 form-group">
                  <input type="text" placeholder="Your Email" class="form-control style2">
                  <i class="fal fa-envelope"></i>
                </div>
                <div class="col-12 form-group">
                  <button class="vs-btn"><i class="fal fa-paper-plane"></i> Post Comment</button>
                </div>
              </div>
            </div>
          </div> <!-- / Blog end -->
        </div> <!-- / col-8 end -->
        <!-- Sidebar -->
        <div class="col-xl-4 col-lg-5">
          <aside class="sidebar-area">
            <div class="widget widget_search wow fadeInUp" data-wow-delay="0.1s">
              <h4 class="widget_title">Search</h4>
              <form class="search-form">
                <input type="text" placeholder="Search Here">
                <button type="submit"><i class="far fa-search"></i></button>
              </form>
            </div>
            <div class="widget widget_categories wow fadeInUp" data-wow-delay="0.1s">
              <h4 class="widget_title">Categories</h4>
              <ul>
                <li><router-link to="/blog">Daycare Kids</router-link> <span>10</span></li>
                <li><router-link to="/blog">Online Education</router-link> <span>07</span></li>
                <li><router-link to="/blog">Pre School Jobs</router-link> <span>05</span></li>
                <li><router-link to="/blog">Outdoor Playing</router-link> <span>02</span></li>
              </ul>
            </div>
            <div class="widget wow fadeInUp" data-wow-delay="0.1s">
              <h4 class="widget_title">Popular Posts</h4>
              <div class="recent-post-wrap">
                <div class="recent-post">
                  <div class="media-img">
                    <router-link to="/blog-details"><img src="/assets/img/blog/thumb-1.jpg" alt="Blog Image"></router-link>
                  </div>
                  <div class="media-body">
                    <h4 class="post-title"><router-link to="/blog-details">User's Pepare Using Story Guide Yes</router-link></h4>
                    <div class="recent-post-meta"><router-link to="/blog"><i class="fal fa-calendar-alt"></i> Dec 12, 2024</router-link></div>
                  </div>
                </div>
                <div class="recent-post">
                  <div class="media-img">
                    <router-link to="/blog-details"><img src="/assets/img/blog/thumb-2.jpg" alt="Blog Image"></router-link>
                  </div>
                  <div class="media-body">
                    <h4 class="post-title"><router-link to="/blog-details">How to prepare child for examination</router-link></h4>
                    <div class="recent-post-meta"><router-link to="/blog"><i class="fal fa-calendar-alt"></i> Dec 12, 2024</router-link></div>
                  </div>
                </div>
                <div class="recent-post">
                  <div class="media-img">
                    <router-link to="/blog-details"><img src="/assets/img/blog/thumb-3.jpg" alt="Blog Image"></router-link>
                  </div>
                  <div class="media-body">
                    <h4 class="post-title"><router-link to="/blog-details">Imortance of childcare for your kids</router-link></h4>
                    <div class="recent-post-meta"><router-link to="/blog"><i class="fal fa-calendar-alt"></i> Dec 12, 2024</router-link></div>
                  </div>
                </div>
              </div>
            </div>
            <div class="widget widget_tag_cloud wow fadeInUp" data-wow-delay="0.1s">
              <h4 class="widget_title">Most Used Tags</h4>
              <div class="tagcloud">
                <router-link to="/blog">Child</router-link>
                <router-link to="/blog">Kids</router-link>
                <router-link to="/blog">Online</router-link>
                <router-link to="/blog">Education</router-link>
                <router-link to="/blog">Childcare</router-link>
                <router-link to="/blog">Care</router-link>
                <router-link to="/blog">Class</router-link>
                <router-link to="/blog">Exam</router-link>
              </div>
            </div>
            <div class="widget widget_banner wow fadeInUp" data-wow-delay="0.1s">
              <div class="banner">
                <img class="w-100" src="/assets/img/blog/widget-banner.jpg" alt="banner">
              </div>
              <div class="content">
                <span class="text-theme">Hurry Up</span>
                <h3 class="h3">Get 20% Off</h3>
              </div>
              <router-link to="/contact" class="vs-btn wave-btn banner-btn">Appointment</router-link>
            </div>
          </aside>
        </div>
      </div>
    </div>
  </section>
  <!--======== / Blog Section ========-->
</template>

<style scoped>
/* Modern Hero Section - Blog Details */
.blogdetails-hero-section {
  position: relative;
  overflow: hidden;
  z-index: 10;
}

.blogdetails-hero-bg {
  background: linear-gradient(135deg, #6C63FF 0%, #A29BFE 45%, #FF6584 100%);
  padding: 100px 0 60px;
  position: relative;
  z-index: 1;
}

.blogdetails-hero-content {
  text-align: center;
  position: relative;
  z-index: 2;
}

/* Modern Breadcrumb */
.modern-breadcrumb {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(10px);
  padding: 10px 24px;
  border-radius: 50px;
  margin-bottom: 24px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
}

.breadcrumb-link {
  color: rgba(255, 255, 255, 0.9);
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s ease;
}

.breadcrumb-link:hover {
  color: #fff;
  transform: translateX(-2px);
}

.modern-breadcrumb i {
  color: rgba(255, 255, 255, 0.6);
  font-size: 12px;
}

.breadcrumb-current {
  color: #fff;
  font-weight: 600;
}

/* Hero Badge */
.hero-badge {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
  padding: 12px 28px;
  border-radius: 50px;
  margin-bottom: 28px;
  border: 1px solid rgba(255, 255, 255, 0.3);
  animation: float 3s ease-in-out infinite;
}

.badge-icon {
  font-size: 20px;
  color: #fff;
}

.hero-badge span {
  color: #fff;
  font-weight: 600;
  font-size: 15px;
  letter-spacing: 0.5px;
}

@keyframes float {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}

/* Hero Title */
.blogdetails-hero-title {
  font-size: 48px;
  font-weight: 800;
  line-height: 1.2;
  margin-bottom: 0;
  color: #fff;
  text-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);
}

.gradient-text-light {
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(255, 255, 255, 0.7) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* Wave Bottom */
.hero-wave-bottom {
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 100%;
  z-index: 1;
}

.hero-wave-bottom svg {
  display: block;
  width: 100%;
  height: 80px;
}

/* Responsive Design */
@media (max-width: 991px) {
  .blogdetails-hero-bg {
    padding: 80px 0 50px;
  }

  .blogdetails-hero-title {
    font-size: 38px;
  }

  .hero-wave-bottom svg {
    height: 60px;
  }
}

@media (max-width: 767px) {
  .blogdetails-hero-bg {
    padding: 70px 0 40px;
  }

  .blogdetails-hero-title {
    font-size: 32px;
  }

  .modern-breadcrumb {
    padding: 8px 20px;
    gap: 10px;
    font-size: 14px;
  }

  .hero-badge {
    padding: 10px 24px;
    font-size: 14px;
  }

  .badge-icon {
    font-size: 18px;
  }

  .hero-wave-bottom svg {
    height: 50px;
  }
}

@media (max-width: 575px) {
  .blogdetails-hero-bg {
    padding: 74px 0 35px;
  }

  .blogdetails-hero-title {
    font-size: 28px;
  }

  .hero-wave-bottom svg {
    height: 40px;
  }
}
</style>
