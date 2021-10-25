let button = document.getElementById('lines');

let navigation = document.getElementById('menu');

button.addEventListener('click', function(){
	navigation.classList.toggle('header__nav--show');
});
