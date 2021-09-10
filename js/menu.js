const menuBtnOpen = document.querySelector('.openMenuBtn');
const menuBtnClose = document.querySelector('.closeMenuBtn');
const menu = document.querySelector('.mobile-menu');
const navlinks = document.querySelectorAll('.navlinks a');
const menuIcon = document.querySelector('.openMenuBtn i');
const menuIconTop = menuIcon.getBoundingClientRect().top;
const menuIconBottom = menuIcon.getBoundingClientRect().bottom;
const darkSections = document.querySelectorAll('[data-darkBg="true"]');

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

document.addEventListener('scroll', () => {
  const top0 = darkSections[0].getBoundingClientRect().top;
  const bottom0 = darkSections[0].getBoundingClientRect().bottom;
  const top1 = darkSections[1].getBoundingClientRect().top;
  const bottom1 = darkSections[1].getBoundingClientRect().bottom;

  if ((top0 < menuIconBottom && bottom0 > menuIconTop)
   || (top1 < menuIconBottom && bottom1 > menuIconTop)) {
    menuIcon.style.backgroundColor = '#d3d3d3';
    menuIcon.style.borderRadius = '4px';
  } else {
    menuIcon.style.backgroundColor = 'transparent';
  }
});
