array1 = [1,2,4,5,3,8]
//Map: Bộ chuyển đổi
map1 = array1.map(x => x+2)
console.log(map1)
//Filter: Bộ lọc
filter1 = array1.filter(x => x>3)
console.log(filter1)
//Find:Bộ tìm kiếm, khi tìm được, dừng tìm kiếm
find1 = array1.find(x =>x%2==0)
console.log(find1)
//Reduce
reduce1 = array1.reduce((x,y) => x*2 + y ,0)
console.log(reduce1)
//Sort
sort1 = array1.sort()
console.log(array1)