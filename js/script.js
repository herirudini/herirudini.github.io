// RESPONSIVE NAV BAR
/*generating rensponsive nav.
while this function is excuted, then the class "nav" from the index.html will become "class=nav responsive"
and so the .responsive in the css will activate*/
function myButton() {
  const x = document.getElementById('myNav');

  if (x.className === 'nav') {
    x.className += ' responsive';
  } else {
    x.className = 'nav';
  }
}
// Close navigation on window touch
window.addEventListener('click', (e) => {
  const x = document.querySelector('#myNav');
  if (!x.contains(e.target) && x.classList.contains('responsive')) {
    x.classList.remove('responsive');
  }
});

// MODAL IMAGE
// Define the modal
const modal = document.getElementById('myModal');
// Define the modal image element
const modalImg = document.getElementById('img01');
// Get the target's src for the modal.image.src via the function's argument
function showModalImage(targetSrc, targetAlt) {
  modalImg.src = targetSrc;
  modalImg.alt = targetAlt;
  modal.style.display = 'flex';
}
// Get the <span> element that closes the modal
const span = document.getElementsByClassName('close')[0];
// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = 'none';
};
//in case IF you want a "Tap to close" feature
function closeModalImage() {
  // modal.style.display = "none";
}

//SET SIDEBAR DEFAULT HEIGHT BY JAVASCRIPT
// Define the object element
const sidebarElement = document.getElementById('sideblock');
function setHeight() {
  let myHeight = 0;
  //Get browser specific height
  if (typeof window.innerWidth == 'number') {
    //Non-IE
    myHeight = window.innerHeight;
  } else if (
    document.documentElement &&
    (document.documentElement.clientWidth ||
      document.documentElement.clientHeight)
  ) {
    //IE 6+ in 'standards compliant mode'
    myHeight = document.documentElement.clientHeight;
  } else if (
    document.body &&
    (document.body.clientWidth || document.body.clientHeight)
  ) {
    //IE 4 compatible
    myHeight = document.body.clientHeight;
  }
  //Reduce myHeight based on other element's styling impact
  myHeight -= 150;

  //Apply myHeight to object element style
  if (sidebarElement) {
    sidebarElement.style.height = myHeight + 'px';
  }
}
setHeight();

//AUTO UPDATE FOOTER YEAR
const footerTextLastYear = document.querySelector('span.footerTextLastYear');
function updateYear() {
  const thisYear = new Date().getFullYear().toString();
  footerTextLastYear.innerHTML = thisYear;
}
updateYear();

function greetings() {
  // GREETING ANNUAL EVENT
  const greetingsElement = document.getElementById('greeting');
  let annualGreetText;
  function eventGreeting() {
    const date = new Date().getDate();
    const month = new Date().getMonth() + 1; //getMonth() returns Array index number
    const thisYear = new Date().getFullYear();
    const newYear = (date + month === 2) || (date <= 5 && month === 1);
    const christmas = date === 25 && month === 12;
    const aidlFitri = date <= 5 && month === 5;
    if (newYear) {
      annualGreetText = `Happy New Year ${thisYear}!`;
    } else if (christmas) {
      annualGreetText = `Marry Christmas!`;
    } else if (aidlFitri) {
      annualGreetText = `Happy Aidl Fitr ${thisYear - 559}H!`;
    }
    if (annualGreetText) {
      greetingsElement.innerHTML = annualGreetText;
    }
  }
  eventGreeting();

  // GREETING WELCOME
  let pickedTimeGreet;
  function greetingWelcome() {
    const time = new Date().getHours();
    let timeGreet = '';
    switch (time) {
      case time < 10 && time > 3:
        timeGreet = [
          'Good morning',
          'Selamat pagi',
          'Доброе утро',
          'صباح الخير',
        ];
        break;
      case time < 14:
        timeGreet = ['Good day', 'Selamat siang', 'Добрый день', 'مساء الخير'];
        break;
      case time < 17:
        timeGreet = [
          'Good afternoon',
          'Selamat sore',
          'Добрый день',
          'مساء الخير',
        ];
        break;
      case time < 21:
        timeGreet = [
          'Good evening',
          'Selamat malam',
          'Добрый вечер',
          'مساء الخير',
        ];
        break;
      default:
        timeGreet = [
          'Good night',
          'Selamat malam',
          'Спокойной ночи',
          'تصبح على خير',
        ];
    }
    const language = window.navigator.userLanguage || window.navigator.language;
    if (language === 'en' || language === 'en-US') {
      pickedTimeGreet = timeGreet[0];
    } else if (language === 'id' || language === 'id-ID') {
      pickedTimeGreet = timeGreet[1];
    } else if (language === 'ru' || language === 'ru-RU') {
      pickedTimeGreet = timeGreet[2];
    } else if (language === 'ar' || language === 'ar-SA') {
      pickedTimeGreet = timeGreet[3];
    }
    // greetingsElement.innerHTML = pickedTimeGreet; NOT ACTIVATED AT THE MOMENT
  }
  greetingWelcome();
}

//EXECUTE GREETING IF USER ON INDEX PAGE
function execGreetings() {
  const urlPath = window.location.pathname.toString();
  const isIndex =
    urlPath.length === 0 ||
    urlPath === '/' ||
    urlPath.match(/^\/?index/) ||
    urlPath.indexOf('index.html') >= 0;
  if (isIndex) {
    greetings();
  }
}
execGreetings();
