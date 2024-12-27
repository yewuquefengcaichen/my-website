class HeartEffect {
  constructor() {
    this.colors = [
      '#ff6b6b', '#f06595', '#cc5de8', '#845ef7',
      '#5c7cfa', '#339af0', '#51cf66', '#94d82d',
      '#ffd43b', '#ff922b'
    ];
    this.init();
  }

  init() {
    document.addEventListener('click', (e) => this.createHearts(e));
  }

  createHearts(e) {
    const { clientX, clientY } = e;

    // 创建30-40个爱心
    const count = Math.floor(Math.random() * 11 + 30);

    for (let i = 0; i < count; i++) {
      setTimeout(() => {
        this.createHeart(clientX, clientY);
      }, i * 20); // 错开创建时间，产生连续爆发效果
    }
  }

  createHeart(x, y) {
    const heart = document.createElement('div');
    heart.className = 'heart';

    // 随机大小 (8-40px)
    const size = Math.random() * 32 + 8;
    heart.style.width = `${size}px`;
    heart.style.height = `${size}px`;

    // 随机颜色
    heart.style.background = this.colors[Math.floor(Math.random() * this.colors.length)];

    // 随机起始位置（在点击位置周围小范围随机）
    const startX = x + (Math.random() - 0.5) * 20;
    const startY = y + (Math.random() - 0.5) * 20;
    heart.style.left = `${startX}px`;
    heart.style.top = `${startY}px`;

    // 随机角度和距离
    const angle = Math.random() * 360;
    const distance = Math.random() * 150 + 100;
    const duration = Math.random() * 0.6 + 0.8;

    heart.style.setProperty('--angle', `${angle}deg`);
    heart.style.setProperty('--distance', `${distance}px`);
    heart.style.setProperty('--duration', `${duration}s`);

    // 添加缩放和旋转动画
    heart.style.setProperty('--scale', Math.random() * 0.5 + 0.5);
    heart.style.setProperty('--rotate', (Math.random() - 0.5) * 90 + 'deg');

    document.body.appendChild(heart);

    setTimeout(() => {
      document.body.removeChild(heart);
    }, duration * 1000);
  }
}

new HeartEffect(); 