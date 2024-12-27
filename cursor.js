class Cursor {
  constructor() {
    this.cursor = document.getElementById('cursor');
    this.follower = document.getElementById('cursor-follower');
    this.init();
  }

  init() {
    document.addEventListener('mousemove', (e) => {
      this.moveCursor(e);
    });

    document.querySelectorAll('a, button, .card').forEach(el => {
      el.addEventListener('mouseenter', () => this.expand());
      el.addEventListener('mouseleave', () => this.shrink());
    });
  }

  moveCursor(e) {
    requestAnimationFrame(() => {
      this.cursor.style.left = `${e.clientX}px`;
      this.cursor.style.top = `${e.clientY}px`;
    });

    setTimeout(() => {
      requestAnimationFrame(() => {
        this.follower.style.left = `${e.clientX}px`;
        this.follower.style.top = `${e.clientY}px`;
      });
    }, 100);
  }

  expand() {
    this.cursor.style.transform = 'translate(-50%, -50%) scale(2)';
    this.follower.style.transform = 'translate(-50%, -50%) scale(1.5)';
  }

  shrink() {
    this.cursor.style.transform = 'translate(-50%, -50%) scale(1)';
    this.follower.style.transform = 'translate(-50%, -50%) scale(1)';
  }
}

new Cursor(); 