const menuCheckbox = document.querySelector('#navi-toggle');
const menuList = document.querySelector('.navigation__list');
menuList.style.visibility = 'hidden';

menuCheckbox.addEventListener('click', (e) => {
    if (!e.target.checked) {
        menuList.style.visibility = 'hidden';
        setTimeout(() => {
            menuList.style.display = 'none';
        }, 150);
    } else {
        menuList.style.visibility = 'visible';
        menuList.style.display = 'inline-block';
    }
})