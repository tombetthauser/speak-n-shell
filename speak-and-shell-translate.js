const readline = require('readline');
const { exec } = require("child_process");

const { translate } = require('free-translate');

const englishVoices = ["Samantha", "Tessa", "Fred", "Alex", "Daniel"];
const randEnglishVoice = () => englishVoices[Math.floor(Math.random() * englishVoices.length)];

const languageTable = {
  japanese: {
    voice: "Kyoko",
    abbreviation: "ja"
  },
  spanish: {
    voice: "Diego",
    abbreviation: "es"
  },
  chinese: {
    voice: "Mei-Jia",
    abbreviation: "zh-CN"
  },
  french: {
    voice: "Thomas",
    abbreviation: "fr"
  },
  german: {
    voice: "Anna",
    abbreviation: "ge"
  },
  italian: {
    voice: "Alice",
    abbreviation: "it"
  },
  arabic: {
    voice: "Maged", // untested
    abbreviation: "ar"
  }
};

(async () => {

  const randLang = Object.keys(languageTable)[Math.floor(Math.random() * Object.keys(languageTable).length)]
  const abbrev = languageTable[randLang].abbreviation
  const voice = languageTable[randLang].voice
  const englishVoice = randEnglishVoice();

  const number = Math.floor(Math.random() * 256);
  const word = randWord();

  phrase = Math.random() < .5 ? number : word;

  const translatedText = await translate(phrase, { from: 'en', to: abbrev });

  exec(`say -v ${englishVoice} ${randLang}; sleep .5; say -v ${voice} ${translatedText}; sleep 1; say -v ${englishVoice} english; sleep .5;say -v ${englishVoice} ${phrase}`);

  console.log(`--------------\n\n${randLang}: ${translatedText}\nenglish: ${phrase}\n\n`); // こんにちは世界
})();


function randWord () {
  const firstWords = ["more", "please", "thank you", "hello", "bye-bye", "again", "sorry", "uh-oh", "yes", "okay", "no", "eat", "drink", "go", "stop", "run", "jump", "walk", "sleep", "wash", "kiss", "open", "close", "push", "pull", "fix", "broke", "play,want", "hug", "love", "hurt", "tickle", "give", "all gone", "all done", "dance", "help", "fall", "shake", "see", "watch", "look", "sit", "stand", "up", "throw", "catch", "blow", "cry", "throw", "swing", "slide", "climb", "ride", "rock", "come", "color", "draw", "up", "down", "in", "out", "off", "on", "here", "there", "around", "under", "behind", "over", "after", "big", "little", "hot", "cold", "loud", "quiet", "yucky", "icky", "scary", "funny", "silly", "dirty", "clean", "gentle", "wet", "soft", "fast", "slow", "color", "red", "blue", "yellow", "green", "pink", "orange", "purple", "black", "white", "brown", "all", "none", "more", "some", "rest", "me", "mine", "my", "I", "you", "it", "he", "she", "him", "her", "ball", "book", "train", "bike", "rain", "bubbles", "car", "truck", "boat", "plane", "baby", "bowl", "spoon", "diaper", "sock", "shoe", "shirt", "pants", "hat", "star", "flower", "house", "tree", "brush", "towel", "bath", "chair", "table", "bed", "blanket", "light", "cookie", "cracker", "chip", "cheese", "apple", "banana", "ice cream", "cereal", "candy", "milk", "juice", "water", "dog", "cat", "fish", "bird", "duck", "cow", "horse", "bunny", "bear", "pig", "lion", "elephant", "giraffe", "zebra", "monkey", "chicken", "butterfly", "bee", "frog", "alligator", "snake"];
  return firstWords[Math.floor(Math.random() * firstWords.length)];
}
