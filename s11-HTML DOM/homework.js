const btnAdd = document.getElementById("btnTodo-add")

const btnRemove = document.getElementById("btnTodo-remove")

const list = document.getElementById("listItems")

const new_status_color_code = "black";
const done_status_color_code = "rgb(38, 0, 255)";
const processing_status_color_code = "red";





function add() {
    let ten = prompt("nhập tên")
    let deadline = prompt("tên deadline")
    let performer = prompt("Người thực hiện");
    const li = document.createElement("li")
    const p = document.createElement("span")
    p.innerHTML = `Tên: ${ten} OO Deadline: ${deadline} OO Người thực hiện: ${performer}`
    
    p.dataset.status = "new";
    const btn = document.createElement("button")
    btn.innerHTML = "Done"
    const changeStatusBtn = document.createElement("button")
    changeStatusBtn.innerHTML = "Status";
    const remove1=document.createElement("button")
    remove1.innerHTML="Xóa"
    li.appendChild(p)
    li.appendChild(btn)
    li.appendChild(changeStatusBtn)
    li.appendChild(remove1)

    remove1.onclick = function(){
            list.removeChild(li);
    }

    btn.onclick = function () {
        if (this.parentNode.dataset.status === "new" || this.parentNode.dataset.status === "process") {
            li.style.color = done_status_color_code;
            this.parentNode.dataset.status = "done";
        } else {
            li.style.color = new_status_color_code;
            this.parentNode.dataset.status = "new";
        }
    }
    changeStatusBtn.onclick = function () {
        if (this.parentNode.dataset.status === "new") {
            li.style.color = processing_status_color_code;
            this.parentNode.dataset.status = "process";
        } else {
            li.style.color = new_status_color_code;
            this.parentNode.dataset.status = "new";
        }
    }
    list.appendChild(li)

}
function remove() {
    list.innerHTML = "";
}

