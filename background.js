class BackgroundSlider {
  constructor() {
    this.slides = document.querySelectorAll('.bg-slides img');
    this.currentSlide = 0;
    this.interval = 10000; // 10秒切换一次
    this.loadDefaultBackground();
    this.init();
  }

  loadDefaultBackground() {
    const defaultBg = document.querySelector('.bg-slides img.active');
    if (defaultBg) {
      defaultBg.style.opacity = '1';
      defaultBg.style.visibility = 'visible';
    }
  }

  init() {
    // 预加载所有图片
    this.preloadImages();
    // 开始自动切换
    setInterval(() => this.nextSlide(), this.interval);
  }

  preloadImages() {
    this.slides.forEach(img => {
      const src = img.getAttribute('src');
      const newImg = new Image();
      newImg.src = src;
    });
  }

  nextSlide() {
    this.slides[this.currentSlide].classList.remove('active');
    this.currentSlide = (this.currentSlide + 1) % this.slides.length;
    this.slides[this.currentSlide].classList.add('active');
  }
}

// 初始化背景切换
new BackgroundSlider(); 