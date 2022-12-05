// Converting Strings to Numbers: trừ các trường hợp chuỗi có kí tự khác ngoài số
Number("15.2")//15.2
Number("")  //0
parseFloat("7.323223") // 7.323223
console.log(parseInt(23.4))// 23
y="5"
x = + y //5
// Converting Numbers to Strings 
String(32) //'32'
x=16;
x.toString();//'16'
// Converting Dates to Numbers
d= new Date()
Number(d)
d.getTime()
// Converting Dates to Strings
String(Date())
Date().toString()
// Converting Booleans to Numbers
Number(false) //return 0
Number(true)  //return 1
// Converting Booleans to Strings
String(false)      // returns "false"
String(true)       // returns "true"

//Coercion
5 + null    // 5         
"5" + null  // "5null"   
"5" + 2     // "52"      
"5" - 2     //  3         
"5" * "2"   //  10        