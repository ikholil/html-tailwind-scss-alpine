import Swiper from 'swiper'
import { Autoplay, Navigation, Scrollbar } from 'swiper/modules'
const ProductSwiper = new Swiper('.product-swiper', {
    slidesPerView: 1,
    spaceBetween: 24,
    loop: true,
    autoplay: true,
    navigation: {
      nextEl: '.next-product',
      prevEl: '.prev-product'
    },
    modules: [Autoplay, Navigation, Scrollbar],
    breakpoints: {
      768: {
        slidesPerView: 2,
        scrollbar: {
          dragSize: 150
        }
      },
      1024: {
        slidesPerView: 3,
        scrollbar: {
          dragSize: 200
        }
      }
    },
    scrollbar: {
      el: '.product-scrollbar',
      dragSize: 120,
      draggable: true
      // hide: true,
    }
  })
  
  const brandSliderOne = new Swiper('.brand-slider-one', {
    slidesPerView: 1,
    spaceBetween: 24,
    loop: true,
    autoplay: {
      delay: 1,
      pauseOnMouseEnter: true,
      reverseDirection: true
    },
    speed: 6000,
    allowTouchMove: false,
    modules: [Autoplay],
    breakpoints: {
      580: {
        slidesPerView: 2
      },
      768: {
        slidesPerView: 3
      },
      992: {
        slidesPerView: 4,
        spaceBetween: 30
      },
      1200: {
        slidesPerView: 5,
        spaceBetween: 35
      },
      1400: {
        slidesPerView: 7,
        spaceBetween: 40
      },
      1600: {
        slidesPerView: 8,
        spaceBetween: 40
      }
    }
  })
  const brandSliderTwo = new Swiper('.brand-slider-two', {
    slidesPerView: 1,
    spaceBetween: 24,
    loop: true,
    autoplay: {
      delay: 1,
      pauseOnMouseEnter: true
    },
    speed: 6000,
    allowTouchMove: false,
    modules: [Autoplay],
    breakpoints: {
      580: {
        slidesPerView: 2
      },
      768: {
        slidesPerView: 3
      },
      992: {
        slidesPerView: 4,
        spaceBetween: 30
      },
      1200: {
        slidesPerView: 5,
        spaceBetween: 35
      },
      1400: {
        slidesPerView: 7,
        spaceBetween: 40
      },
      1600: {
        slidesPerView: 8,
        spaceBetween: 40
      }
    }
  })
  
  const BlogSwiper = new Swiper('.related-blog-swiper', {
    slidesPerView: 1,
    spaceBetween: 24,
    loop: true,
    autoplay: true,
    navigation: {
      nextEl: '.next-blog',
      prevEl: '.prev-blog'
    },
    modules: [Autoplay, Navigation],
    breakpoints: {
      768: {
        slidesPerView: 2,
        scrollbar: {
          dragSize: 150
        }
      },
      1024: {
        slidesPerView: 3,
        scrollbar: {
          dragSize: 200
        }
      }
    }
  })