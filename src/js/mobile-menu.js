(() => {
  const mobileMenu = document.querySelector('.js-menu-container');
  const openMenuBtn = document.querySelector('.js-open-menu');
  const closeMenuBtn = document.querySelector('.js-close-menu');
 
 

  const toggleMenu = (event) => {
    const isMenuOpen = openMenuBtn.getAttribute('aria-expanded') === 'true' || false;
    const scrollLockMethod = !isMenuOpen ? 'disableBodyScroll' : 'enableBodyScroll';
    openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
    mobileMenu.classList.toggle('is-open');
    bodyScrollLock[scrollLockMethod](document.body);
  };


  openMenuBtn.addEventListener('click', toggleMenu);
  closeMenuBtn.addEventListener('click', toggleMenu);



  // Close the mobile menu on wider screens if the device orientation changes
  window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
    if (!e.matches) return;
    mobileMenu.classList.remove('is-open');
    openMenuBtn.setAttribute('aria-expanded', false); 
    bodyScrollLock.enableBodyScroll(document.body);
  });

   // close mobile menu
{
  let tags = document.getElementsByClassName('burger-menu__nav-item');
  let btn = document.querySelector('.burger-menu__order-button');

    let fun = function (e) {
      e.addEventListener('click', toggleMenu);
    }
    
  fun(btn);
  
  for (let i = 0; i < tags.length; i++) {
    fun(tags[i]);
  }
}
})();