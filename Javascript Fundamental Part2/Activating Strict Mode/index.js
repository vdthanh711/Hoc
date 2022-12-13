// Ngăn chặn sử dụng, và throw errors khi người lập trình thực hiện những xử lý được coi là unsafe,
// những xử lý mà có thể là ngoài ý muốn.
// Vô hiệu hoá các tính năng có thể gây nhầm lẫn, hoặc không nên được sử dụng.
// Ngăn chặn sử dụng một số từ mà có thể sẽ được sử dụng làm keywork trong tương lai.

// Nếu đặt use strict ở đầu file, phạm vi của strict mod sẽ là toàn file đó
"use strict";
function cat(){
    var age = 3;
    return age;
}
age =4; //Uncaught ReferenceError: age is not defined

//Nếu đặt use strict ở trong function, nó sẽ được áp dụng cho chỉ mình funtion đó
