new WOW().init();
var mySwiper = new Swiper('.swiper-container', {
    pagination: {
        el: '.projects-pagination',
        bulletClass:'projects-bullet',
        bulletActiveClass: 'projects-bullet-active',
        clickable: true
      },
});

const buttonF = document.querySelector(".form-buton");

buttonF.addEventListener('click', function (event) {
    alert("Помилка часу.")
});
