// Mảng dùng để lưu trữ danh sách các mục
const animals = ['Mèo', 'Vịt', 'Chim', 'Bò']

// Truy cập phần tử của mảng

animals[0]
animals[1]

// Thay đổi một phần tự của mảng
animals[1] = 'Ngan'
console.log(animals)
// Thuộc tính chiều dài của mảng
animals.length
//vòng lặp phần tử của mảng
for(let i=0; i<animals.length;i++){
    console.log(animals[i])
}