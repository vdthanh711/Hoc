const person = {
    firstName: "Thanh",
    midName: "Duy",
    lastName: "Vũ",
    age: 22,
}

// Thêm method vào object
person.fullName = function() {
    return this.lastName + " " + this.midName + " " + this.firstName 
 }
console.log(person.fullName())

//Khi 1 function trở thành thuộc tính của object, nó là 1 method