var btnContact = document.querySelector('.fast-contakt');
var windowContakt = document.querySelector('.fast-contakt-open');

btnContact.addEventListener('click', openContakt);

window.addEventListener('resize', resize);


function openContakt() {
	if (windowContakt.style.display === 'block') {
		windowContakt.style.display = 'none';
	} else {
		windowContakt.style.display = 'block';
	}
}

var bars = document.querySelector('.bars');

bars.addEventListener('click', mobileMenu);

function mobileMenu() {
	var menu = document.querySelectorAll('nav li');

	for (var i = 1; i < menu.length; i++) {
		menu[i].addEventListener('click', function eldo() {
			for (var j = 1; j < menu.length; j++) {
				menu[j].style.display = 'none';
			}
		});
		if (menu[i].style.display === 'block') {
			menu[i].style.display = 'none';
		} else {
			menu[i].style.display = 'block';
		}

	}
}

function resize() {
	var a = document.querySelectorAll('nav li');
	if (window.innerWidth > 880) {
		for (var i = 1; i < a.length; i++) {
			a[i].style.display = 'inline-block';
		}
	} else {
		for (var i = 1; i < a.length; i++) {
			a[i].style.display = 'none';
		}
	}
}