//Escape Character
//(\') = '
//(\") = "
//(\\) = \
cat = ' nó là một \con mèo \'tam thể\''

//Breaking Long Code Lines: sử dụng \ để xuống dòng khi chuỗi quá dài

a = 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa\
aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'

//Extracting String Parts: Trích xuất chuỗi
input = 'meo cho chim lon ga'
//slice(start, end) (truyen duoc ca so am va duong)
console.log(input.slice(4,7)) //cho
console.log(input.slice(-6,-3))//lon
//substring(start, end) (tuong tu nhu slice nhung chi truyen duoc so duong)
console.log(input.substring(4,7))//cho
//substr(start, length)
console.log(input.substr(4,3))//cho

//Replacing String Content
//Phân biệt chữ hoa chữ thường
newInput = input.replace("cho", "chuot") //thay thế cho từ chó đầu tiên tìm được
console.log(newInput) // newInput = 'meo chuot chim lon ga'
//dùng (/i) không phân biệt chữ hoa chữ thường
newInput1 = input.replace(/CHO/i, "chuot")
console.log(newInput1)
//dung (/g) thay thế tất cả từ có kết quả khớp
input2 = 'meo cho chim lon ga cho cho cho'
newInput3 = input2.replace(/cho/g, "chuot")
console.log(newInput3) // newInput3 = 'meo chuot chim lon ga chuot chuot chuot'

//String toUpperCase() chuyển chuỗi thành chữ in hoa
textUpperCase = input.toUpperCase()
//String toLowerCase() chuyển chuỗi thành chữ thường
textLowerCase = input.toLowerCase()

//Concat : nối chuỗi
textConcat = input.concat(" ", input2)

//template literals
text = ` cho
meo
lon
ga `

//Variable Substitutions
//cú pháp: ${...}
ten = 'Thanh'
ho  = 'Vu'
text1 = `Xin chào ${ten} ${ho}` // Xin chào Thanh Vu

gia = 500
soluong = 3
tong = `Tong: ${gia * soluong}`
