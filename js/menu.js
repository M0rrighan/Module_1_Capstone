const menuBtnOpen = document.querySelector('.openMenuBtn');
const menuBtnClose = document.querySelector('.closeMenuBtn');
const menu = document.querySelector('.mobile-menu');
const navlinks = document.querySelectorAll('.navlinks a');

for (let i = 0; i < navlinks.length; i += 1) {
  const clone = navlinks[i].cloneNode(true);
  menu.appendChild(clone);
}

menuBtnOpen.addEventListener('click', () => {
  menu.classList.replace('mobile-menu-closed', 'mobile-menu-opened');
  menuBtnOpen.style.display = 'none';
  menuBtnClose.style.display = 'block';
});

menuBtnClose.addEventListener('click', () => {
  menu.classList.replace('mobile-menu-opened', 'mobile-menu-closed');
  menuBtnOpen.style.display = 'block';
  menuBtnClose.style.display = 'none';
});
