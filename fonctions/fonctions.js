document.querySelectorAll('#light-icon').forEach(item => {
    item.addEventListener('click', darkMode);
    item.addEventListener('click', switchThemeLight);
  });

  document.querySelectorAll('#dark-icon').forEach(item => {
    item.addEventListener('click', darkMode);
    item.addEventListener('click', switchThemeDark);
  });

  function darkMode() {
    let themeSwitchableElement = document.querySelectorAll('[data-theme]');
    let mode = this.dataset.mode;
    themeSwitchableElement.forEach(el => el.dataset.theme = mode)
  }

  function switchThemeDark() {
    document.querySelector('#dark-icon').classList.add('active');
    document.querySelector('#light-icon').classList.remove('active');
  }

  function switchThemeLight() {
    document.querySelector('#light-icon').classList.add('active');
    document.querySelector('#dark-icon').classList.remove('active');
  }