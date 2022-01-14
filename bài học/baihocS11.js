/**
DOM: document object Model
    -Được sử dụng để truy xuất html ( hoặc cấu truc dạng thẻ)
    -thường được tổ chức dạng cây
    -quan hệ:
        + cha - con
        + anh - em
 */

//  Query:truy xuất và trả ra 1 element
console.log(document.getElementById("btnClickMe"))
console.log(document.getElementById("myParagraph"))
//  Sử dụng Css selector(cần # cho id, . cho class)
console.log(document.querySelector("#btnClickMe"))
// Sử dụng class, nhận lại nhiều element ,trả ra 1 list element
console.log(document.getElementsByClassName("my-p"))

const btnClickMe=document.getElementById("btnClickMe")  
console.log(btnClickMe.id)
console.log(btnClickMe.className)
const myLink=document.getElementById("myLink")
console.log(myLink.href)
//thay đổi id class v.v
myLink.href ="examle"
//thay đổi text
myLink.innerHTML="Goole"
//thay đổi style
myLink.style.backgroundColor="pink"

//  tạo ra node con
const myParagraph=document.getElementById("myParagraph")
const myParagraphChild=document.createElement("button")
myParagraphChild.innerHTML="like"
myParagraph.appendChild(myParagraphChild)

//sự kiện
myParagraphChild.onclick=function(){
    myParagraphChild.innerHTML="nope"
    myParagraphChild.style.textDecoration="line-through"
}

// Xóa node con
myParagraph.removeChild(myParagraphChild)
//tìm node cha
console.log(myParagraph.parentNode)

function a (a){
    this.parentNode.remove();
}
