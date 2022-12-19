employees = [
    'Nam',
    'Phương',
    'Đức',
    'Sang',
    'Tú',
    'Hương',
    'Thanh',
    'Thông'
]

//while loop
let j=0;

while(j < employees.length){
    console.log(employees[j])
    j++
}

//do...while loop
let k=0;
do{
    console.log(employees[k])
    k++;
}while (k<employees.length)

//loop for
for(let i=0; i< employees.length; i++){
    console.log(employees[i])
}
//break
for(let a=0; a < employees.length; a++){
    console.log(employees[a])
    if(employees[a] === 'Phương'){
        break;
    }
}
//continue
for(let b=0; b < employees.length; b++){
    
    if(employees[b] === 'Phương'){
        continue;
    }
    console.log(employees[b])
}