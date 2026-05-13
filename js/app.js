/**
 * app.js - 网站公共脚本
 * 滚动动画、页面入场等全局功能
 */

document.addEventListener('DOMContentLoaded', function () {

  // ===== 1. 滚动触发动画 (Intersection Observer) =====
  var revealEls = document.querySelectorAll('.reveal');
  if (revealEls.length) {
    if ('IntersectionObserver' in window) {
      var obs = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            obs.unobserve(entry.target);
          }
        });
      }, { threshold: 0.12 });
      revealEls.forEach(function (el) { obs.observe(el); });
    } else {
      // 降级：不支持 IntersectionObserver 时直接显示
      revealEls.forEach(function (el) { el.classList.add('visible'); });
    }
  }

  // ===== 2. 导航高亮（匹配当前页面） =====
  var pageName = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(function (a) {
    var href = a.getAttribute('href');
    if (href === pageName) a.classList.add('active');
  });

});
