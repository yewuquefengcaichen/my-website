class NewYearCountdown {
  constructor() {
    this.createCountdownElement();
    this.updateCountdown();
    setInterval(() => this.updateCountdown(), 1000);
  }

  createCountdownElement() {
    const countdown = document.createElement('div');
    countdown.className = 'countdown';
    countdown.innerHTML = `
      <div class="countdown-title">距离新年还有</div>
      <div class="countdown-time">
        <div class="time-item">
          <span class="days">00</span>
          <span class="label">天</span>
        </div>
        <div class="time-item">
          <span class="hours">00</span>
          <span class="label">时</span>
        </div>
        <div class="time-item">
          <span class="minutes">00</span>
          <span class="label">分</span>
        </div>
        <div class="time-item">
          <span class="seconds">00</span>
          <span class="label">秒</span>
        </div>
      </div>
    `;
    document.querySelector('.hero-section').insertBefore(
      countdown,
      document.querySelector('.cta-buttons')
    );
    this.countdown = countdown;
  }

  updateCountdown() {
    const now = new Date();
    const currentYear = now.getFullYear();
    const nextYear = new Date(currentYear + 1, 0, 1);
    const diff = nextYear - now;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    this.countdown.querySelector('.days').textContent = days.toString().padStart(2, '0');
    this.countdown.querySelector('.hours').textContent = hours.toString().padStart(2, '0');
    this.countdown.querySelector('.minutes').textContent = minutes.toString().padStart(2, '0');
    this.countdown.querySelector('.seconds').textContent = seconds.toString().padStart(2, '0');
  }
} 