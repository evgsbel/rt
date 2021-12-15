//ancors

const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()

    const blockID = anchor.getAttribute('href').substr(1)

    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}


// mobile menu
$(() => {
  const btnMenu = document.querySelector('.js-open-menu');
  const menu = document.querySelector('.nav');
  const body = document.querySelector('body');
  // let heroHeight = document.querySelector('.hero').clientHeight
  // let headerHeight = document.querySelector('.header').clientHeight

  const toggleMenu = function () {
    menu.classList.toggle('is-open');
    // menu.style.height = heroHeight + headerHeight + 'px'
    btnMenu.classList.toggle('is-active');
    // body.classList.toggle('opened-menu');
  };

  btnMenu.addEventListener('click', function (e) {
    e.stopPropagation();
    toggleMenu();
  });

});

