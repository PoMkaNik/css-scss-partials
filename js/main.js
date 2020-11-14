// nav-main
function openSideMenu() {
  document.getElementById('js--side-menu').style.width = '20vw';
}

function closeSideMenu() {
  document.getElementById('js--side-menu').style.width = '0';
}

// sign-in <-> sign-out
const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () =>
  container.classList.add('right-panel-active'),
);
signInButton.addEventListener('click', () =>
  container.classList.remove('right-panel-active'),
);
