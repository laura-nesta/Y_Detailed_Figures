let selectedDarkTheme = true

document.addEventListener('DOMContentLoaded', function() {
  if(selectedDarkTheme){
    switchThemeDark()
  }else{
    switchThemeLight()
  }
  console.log(selectedDarkTheme)
});

document.querySelector('#light-icon').forEach(item => {
    item.addEventListener('click', darkMode);
    item.addEventListener('click', switchThemeLight);
    console.log(selectedDarkTheme)
    selectedDarkTheme = false
    console.log(selectedDarkTheme)

  });

  document.querySelector('#dark-icon').forEach(item => {
    item.addEventListener('click', darkMode);
    item.addEventListener('click', switchThemeDark);
    selectedDarkTheme = false
    console.log(selectedDarkTheme)
   
  });

  function darkMode() {
    let themeSwitchableElement = document.querySelectorAll('[data-theme]');
    let mode = this.dataset.mode;
    themeSwitchableElement.forEach(el => el.dataset.theme = mode)
  }

  function switchThemeDark() {
    document.querySelector('#dark-icon').classList.add('active');
    document.querySelector('#light-icon').classList.remove('active');
    selectedDarkTheme = true
    console.log(selectedDarkTheme)
  }

  function switchThemeLight() {
    document.querySelector('#light-icon').classList.add('active');
    document.querySelector('#dark-icon').classList.remove('active');
    
    
  }