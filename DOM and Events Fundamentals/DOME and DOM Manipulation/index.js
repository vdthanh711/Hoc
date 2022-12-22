//DOM là viết tắt của Document Oject Model, là mô hình các đối tượng tài liệu HTML
//DOM sẽ có nhiệm vụ xử lý các vấn đề như đổi thuộc tính thẻ, đổi cấu trúc HTML của thẻ
//DOM dùng để truy xuất các tài liệu dạng HTML và XML

//Thao tác với DOM
// Thuộc tính: 
// id: Định danh – là duy nhất cho mỗi phần tử nên thường được dùng để truy xuất DOM trực tiếp và nhanh chóng.
// className: Tên lớp – Cũng dùng để truy xuất trực tiếp như id, nhưng 1 className có thể dùng cho nhiều phần tử.
// tagName: Tên thẻ HTML.
// innerHTML: Trả về mã HTML bên trong phần tử hiện tại. Đoạn mã HTML này là chuỗi kí tự chứa tất 
// cả phần tử bên trong, bao gồm các nút phần tử và nút văn bản.
// outerHTML: Trả về mã HTML của phần tử hiện tại. Nói cách khác, outerHTML = tagName + innerHTML.
// textContent: Trả về 1 chuỗi kí tự chứa nội dung của tất cả nút văn bản bên trong phần tử hiện tại.
// attributes: Tập các thuộc tính như id, name, class, href, title…
// style: Tập các định dạng của phần tử hiện tại
// value: Lấy giá trị của thành phần được chọn thành một biến.

// Phương thức:
// getElementById(id): Tham chiếu đến 1 nút duy nhất có thuộc tính id giống với id cần tìm.
// getElementsByTagName(tagname): Tham chiếu đến tất cả các nút có thuộc tính tagName giống với tên thẻ cần tìm,
// hay hiểu đơn giản hơn là tìm tất cả các phần tử DOM mang thẻ HTML cùng loại. Nếu muốn truy xuất đến toàn bộ thẻ 
// trong tài liệu HTML thì hãy sử dụng document.getElementsByTagName('*').
// getElementsByName(name): Tham chiếu đến tất cả các nút có thuộc tính name cần tìm.
// getAttribute(attributeName): Lấy giá trị của thuộc tính.
// setAttribute(attributeName, value): Sửa giá trị của thuộc tính.
// appendChild(node): Thêm 1 nút con vào nút hiện tại.
// removeChild(node): Xóa 1 nút con khỏi nút hiện tại.