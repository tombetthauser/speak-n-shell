const switchTime = 5000;
const greeting = "Hello Danny, lets try typing some "
const switchPhrases = [
  "Now lets try some ",
  "Lets change to ",
  "How about some ",
]

const letterPhrases = [
    {
      english: "Apple",
      japanese: "林檎",
      chinese: "苹果",
      spanish: "manzana",
      french: "Pomme",
      german: "Apfel",
      italian: "Mela",
    },{
      english: "Antelope",
      japanese: "アンテロープ",
      chinese: "羚羊",
      spanish: "antílope",
      french: "antilope",
      german: "Antilope",
      italian: "antilope",
    },{
      english: "Ant",
      japanese: "蟻",
      chinese: "蚂蚁",
      spanish: "hormiga",
      french: "fourmi",
      german: "Ameise",
      italian: "formica",
    },{
      english: "Butterfly",
      japanese: "蛾",
      chinese: "蝴蝶",
      spanish: "Mariposa",
      french: "Papillon",
      german: "Schmetterling",
      italian: "La farfalla",
    },{
      english: "Boat",
      japanese: "ボート",
      chinese: "船",
      spanish: "Bote",
      french: "Bateau",
      german: "Boot",
      italian: "Barca",
    },{
      english: "Bugs",
      japanese: "昆虫",
      chinese: "虫子",
      spanish: "loca",
      french: "insectes",
      german: "Fehler",
      italian: "insetti",
    },{
      english: "Cat",
      japanese: "ネコ",
      chinese: "猫",
      spanish: "gato",
      french: "chat",
      german: "Katze",
      italian: "gatto",
    },{
      english: "Car",
      japanese: "車",
      chinese: "汽车",
      spanish: "coche",
      french: "voiture",
      german: "Wagen",
      italian: "macchina",
    },{
      english: "Cap",
      japanese: "帽子",
      chinese: "帽子",
      spanish: "sombrero",
      french: "chapeau",
      german: "Hut",
      italian: "cappello",
    },{
      english: "Dog",
      japanese: "犬",
      chinese: "狗",
      spanish: "perro",
      french: "chien",
      german: "Hund",
      italian: "cane",
    },{
      english: "Danny",
      japanese: "ダニー",
      chinese: "丹尼",
      spanish: "danny",
      french: "danny",
      german: "danny",
      italian: "danny",
    },{
      english: "Dinosaur",
      japanese: "恐竜",
      chinese: "恐龙",
      spanish: "dinosaurio",
      french: "dinosaure",
      german: "Dinosaurier",
      italian: "dinosauro",
    }
]

// lecture after lunch -- 3 hours assessment

const languageSwitchPhrases = {
  english: "Now lets try some english",
  japanese: "日本語でタイプしましょう",
  chinese: "让我们输入中文",
  german: "Lassen Sie uns Deutsch eingeben",
  french: "tapons en français",
  italian: "digitiamo in italiano",
  spanish: "escriba en español"
}

const readline = require('readline');
const { exec } = require("child_process");

const voicesDict = {  
  English: { name: "Fred", language: "English", phrase: "Now lets try some english" }, 
  Japanese: { name: "Kyoko", language: "Japanese", phrase: "日本語でタイプしましょう"}, 
  Spanish: { name: "Diego", language: "Spanish", phrase: "escriba en español"}, 
  Chinese: { name: "Mei-Jia", language: "Chinese", phrase: "让我们输入中文"}, 
  French: { name: "Thomas", language: "French", phrase: "tapons en français"}, 
  German: { name: "Anna", language: "German", phrase: "Lassen Sie uns Deutsch eingeben"}, 
  Italian: { name: "Alice", language: "Italian", phrase: "digitiamo in italiano"},
};

const voices = [
  { name: "Samantha", language: "English", phrase: "Now lets try some english" }, 
  { name: "Tessa", language: "English", phrase: "Now lets try some english" }, 
  { name: "Fred", language: "English", phrase: "Now lets try some english" }, 
  { name: "Alex", language: "English", phrase: "Now lets try some english" }, 
  { name: "Daniel", language: "English", phrase: "Now lets try some english" }, 
  { name: "Kyoko", language: "Japanese", phrase: "日本語でタイプしましょう"}, 
  { name: "Diego", language: "Spanish", phrase: "escriba en español"}, 
  { name: "Mei-Jia", language: "Chinese", phrase: "让我们输入中文"}, 
  { name: "Thomas", language: "French", phrase: "tapons en français"}, 
  { name: "Anna", language: "German", phrase: "Lassen Sie uns Deutsch eingeben"}, 
  { name: "Alice", language: "Italian", phrase: "digitiamo in italiano"},
];
let voiceIdx = Math.floor(Math.random() * voices.length);
let voice = voices[voiceIdx].name;
let voiceObj = voices[voiceIdx];

setInterval(() => {
  let lastLanguage = voiceObj.language;
  while (voices[voiceIdx].language === lastLanguage) {
    voiceIdx = Math.floor(Math.random() * voices.length);
  }
  voice = voices[voiceIdx].name;
  voiceObj = voices[voiceIdx];
  console.log(voiceObj.language)
  let randomPhrase = switchPhrases[Math.floor(Math.random() * switchPhrases.length)]
  exec(`say -v "${voice}" ${voiceObj.phrase}`, (e, _stdout, _stderr) => e ? undefined : undefined);
}, switchTime)

readline.emitKeypressEvents(process.stdin);
process.stdin.setRawMode(true);
process.stdin.on('keypress', (str, key) => {
  if (key.ctrl && key.name === 'c') {
    process.exit();
  } else {
    if (Number.isInteger(Number(str))) {
      console.log(str);
    } else {
      console.log(`${str.toUpperCase() + str.toLowerCase()}`);
    }
    exec(`say -v "${voice}" ${str}`, (error, stdout, stderr) => {
      if (error) {
        return;
      }
      if (stderr) {
        return;
      }
    });
  }
});
console.log(voiceObj.language);
exec(`say ${greeting} ${voiceObj.language}`, (e, _stdout, _stderr) => e ? undefined : undefined);




/*

  Ideal flow...
    (commands locked)
    1. Hello Danny, Hola Danny
       Lets try typing with Spanish
       Nosotros typemiento en español
       Please select a letter
       Por favor selectar un letero

    (commands unlock)
    2. A letter is 
*/