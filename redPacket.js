class RedPacket {
  constructor() {
    this.createRedPacketButton();
    this.bindEvents();
  }

  createRedPacketButton() {
    const button = document.createElement('div');
    button.className = 'red-packet-btn';
    button.innerHTML = `
      <img src="assets/red-packet.png" alt="红包">
      <span>新年快乐</span>
    `;
    document.body.appendChild(button);
  }

  createRedPacketModal() {
    const modal = document.createElement('div');
    modal.className = 'red-packet-modal';
    modal.innerHTML = `
      <div class="red-packet-content">
        <img src="assets/red-packet-open.png" alt="打开的红包">
        <h2>恭喜发财</h2>
        <p>祝您在新的一年里身体健康，万事如意！</p>
        <button class="close-btn">关闭</button>
      </div>
    `;
    document.body.appendChild(modal);
    return modal;
  }

  bindEvents() {
    const button = document.querySelector('.red-packet-btn');
    button.addEventListener('click', () => {
      const modal = this.createRedPacketModal();
      modal.querySelector('.close-btn').addEventListener('click', () => {
        modal.remove();
      });
    });
  }
} 