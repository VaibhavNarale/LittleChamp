/**
 * Initialize all template scripts after Vue component mounts
 */
export function initTemplateScripts() {
  if (!window.jQuery) {
    console.error('jQuery not loaded yet')
    return
  }

  const $ = window.jQuery

  // 1. Set Background Images or Gradients
  if ($('[data-bg-src]').length > 0) {
    $('[data-bg-src]').each(function () {
      var src = $(this).attr('data-bg-src')
      var useGradient = false
      var gradient = ''

      // Use gradients for missing hero background images
      if (src.includes('hero1-1')) {
        gradient = 'linear-gradient(135deg, #fec624 0%, #9C29B2 50%, #786acf 100%)'
        useGradient = true
      } else if (src.includes('hero1-2')) {
        gradient = 'linear-gradient(135deg, #88c90d 0%, #9C29B2 50%, #fec624 100%)'
        useGradient = true
      } else if (src.includes('hero1-3')) {
        gradient = 'linear-gradient(135deg, #786acf 0%, #9C29B2 50%, #88c90d 100%)'
        useGradient = true
      } else if (src.includes('breadcrumb')) {
        gradient = 'linear-gradient(135deg, #786acf 0%, #9C29B2 50%, #88c90d 100%)'
        useGradient = true
      } else if (src.includes('counter-bg')) {
        gradient = 'linear-gradient(to bottom, #fef5ff 0%, #f9f6ef 100%)'
        useGradient = true
      } else if (src.includes('footer')) {
        gradient = 'linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)'
        useGradient = true
      }

      // Apply gradient or image
      if (useGradient) {
        $(this).css('background-image', gradient)
      } else {
        // Load actual image for shapes and other backgrounds
        $(this).css('background-image', 'url(' + src + ')')
      }

      $(this).removeAttr('data-bg-src').addClass('background-image')
    })
  }

  // 2. Set Mask Images
  if ($('[data-mask-src]').length > 0) {
    $('[data-mask-src]').each(function () {
      var mask = $(this).attr('data-mask-src')
      $(this).css({
        'mask-image': 'url(' + mask + ')',
        '-webkit-mask-image': 'url(' + mask + ')'
      })
      $(this).removeAttr('data-mask-src')
    })
  }

  // 3. Initialize WOW.js for scroll animations
  if (typeof WOW !== 'undefined') {
    new WOW().init()
  }

  // 4. Custom Animation Duration
  $('[data-ani-duration]').each(function () {
    var durationTime = $(this).data('ani-duration')
    $(this).css('animation-duration', durationTime)
  })

  // 5. Custom Animation Delay
  $('[data-ani-delay]').each(function () {
    var delayTime = $(this).data('ani-delay')
    $(this).css('animation-delay', delayTime)
  })

  // 6. Custom Animation Classes
  $('[data-ani]').each(function () {
    var animationName = $(this).data('ani')
    $(this).addClass(animationName)
  })

  // 7. Initialize Slick Carousels
  if ($('.vs-carousel').length > 0) {
    $('.vs-carousel').each(function () {
      var $this = $(this)

      // Destroy existing slick if already initialized
      if ($this.hasClass('slick-initialized')) {
        $this.slick('unslick')
      }

      var slideToShow = $this.data('slide-show') || 1
      var slideToShowLg = $this.data('lg-slide-show') || slideToShow
      var slideToShowMd = $this.data('md-slide-show') || slideToShowLg
      var slideToShowSm = $this.data('sm-slide-show') || 1
      var arrows = $this.data('arrows') !== false
      var dots = $this.data('dots') || false
      var fade = $this.data('fade') || false
      var autoplay = $this.data('autoplay') !== false
      var infinite = $this.data('infinite') !== false
      var centerMode = $this.data('center-mode') || false

      $this.slick({
        slidesToShow: slideToShow,
        slidesToScroll: 1,
        arrows: false,  // Disable default arrows (use custom arrows via data-slick-prev/next)
        dots: dots,
        fade: fade,
        autoplay: autoplay,
        autoplaySpeed: 5000,
        infinite: infinite,
        centerMode: centerMode,
        responsive: [
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: slideToShowLg,
            }
          },
          {
            breakpoint: 992,
            settings: {
              slidesToShow: slideToShowMd,
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: slideToShowSm,
            }
          }
        ]
      })

      // Handle custom animations on slide change
      $this.on('afterChange', function (event, slick, currentSlide) {
        $(slick.$slides).find('[data-ani]').removeClass('vs-animated')
        $(slick.$slides[currentSlide]).find('[data-ani]').addClass('vs-animated')
      })

      // Activate animation on first slide
      setTimeout(() => {
        $('.slick-current [data-ani]').addClass('vs-animated')
      }, 100)
    })
  }

  // 8. Shape Mockup Positioning
  if ($('.shape-mockup').length > 0) {
    $('.shape-mockup').each(function () {
      var $currentShape = $(this)
      var shapeTop = $currentShape.data('top')
      var shapeRight = $currentShape.data('right')
      var shapeBottom = $currentShape.data('bottom')
      var shapeLeft = $currentShape.data('left')

      $currentShape.css({
        top: shapeTop,
        right: shapeRight,
        bottom: shapeBottom,
        left: shapeLeft,
      }).removeAttr('data-top')
        .removeAttr('data-right')
        .removeAttr('data-bottom')
        .removeAttr('data-left')
        .parent().addClass('shape-mockup-wrap')
    })
  }

  // 9. Counter Up
  if ($('.counter').length > 0) {
    $('.counter').counterUp({
      delay: 10,
      time: 1000
    })
  }

  // 10. Magnific Popup for images
  if ($('.popup-image').length > 0) {
    $('.popup-image').magnificPopup({
      type: 'image',
      gallery: {
        enabled: true
      }
    })
  }

  // 11. Magnific Popup for videos
  if ($('.popup-video').length > 0) {
    $('.popup-video').magnificPopup({
      type: 'iframe'
    })
  }

  // 12. Custom Slick Arrows
  $('[data-slick-next]').each(function () {
    var target = $(this).data('slick-next')
    $(this).on('click', function () {
      $(target).slick('slickNext')
    })
  })

  $('[data-slick-prev]').each(function () {
    var target = $(this).data('slick-prev')
    $(this).on('click', function () {
      $(target).slick('slickPrev')
    })
  })

  // 13. Filter/Isotope
  if ($('.filter-active').length > 0) {
    $('.filter-active').imagesLoaded(function () {
      var $grid = $('.filter-active').isotope({
        itemSelector: '.filter-item',
        filter: '*',
      })

      $('.filter-menu-active').on('click', 'button', function () {
        var filterValue = $(this).attr('data-filter')
        $grid.isotope({ filter: filterValue })
        $(this).addClass('active').siblings('.active').removeClass('active')
      })
    })
  }

  // 14. Add wave button effect
  if ($('.wave-btn').length > 0) {
    var btnHover = $("<span class='btn-hover'><span class='btn-hover-inner'><span class='part part-1'></span><span class='part part-1'></span><span class='part part-1'></span><span class='part part-1'></span></span></span>")
    $('.wave-btn').each(function() {
      if (!$(this).find('.btn-hover').length) {
        $(this).append(btnHover.clone())
      }
    })
  }
}

/**
 * Cleanup scripts before component unmount
 */
export function cleanupTemplateScripts() {
  if (!window.jQuery) return

  const $ = window.jQuery

  // Destroy all slick carousels
  if ($('.slick-initialized').length > 0) {
    $('.slick-initialized').slick('unslick')
  }
}
