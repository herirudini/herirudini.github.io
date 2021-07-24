// RESPONSIVE NAV BAR

/*generating rensponsive nav.
while this function is excuted, then the class "nav" from the index.html will become "class=nav responsive"
and so the .responsive in the css will activate*/
function myButton() {
	const x = document.getElementById("myNav");

	if (x.className === "nav") { x.className += " responsive"; }
	else { x.className = "nav"; }

}

window.addEventListener('click', e => {
	const x = document.querySelector('#myNav');
	if (!x.contains(e.target) && x.classList.contains('responsive')) {
		x.classList.remove('responsive');
	}
})

// MODAL IMAGE 

// Get the modal
const modal = document.getElementById("myModal");
// Get the image and insert it inside the modal - use its "alt" text as a caption
const modalImg = document.getElementById("img01");
const captionText = document.getElementById("modalImgCaption");
function showModalImage(imgId) {
	const targetImg = document.getElementById(imgId);
	modal.style.display = "flex";
	modalImg.src = targetImg.src;
}

// Get the <span> element that closes the modal
const span = document.getElementsByClassName("close")[0];
// When the user clicks on <span> (x), close the modal
span.onclick = function () {
	modal.style.display = "none";
}
function closeModalImage() {
	modal.style.display = "none";
}

// Greeting with many language NOT USED AT THE MOMENT

const time = new Date().getHours();
const greetTime = "";

switch (time) {
	case (time < 10):
		greetTime = ["Good morning", "Selamat pagi", "Доброе утро", "صباح الخير"];
		break;
	case (time < 14):
		greetTime = ["Good day", "Selamat siang", "Добрый день", "مساء الخير"];
		break;
	case (time < 16):
		greetTime = ["Good afternoon", "Selamat sore", "Добрый день", "مساء الخير"];
		break;
	case (time < 21):
		greetTime = ["Good evening", "Selamat malam", "Добрый вечер", "مساء الخير"];
		break;
	default:
		greetTime = ["Good night", "Selamat malam", "Спокойной ночи", "تصبح على خير"];
}

const language = window.navigator.userLanguage || window.navigator.language;
if (language === "en" || language === "en-US") {
	greetLang = greetTime[0];
} else if (language === "id" || language === "id-ID") {
	greetLang = greetTime[1];
} else if (language === "ru" || language === "ru-RU") {
	greetLang = greetTime[2];
} else if (language === "ar" || language === "ar-SA") {
	greetLang = greetTime[3];
}

const greeting = greetLang;

// alert(greeting) NOT USED AT THE MOMENT