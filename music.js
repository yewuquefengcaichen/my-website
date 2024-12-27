class MusicPlayer {
  constructor() {
    this.createMusicButton();
    this.createAudio();
    this.isPlaying = false;
  }

  createMusicButton() {
    const button = document.createElement('div');
    button.className = 'music-btn';
    button.innerHTML = `
      <img src="assets/music.png" alt="音乐">
      <span>新年音乐</span>
    `;
    document.body.appendChild(button);
    this.button = button;
  }

  createAudio() {
    const audio = document.createElement('audio');
    audio.src = 'assets/music/new-year.mp3';
    audio.loop = true;
    document.body.appendChild(audio);
    this.audio = audio;
  }

  togglePlay() {
    if (this.isPlaying) {
      this.audio.pause();
      this.button.classList.remove('playing');
    } else {
      this.audio.play();
      this.button.classList.add('playing');
    }
    this.isPlaying = !this.isPlaying;
  }

  init() {
    this.button.addEventListener('click', () => this.togglePlay());
  }
}

// 初始化音乐播放器
const musicPlayer = new MusicPlayer();
musicPlayer.init(); 