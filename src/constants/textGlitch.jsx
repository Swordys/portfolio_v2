const chars = '#$&*<>'.split('');

const glitchIt = (text) => {
  const retWords = [];
  const arr = text.split('');
  arr.forEach(c => {
    let randomNumber = Math.random() >= 0.7;
    if (randomNumber) {
      for (let n = 0; n < chars.length; n++) {
        const glWord = text.replace(c, chars[n]);
        let randomNumber = Math.random() >= 0.5;
        if (randomNumber) {
          retWords.push(glWord);
        }
      }
    }
  }, this);
  retWords.push(text);
  text = '';
  return retWords;
};


export default glitchIt;
