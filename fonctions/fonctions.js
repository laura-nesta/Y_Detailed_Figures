//Switcher thème dark et light 

// let theme = "dark";
const monStockage = sessionStorage;
monStockage.setItem('theme', 'dark');

document.addEventListener('DOMContentLoaded', () => {
  const theme = monStockage.getItem('theme');
  darkMode(theme)
    console.log(theme);
});

document.querySelectorAll('#light-icon').forEach(item => {
    item.addEventListener('click', switchThemeLight);
    item.addEventListener('click', darkMode);
  });

  document.querySelectorAll('#dark-icon').forEach(item => {
    item.addEventListener('click', switchThemeDark);
    item.addEventListener('click', darkMode);
  });

  function darkMode(theme) {
    let themeSwitchableElement = document.querySelectorAll('[data-theme]');
    let mode = this.dataset.mode;
    var theme = monStockage.getItem('theme');
    // themeSwitchableElement.forEach(el => el.dataset.theme = mode)
    themeSwitchableElement.forEach(el => el.dataset.theme = theme)
  }

  function switchThemeDark() {
    document.querySelector('#dark-icon').classList.add('active');
    document.querySelector('#light-icon').classList.remove('active');
    monStockage.setItem('theme', 'dark');
    // theme = "dark";
  }

  function switchThemeLight() {
    document.querySelector('#light-icon').classList.add('active');
    document.querySelector('#dark-icon').classList.remove('active');
    monStockage.setItem('theme', 'light');
    // theme = "light"
  }