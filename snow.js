class SnowEffect {
  constructor() {
    this.snowflakes = [];
    this.isMobile = window.innerWidth <= 768;
    this.createSnowflakes();
    this.handleResize();
  }

  createSnowflakes() {
    const snowflakeCount = this.isMobile ? 20 : 50;
    const snowflakeChars = ['❅', '❆', '❄'];

    for (let i = 0; i < snowflakeCount; i++) {
      const snowflake = document.createElement('div');
      snowflake.className = 'snowflake';
      snowflake.textContent = snowflakeChars[Math.floor(Math.random() * snowflakeChars.length)];

      // 随机位置和动画时间
      snowflake.style.left = `${Math.random() * 100}vw`;
      snowflake.style.animationDuration = `${Math.random() * 3 + 2}s`;
      snowflake.style.opacity = Math.random();
      snowflake.style.fontSize = `${Math.random() * 1 + 0.5}em`;

      document.body.appendChild(snowflake);
      this.snowflakes.push(snowflake);
    }
  }

  handleResize() {
    window.addEventListener('resize', () => {
      const wasMobile = this.isMobile;
      this.isMobile = window.innerWidth <= 768;

      if (wasMobile !== this.isMobile) {
        // 清除现有雪花
        this.snowflakes.forEach(snowflake => snowflake.remove());
        this.snowflakes = [];
        // 重新创建适合当前设备的雪花数量
        this.createSnowflakes();
      }
    });
  }
}

// 初始化飘雪效果
new SnowEffect(); 