// (=) gán 1 giá trị cho biến
// (+) cộng các số
// (-) trừ các số
// (*) nhân các số
// (**) lũy thừa
// (/) chia các số
// (%) chia lấy phần dư
// (++) tăng 1 đơn vị
// (--) giảm 1 đơn vị
let x =6
let y =3
let z = x + y // z=9
let a = x - y // a=3
let b = x * y // b=18
let c = x ** y// c=216
let d = x / y // d=2
let e = x % y // e=0
x++           // x=7
y--           // y=2

// (+=)
x +=y // x= x+y
// (-=)
x -=y // x= x-y
// (*=)
x *=y // x= x*y
// (/=)
x /=y // x= x/y
// (%=)
x %=y // x= x%y
// (**=)
x **=y// x= x**y

// (==) bằng về giá trị
number1 = '1'
number2 = 1
console.log(number1==number2) //true
// (!=) khác về giá trị
number3 = 1
number4 = 2
console.log(number3!=number4) //true
// (===)bằng về giá trị và kiểu dữ liệu

number5 = '1'
number6 = '1'
console.log(number5===number6) //true
// (!==)khác về giá trị hoặc kiểu dữ liệu

number7 = '1'
number8 = 1
console.log(number7!==number8) //true

// (>) lớn hơn
// (<) nhỏ hơn
// (>=)lớn hơn hoặc bằng
// (<=)nhỏ hơn hoặc bằng

// (?) toán tử ba ngôi
const tuoi = 17
const phucvu = tuoi>=18 ? 'beer' : 'nuocngot'
// Tương đương với
// const tuoi =17
// let phucvu
// if(tuoi >=18){
//     phucvu = 'beer'
// }else phucvu = 'nuocngot'

// (&&) và
const age =25
if (age >=18 && age <=30){
    console.log('trúng tuyển')
}
// (||) hoặc
if (age ==18 || age ==22){
    console.log('tốt nghiệp')
}
// (!) phủ định 