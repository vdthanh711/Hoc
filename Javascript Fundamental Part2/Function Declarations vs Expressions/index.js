// Function Declaration: có thuộc tính hoisting: function có thể được gọi 
// trước khi chúng được khai báo
click()

function click(){
    console.log('click!')
}

//Function Expresion: Chỉ có thể gọi sau khi đã khai báo

const click1 = function(){
    console.log('click1!')
}

click1()

//Callback Function: function bị gán thành tham số của function khác 
//Function Declaration: 
  function plusOne(a){
    return a+1
  }
 console.log( [1, 2, 3, 4].map(plusOne) )
//Trường hợp này callbackFunction có thể gọi bất kì đâu 
//trong toàn bộ application và điều này không cần thiết, 
// thay vào đó ta dùng Function Expression
const plusTwo = function(a){
    return a+2
}
console.log( [1, 2, 3, 4].map(plusTwo) )

[1, 2, 3, 4].map((a) => {
    return a+3
  })

// sử dụng function declartion khi muốn tạo ra function  
// để sử dụng ở bất cứ đâu trong toàn bộ mã code

// sử dụng function expression khi function bị giới hạn vùng sử dụng, 
// giúp global scope nhẹ và sạch hơn