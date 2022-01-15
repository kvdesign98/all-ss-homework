const btnAdd = document.getElementById("btnTodo-add")

const btnRemove = document.getElementById("btnTodo-remove")

const list = document.getElementById("listItems")

const new_status_color_code = "black";
const done_status_color_code = "rgb(38, 0, 255)";
const processing_status_color_code = "red";





function add() {
    let ten = prompt("Nhập tên")
    let deadline = prompt("Tên deadline")
    let performer = prompt("Người thực hiện");
    const li = document.createElement("li")
    const p = document.createElement("span")
    p.innerHTML = `Tên: ${ten} | Deadline: ${deadline} | Người thực hiện: ${performer}.`
    
    p.dataset.status = "new";
    const btn = document.createElement("button")
    btn.innerHTML = "Done"
    const changeStatusBtn = document.createElement("button")
    changeStatusBtn.innerHTML = "Status";
    const remove1=document.createElement("button")
    remove1.innerHTML="Delete"
    const detail= document.createElement("button")
    detail.innerHTML="Detail"
    li.appendChild(p)
    li.appendChild(detail)
    li.appendChild(btn)
    li.appendChild(changeStatusBtn)
    li.appendChild(remove1)

    detail.onclick = function(){
        let text=prompt("Detail")
        const span = document.createElement("span")
        span.innerHTML= "Detail:" + text 
        const remove=document.createElement("button")
        remove.innerHTML="Delete"
        li.appendChild(span);
        li.appendChild(remove);
        remove.onclick = function(){
            li.removeChild(span);
            li.removeChild(remove);
        }
    }

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

