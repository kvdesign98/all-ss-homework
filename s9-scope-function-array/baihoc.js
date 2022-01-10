//scope 
//như kiểu var const let
//có các phạm vi sử dụng khác nahum
//vd: biến toàn cục
//let y=0; 
//vd:biến có phạm vi hẹp block scope
// if(scope){
//     let x=1;
// }
//function cũng tạo ra 1 block scope
//function scope


//function: hàm
//hàm là một đơn vị ConvolverNode,thực thi 1 nv
// =>khả năng tái sử dụng 


//khai báo
function sayHello(){
    console.log("Hello");
} 
//thực thi
sayhello();


// diện tích tam giác
//d,h là tham số đầu vào
//được truyền vào khi thực thi function
function getTriangleArea(d,h){
    // let d=10;
    // let h=5;
    const area=(d*h)/2;
    console.log("diện tích ",area);
    return area; 
    //return : kết quả trả về
    //tái sử dụng để tiếp tục tính toán
    //code sau phần return thì sẽ k chạy nữa
}

getTriangleArea(10,5);
getTriangleArea(5,5);
getTriangleArea(1,5);


function sumTriangleArea(d1,h1,d2,h2){
    let area1= getTriangleArea(d1,h1,);
    console.log(area1);
    let area2= getTriangleArea(d2,h2,);
    console.log(area2);
    console.log("tổng",area1+area2);
    return area1+area2;
}

sumTriangleArea(5,10,15,42);
// có thể sử dụng trước khi khai báo nó được gọi là hoisting
//hoisting cho phép chạy code trc khi khai báo

//=> tiềm hiểu function scope 

// kỹ thuật function
//recursive:đệ quy
//là khả năng sử dụng function ở trong chính cái body của nó
function factorial(n){
    if (n==1) {
        return 1;
    }
    return n * factorial(n-1)
}

factorial(2)

//array:mảng or list 

let array =[0,1,2,3,4,5,6,7,8,9]

console.log(array);
console.log(array[3])
//[3] ở đây là vị trí trong array

// [[]] array trong arr gọi là mảng đa chiều
//multi dimension arr
//ứng dụng dễ tạo 1 list
const array2 =[0,false,"string",null,undefined,[0,1,2,3,4]]
console.log(array2)

// vd
const board=[
    ["x","","o"],
    ["","x","o"],
    ["","o","x"],
]

array.push(6)//thêm phần tử vào vị trí cuối cùng
array.slice(6)//6 là vị trí muốn xóa trong arr
array.splice(6,2)//xóa từ vị trí 6 , 2 phần tử
array.pop()//xóa phần tử cuối cùng trong arr
// tiềm hiểu về nhiều cách trong arr. 

//lấy giá trị 
console.log(board[0][1][2])
//muốn lấy thì dựa vào index 


//có thể khai báo kiểu như v
// let tempFunction = function(1,2){

// }

// let arrowFunction = (1,2) =>{

// }