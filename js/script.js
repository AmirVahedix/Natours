const menuCheckbox = document.querySelector('#navi-toggle');
const menuList = document.querySelector('.navigation__list');

menuCheckbox.addEventListener('click', (e) => {
    if (!e.target.checked) {
        setTimeout(() => {
            menuList.style.display = 'none';
        }, 800);
    }
})