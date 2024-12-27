class Clock {
  constructor() {
    this.datetimeElement = document.querySelector('.datetime');
    this.updateClock();
    setInterval(() => this.updateClock(), 1000);
  }

  updateClock() {
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth() + 1;
    const date = now.getDate();
    const day = ['日', '一', '二', '三', '四', '五', '六'][now.getDay()];
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');

    this.datetimeElement.textContent =
      `${year}年 ${month}月 ${date}日 星期${day} ${hours}:${minutes}:${seconds}`;
  }
} 