class ProjectsFilter {
  constructor() {
    this.filters = document.querySelectorAll('.filter-btn');
    this.projects = document.querySelectorAll('.project-card');
    this.init();
  }

  init() {
    this.filters.forEach(filter => {
      filter.addEventListener('click', () => {
        // 移除所有active类
        this.filters.forEach(f => f.classList.remove('active'));
        // 添加active类到当前按钮
        filter.classList.add('active');

        const category = filter.dataset.filter;
        this.filterProjects(category);
      });
    });
  }

  filterProjects(category) {
    this.projects.forEach(project => {
      if (category === 'all' || project.dataset.category === category) {
        project.style.display = 'block';
        project.style.animation = 'fadeIn 0.5s ease forwards';
      } else {
        project.style.display = 'none';
      }
    });
  }
}

// 初始化项目筛选
new ProjectsFilter(); 