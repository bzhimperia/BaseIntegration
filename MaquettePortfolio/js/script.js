document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('burger-icon').addEventListener('click', function() {
      var menuList = document.getElementById('menu-list');
      menuList.style.transform = menuList.style.transform === 'scaleY(1)' ? 'scaleY(0)' : 'scaleY(1)';
  });
});