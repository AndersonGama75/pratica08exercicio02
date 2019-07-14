var slideIndex = 1;
showSlide(slideIndex);   // Essa linha de código garante o primeiro carregamento, carrega a primeira foto quando a página for atualizada.

function mudarSlide(x) {
	showSlide(slideIndex += x);   // Controle de slide posterior e anterior.
}

/*function slideAtual(x) {
	showSlide(slideIndex = x);
}*/

function showSlide(x) {
	var i;
	var slides = document.getElementsByClassName("slide");
	if (x > slides.length) {
		slideIndex = 1;
	}
	if (x < 1) {
		slideIndex = slides.length;
	}
	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}
	slides[slideIndex - 1].style.display = "block";   // Essa linha é responsável por exibir apenas o slide corrente, está dando um 'display: block' apenas no slide que está ativo.
}