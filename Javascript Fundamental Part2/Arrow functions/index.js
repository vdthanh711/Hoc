// arrow function giúp code trở nên ngắn gọn và dễ hiểu hơn

//ES5
var phraseSplitterEs5 = function phraseSplitter(phrase) {
    return phrase.split(' ');
  };
  
  //ES6
  const phraseSplitterEs6 = phrase => phrase.split(" ");
  
  console.log(phraseSplitterEs6("Mèo Chó Chuột Gà"));