// Functions trong JavaScript để thực hiện 1 tác vụ cụ thể
// Một hàm JavaScript được thực thi được gọi
//cấu trúc
// function name(parameter1, parameter2, parameter3) {
//     // code to be executed
//   }

function areaRectangle(d,h){
    return d*h/2;
}
document.getElementById("demo").innerHTML = areaRectangle(3,4)

//Biến khai báo trong Function trở thành biến local chỉ truy cập được từ trong hàm