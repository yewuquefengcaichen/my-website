class BackgroundSlideshow {
  constructor() {
    this.bgImage = document.querySelector('.bg-slides img');
    this.wallpapers = [
      'https://api.dujin.org/bing/1920.php',
      'https://source.unsplash.com/1920x1080/?nature',
      'https://source.unsplash.com/1920x1080/?landscape',
      'https://source.unsplash.com/1920x1080/?mountain',
      'https://source.unsplash.com/1920x1080/?ocean'
    ];
    this.currentIndex = 0;
    this.init();
  }

  init() {
    setInterval(() => this.nextWallpaper(), 2000);
    this.initParallax();
  }

  nextWallpaper() {
    const nextImage = new Image();
    nextImage.src = this.wallpapers[this.currentIndex];

    nextImage.onload = () => {
      this.bgImage.style.opacity = '0';

      setTimeout(() => {
        this.bgImage.src = nextImage.src;
        this.bgImage.style.opacity = '1';
      }, 500);
    };

    this.currentIndex = (this.currentIndex + 1) % this.wallpapers.length;
  }

  initParallax() {
    const floatItems = document.querySelectorAll('.float-item');

    document.addEventListener('mousemove', (e) => {
      const { clientX, clientY } = e;
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;

      floatItems.forEach(item => {
        const speed = item.getAttribute('data-speed');
        const x = (centerX - clientX) * speed * 0.01;
        const y = (centerY - clientY) * speed * 0.01;

        item.style.transform = `translate(${x}px, ${y}px)`;
      });
    });
  }
}

// 初始化背景切换效果
new BackgroundSlideshow();

// 添加页面载入动画
document.addEventListener('DOMContentLoaded', () => {
  document.body.classList.add('loaded');
}); 