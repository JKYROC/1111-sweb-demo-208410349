const navbar = document.querySelector('#nav');
const date = document.querySelector('#date');
// add fixed class to navbar

const navBtn = document.querySelector('#nav-btn');
const closeBtn = document.querySelector('#close-btn');
const sidebar = document.querySelector('#sidebar');

console.log('navBtn', navBtn);
console.log('closeBtn', closeBtn);
console.log('sidebar', sidebar);
navBtn.addEventListener('click',function(){
  sidebar.classList.add('show-sidebar');
});
closeBtn.addEventListener('click',function(){
  sidebar.classList.remove('show-sidebar');
});
window.addEventListener('scroll', function () {
  if (window.pageYOffset > 80) {
    navbar.classList.add('navbar-fixed');
  } else {
    navbar.classList.remove('navbar-fixed');
  }
});
// set year
date.innerHTML = new Date().getFullYear();
