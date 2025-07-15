function shouldShowFloatingMenu() {
  const header = document.querySelector('.cabecalho');
  const floatingMenu = document.querySelector('.menu-flutuante');
  const menuPrincipal = document.querySelector('.menu');

  if (!header || !floatingMenu || !menuPrincipal) return;

  const headerBottom = header.getBoundingClientRect().bottom;
  const hasScrolled = window.scrollY > 100;

  if (headerBottom <= 0 && hasScrolled) {
    floatingMenu.style.display = 'flex';
    menuPrincipal.style.display = 'none';
  } else {
    floatingMenu.style.display = 'none';
    menuPrincipal.style.display = 'flex';
  }
}

window.addEventListener('scroll', shouldShowFloatingMenu);
window.addEventListener('resize', shouldShowFloatingMenu);
document.addEventListener('DOMContentLoaded', shouldShowFloatingMenu);
