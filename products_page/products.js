const toggleNavBackground = function () {
  const nav = document.querySelector('#nav-top');
  if (window.scrollY > nav.scrollHeight) {
    nav.classList.add('scrolling');
  } else {
    nav.classList.remove('scrolling');
  }
};

document.addEventListener('scroll', toggleNavBackground);