window.addEventListener('load', function load() {
  var burger = document.querySelector("nav div i");
  var ul = document.querySelector("nav ul");
  burger.addEventListener('click', function menu() {
    ul.class
    if (ul.classList.contains('mobile-nav')){
      ul.classList.remove('mobile-nav');
      burger.classList.replace("fa-times", "fa-bars");
    }
    else {
      ul.classList.toggle('mobile-nav');
      burger.classList.replace("fa-bars", "fa-times");
    }
  })

});
