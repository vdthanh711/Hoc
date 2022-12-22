//querySelector: trả về phần tử đầu tiên
document.querySelector("a").style.backgroundColor = "red";
//querySelectorAll: trả về phần tử khớp với bộ chọn 
let querySelectorAll = document.querySelectorAll(".example");
for(let i=0; i< querySelectorAll.length ; i++){
    querySelectorAll[i].style.backgroundColor= "blue"
}