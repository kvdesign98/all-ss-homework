/**

    objecs: key và value(khóa và giá trị)

    value : không giới hạn

    cú pháp:
    {
        <key1>: <value1>,
        <key2>: <value2>,
    }

    key sẽ luôn luôn đc chuyển thành string


*/
function sayHello(){
    console.log("Hello")
}

const obj = {
    age: 20,
    name: "mindx",
    age:21,
    1:2,
    tags: ["adfs",123],
   
    address:{
        city:"hanoi",
    },

    isChecked:true,
    sayHello:sayHello,
    sayHello1:function(){//anonymus function:hàm ẩn danh
        console.log("Hello2")
    },
};

console.log(typeof obj)
console.log(typeof [])
console.log(obj);

//lấy theo key
//C1 : "."
//C2 : "[ ]"

console.log(obj.name, obj.sayHello)
console.log(obj.address.city)

console.log(obj[1])
console.log(obj["age"])
//nếu key k tồn tại = undefined
console.log(obj.gmail)
//chạy fc sayHello trong obj của tôi
obj.sayHello()
//chạy hàm ẩn danh
obj.sayHello1()
//lấy keys values arr obj
console.log(Object.keys(obj))//lấy toàn bộ keys
console.log(Object.values(obj))//lấy toàn bộ values
console.log(Object.entries(obj))//lấy teo cặp

for(let i = 0; i < Object.keys(obj).length; i++){
}
//for...in để lặp qua tất cả các key trong obj
for(let key in obj){
    console.log(key)//i là 1 key
    console.log(obj[key])
}

/**
 * string , number,boolean,null,undefined(kiểu dữ liệu nguyên thủy)
 * object(kiểu dữ liệu tham chiếu)
 */
//nguyên thủy
let x=0
let y=0
console.log(x===y)//true
x=1
console.log(y)
//vì so sánh bằng giá trị


//tham chiếu
let foo ={}
let bar ={}
console.log(foo===bar)//false
//vì so sánh bằng tham chiếu vì 2 {} địa chỉ khác nhau

bar=foo

//thêm vào 1 obj
foo.name="mindx"

console.log(foo===bar)//true

console.log(bar)

function sayHelloWorld(a){
    a.age=12
}

sayHelloWorld(foo)
