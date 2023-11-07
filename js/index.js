const hamburger = document.querySelector('.header-logo-mobile-open');

hamburger.addEventListener('click', () => {
    console.log('click');

    hamburger.classList.toggle('open');

    var menuOpen = hamburger.querySelector('.mobile-open');
    var menuClose = hamburger.querySelector('.mobile-close ');
    var menuWrap = document.querySelector('.header-menus.mobile');

    if (hamburger.classList.contains('open')) {
        menuOpen.classList.remove('active');
        menuClose.classList.remove('hidden');
        menuWrap.classList.add('active');
    } else {
        menuOpen.classList.add('active');
        menuClose.classList.add('hidden');
        menuWrap.classList.remove('active');
    }
});


const mobileWrapper = document.querySelector('.header-menus.mobile');
const itemMenus = mobileWrapper.querySelector('.item-menus');

itemMenus.addEventListener('click', () => {
    var menuOpen = hamburger.querySelector('.mobile-open');
    var menuClose = hamburger.querySelector('.mobile-close ');
    var menuWrap = document.querySelector('.header-menus.mobile');

    menuOpen.classList.add('active');
    menuClose.classList.add('hidden');
    menuWrap.classList.remove('active');
});

console.log(hamburger);