const translate = require('translate'); // Old school
// import translate from 'translate';      // New wave

const test = async () => {
  // async/await. Options can be a language name (ISO 639)
  const text = await translate('Hello world', 'es');
  console.log(text);  // Hola mundo
  
  // Promises with .then(). Options can also be an object
  translate('こんにちは世界', { from: 'ja', to: 'es' }).then(text => {
    console.log(text);  // Hola mundo
  });
}

test()