const readline = require('readline');
const { exec } = require("child_process");
const voices = [
  { name: "Samantha", language: "English"}, 
  { name: "Tessa", language: "English"}, 
  { name: "Fred", language: "English"}, 
  { name: "Alex", language: "English"}, 
  { name: "Daniel", language: "English"}, 
  { name: "Kyoko", language: "Japanese"}, 
  { name: "Diego", language: "Spanish"}, 
  { name: "Mei-Jia", language: "Chinese"}, 
  { name: "Thomas", language: "French"}, 
  { name: "Anna", language: "German"}, 
  { name: "Alice", language: "Italian"},
];
let voiceIdx = Math.floor(Math.random() * voices.length);
let voice = voices[voiceIdx].name;
let voiceObj = voices[voiceIdx];

setInterval(() => {
  voiceIdx = Math.floor(Math.random() * voices.length);
  voice = voices[voiceIdx].name;
  voiceObj = voices[voiceIdx];
  console.log(voiceObj.language)
  exec(`say ${voiceObj.language}`, (error, stdout, stderr) => {
    if (error) {
      return;
    }
    if (stderr) {
      return;
    }
  });
}, 2000)

readline.emitKeypressEvents(process.stdin);
process.stdin.setRawMode(true);
process.stdin.on('keypress', (str, key) => {
  if (key.ctrl && key.name === 'c') {
    process.exit();
  } else {
    console.log(`${str.toUpperCase()}`);
    // exec(`say -v "${voices[10].name}" ${str}`, (error, stdout, stderr) => {
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
console.log('Press any key...');