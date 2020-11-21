const switchTime = 5000;
const greeting = "Hello Danny, lets try typing some "
const switchPhrases = [
  "Now lets try some ",
  "Lets change to ",
  "How about some ",
]

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