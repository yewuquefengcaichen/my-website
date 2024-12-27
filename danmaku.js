class DanmakuSystem {
  constructor() {
    this.isMobile = window.innerWidth <= 768;
    this.wishes = [
      '新年快乐！',
      '恭喜发财！',
      '心想事成！',
      '万事如意！',
      '年年有余！',
      '大吉大利！',
      '身体健康！',
      '阖家欢乐！',
      '前程似锦！',
      '步步高升！'
    ];
    this.danmakuContainer = this.createContainer();
    this.maxDanmaku = this.isMobile ? 10 : 30;
    this.currentCount = 0;
    this.init();
  }

  createContainer() {
    const container = document.createElement('div');
    container.className = 'danmaku-container';
    document.body.appendChild(container);
    return container;
  }

  createDanmaku() {
    if (this.currentCount >= this.maxDanmaku) return;

    const danmaku = document.createElement('div');
    danmaku.className = 'danmaku';
    danmaku.textContent = this.wishes[Math.floor(Math.random() * this.wishes.length)];

    // 随机位置和速度
    danmaku.style.top = `${Math.random() * 70 + 15}%`;
    danmaku.style.animationDuration = `${Math.random() * 5 + 8}s`;

    this.danmakuContainer.appendChild(danmaku);
    this.currentCount++;

    // 动画结束后移除
    danmaku.addEventListener('animationend', () => {
      danmaku.remove();
      this.currentCount--;
    });
  }

  init() {
    // 定期发送弹幕
    setInterval(() => this.createDanmaku(), 2000);

    // 点击页面发送弹幕
    document.addEventListener('click', () => this.createDanmaku());
  }
} 