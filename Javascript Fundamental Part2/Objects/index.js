const person = {
    firstName: "Thanh",
    midName: "Duy",
    lastName: "Vũ",
    age: 22,
    fullName: function() {
       return this.lastName + " " + this.midName + " " + this.firstName 
    }
}
console.log(person.fullName())