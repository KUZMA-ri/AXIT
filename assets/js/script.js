(function () {
    const burger = document.querySelector('.burger');
    burger.addEventListener('click', () => {
        burger.classList.toggle('burger_active');
    });
}());

(function () {
    const burger = document.querySelector('.burger');
    const headerActive = document.querySelector('.header__nav')
    burger.addEventListener('click', () => {
        headerActive.classList.toggle('header__nav_active');
    });
}());

(function () {
    const burger = document.querySelector('.burger');
    const headerList = document.querySelector('.header__list')
    burger.addEventListener('click', () => {
        headerList.classList.toggle('header__list_active');
    });
}());


