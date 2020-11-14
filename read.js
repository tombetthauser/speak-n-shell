const readline = require('readline');
const { exec } = require("child_process");
const voices = [
  { name: "Samantha", language: "english"}, 
  { name: "Tessa", language: "english"}, 
  { name: "Fred", language: "english"}, 
  { name: "Alex", language: "english"}, 
  { name: "Daniel", language: "english"}, 
  { name: "Kyoko", language: "english"}, 
  { name: "Diego", language: "english"}, 
  { name: "Mei-Jia", language: "english"}, 
  { name: "Thomas", language: "english"}, 
  { name: "Anna", language: "english"}, 
  { name: "Alice", language: "english"},
];
let voiceIdx = Math.floor(Math.random() * voices.length);
let voice = voices[voiceIdx];qw

setInterval(() => {
  voiceIdx = Math.floor(Math.random() * voices.length);
  voice = voices[voiceIdx];
  console.log(voice)
}, 30000)

readline.emitKeypressEvents(process.stdin);
process.stdin.setRawMode(true);
process.stdin.on('keypress', (str, key) => {
  if (key.ctrl && key.name === 'c') {
    process.exit();
  } else {
    console.log(`${str.toUpperCase()}`);
    exec(`say -v Samantha ${str}`, (error, stdout, stderr) => {
    // exec(`say -v "${voice}" ${str}`, (error, stdout, stderr) => {
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