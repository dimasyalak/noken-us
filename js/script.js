// Toggle class active
const navbarNav=document .querySelector('navbar-nav');

// Ketika hamburger menu di clik
document.querySelector('#hamburger-menu').onclick=() =>{
	navbarNav.classlist.toggle('active');
};

// klik di luar sidebar untuk menghilangkan nav
const hamburger = document.querySelector('#hamburger-menu')

document.addEventListener('click', function (e){navbarNav.classList.remove('')})
