// gọi một Function trong một Function khác
function outerFunc(a) {
    function innerFunc(b, c) {
      return a + b + c;
    }
  
    return innerFunc;
  }
  
  const innerFunc = outerFunc(10);
  
  console.log(innerFunc(1, 1)); 
  console.log(innerFunc(1, 2));

