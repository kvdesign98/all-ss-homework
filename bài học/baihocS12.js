//C1
function sayHello(event) {
    console.log("Hello")
    console.log(event.target)
}
//C2
const btnClickMe2 = document.getElementById("btnClickMe2");
btnClickMe2.onclick = function (event) {
    console.log("Hello hi ")
    btnClickMe2.innerHTML = "Clicked"
    console.log(event.target)
};
//C3
const btnClickMe3 = document.getElementById("btnClickMe3");
btnClickMe3.addEventListener("click", function (event) {
    console.log("Hello hi 3 hhihi")
    console.log(event.target)
})
btnClickMe3.addEventListener("click", function (event) {

    console.log("Hello hi 3 hixhixx")
    console.log(event.target)
})

/* 
    addEventListener
    - thêm nhiều hơn 1 listener(chạy nhiều function khi even xảy ra)
    - có thể xóa đi listener 
    +target là nơi mà event tác động vào
*/

const outer = document.getElementById("outer");
outer.onclick = function (event) {
    console.log(event)
}

const todolist = document.getElementById("todolist")
todolist.onclick = function (event) {
    event.target.style.color = "red"
}

const myForm = document.getElementById("myForm")
myForm.addEventListener("change", function (event) {
    console.log(event.target)
})

//mentor
let arr = [1, 2, 3]

for (let element of arr) {
    //trả ra phần tử và không thể dùng trong obj
    console.log(element)
}

querySelectorAll("") 
// lưu tất cả những gì có string giống trong () 
// và ở đây sẽ tạo arr để chứa nên có thẻ sử dụng for of
