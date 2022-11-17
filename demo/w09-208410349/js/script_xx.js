const navbar = document.querySelector('#navbar');

// add fixed class to navbar
window.addEventListener('scroll', function () {
  if (window.pageYOffset > 100) {
    navbar.classList.add('navbar-fixed');
  } else {
    navbar.classList.remove('navbar-fixed');
  }
});

function showPage(index) {

  const p = document.querySelector('.show-quiz1-answer');
  console.log('p', p);

  switch(index) {
     case 1:
       p.innerHTML = `<iframe src="./cards/card_xx.html" width="100%" height="100%" />`
       break;
     case 2:
      p.innerHTML = `<iframe src="./cards/card2_xx.html" width="100%" height="100%" />`
       break;
      case 3:
        p.innerHTML = `<iframe src="./cards/card_xx.html" width="100%" height="100%" />`
        break;
      case 4:
       p.innerHTML = `<iframe src="./cards/card2_xx.html" width="100%" height="100%" />`
        break;
        case 5:
          p.innerHTML = `<iframe src="./cards/card_xx.html" width="100%" height="100%" />`
          break;
        case 6:
         p.innerHTML = `<iframe src="../w09-208410349/resume_xx.html" width="100%" height="100%" />`
          break;
  }

}