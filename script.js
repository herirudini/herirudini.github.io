



  var time = new Date().getHours();
  if (time < 10) {
    greetTime = ["Good morning", "Selamat pagi", "Доброе утро", "صباح الخير"];
  } else if (time < 20) {
    greetTime = ["Good day", "Selamat siang", "Добрый день", "مساء الخير"];
  } else {
    greetTime = ["Good evening", "Selamat malam", "Спокойной ночи", "تصبح على خير"];
  }

	var language = window.navigator.userLanguage || window.navigator.language;
	if (language === "en"||language === "en-US") {
	greetLang = greetTime[0];
	} else if (language === "id"||language === "id-ID") {
	greetLang = greetTime[1];
	} else if (language === "ru"||language === "ru-RU") {
	greetLang = greetTime[2];
	} else if (language === "ar"||language === "ar-SA") {
	greetLang = greetTime[3];
	}

  const greeting = greetLang;

alert(greeting)


