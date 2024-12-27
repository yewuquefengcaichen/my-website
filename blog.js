class BlogManager {
  constructor() {
    this.categories = document.querySelectorAll('.category-btn');
    this.posts = document.querySelectorAll('.blog-card');
    this.searchInput = document.getElementById('search-input');
    this.init();
  }

  init() {
    // 分类筛选
    this.categories.forEach(category => {
      category.addEventListener('click', () => {
        this.categories.forEach(c => c.classList.remove('active'));
        category.classList.add('active');
        this.filterPosts(category.dataset.category);
      });
    });

    // 搜索功能
    this.searchInput.addEventListener('input', () => {
      this.searchPosts(this.searchInput.value.toLowerCase());
    });

    // 添加文章淡入动画
    this.posts.forEach(post => {
      post.style.animation = 'fadeIn 0.5s ease forwards';
    });
  }

  filterPosts(category) {
    this.posts.forEach(post => {
      if (category === 'all' || post.dataset.category === category) {
        post.style.display = 'block';
        post.style.animation = 'fadeIn 0.5s ease forwards';
      } else {
        post.style.display = 'none';
      }
    });
  }

  searchPosts(query) {
    this.posts.forEach(post => {
      const title = post.querySelector('h2').textContent.toLowerCase();
      const content = post.querySelector('p').textContent.toLowerCase();
      const tags = Array.from(post.querySelectorAll('.blog-tags span'))
        .map(tag => tag.textContent.toLowerCase());

      if (title.includes(query) || content.includes(query) ||
        tags.some(tag => tag.includes(query))) {
        post.style.display = 'block';
        post.style.animation = 'fadeIn 0.5s ease forwards';
      } else {
        post.style.display = 'none';
      }
    });
  }
}

// 初始化博客管理器
new BlogManager(); 