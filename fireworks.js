class Fireworks {
  constructor() {
    this.canvas = document.createElement('canvas');
    this.canvas.style.position = 'fixed';
    this.canvas.style.top = '0';
    this.canvas.style.left = '0';
    this.canvas.style.pointerEvents = 'none';
    this.canvas.style.zIndex = '99';
    document.body.appendChild(this.canvas);

    this.ctx = this.canvas.getContext('2d');
    this.particles = [];
    this.resizeCanvas();
    this.bindEvents();
    this.autoLaunch();
  }

  resizeCanvas() {
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
  }

  bindEvents() {
    window.addEventListener('resize', () => this.resizeCanvas());
    document.addEventListener('click', (e) => this.createFirework(e.clientX, e.clientY));
  }

  autoLaunch() {
    setInterval(() => {
      const x = Math.random() * this.canvas.width;
      const y = this.canvas.height;
      this.createFirework(x, y);
    }, 3000);
  }

  createFirework(x, y) {
    const colors = ['#ff0', '#f0f', '#0ff', '#ff4d4f', '#ffd700'];
    const particles = 50;

    for (let i = 0; i < particles; i++) {
      const angle = (Math.PI * 2 * i) / particles;
      const velocity = 8;
      const life = 100;

      this.particles.push({
        x,
        y,
        vx: Math.cos(angle) * velocity * (0.8 + Math.random() * 0.4),
        vy: Math.sin(angle) * velocity * (0.8 + Math.random() * 0.4),
        color: colors[Math.floor(Math.random() * colors.length)],
        life,
        maxLife: life,
        size: Math.random() * 2 + 1
      });
    }
  }

  animate() {
    this.ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

    for (let i = this.particles.length - 1; i >= 0; i--) {
      const p = this.particles[i];
      p.x += p.vx;
      p.y += p.vy;
      p.vy += 0.15;
      p.life--;

      const alpha = p.life / p.maxLife;
      const size = p.size * alpha;

      this.ctx.globalAlpha = alpha;
      this.ctx.fillStyle = p.color;
      this.ctx.beginPath();
      this.ctx.arc(p.x, p.y, size, 0, Math.PI * 2);
      this.ctx.fill();

      this.ctx.shadowBlur = 10;
      this.ctx.shadowColor = p.color;

      if (p.life <= 0) {
        this.particles.splice(i, 1);
      }
    }

    requestAnimationFrame(() => this.animate());
  }

  createExplosion(x, y, color) {
    const particles = 30;
    for (let i = 0; i < particles; i++) {
      const angle = (Math.PI * 2 * i) / particles;
      const velocity = 2 + Math.random() * 2;
      this.particles.push({
        x,
        y,
        vx: Math.cos(angle) * velocity,
        vy: Math.sin(angle) * velocity,
        color,
        life: 50,
        maxLife: 50,
        size: Math.random() * 1.5 + 0.5
      });
    }
  }
}

// 初始化烟花效果
const fireworks = new Fireworks();
fireworks.animate(); 