const email = document.getElementById("email")
const password = document.getElementById("password")
const submit = document.getElementById("submit")
const error = document.getElementById("error")
const errorText = document.getElementById("error-text")
const filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;  
submit.addEventListener("click", function () {
    if (email) {
        if (email.value === "") {
            alert("Error email")
        }
        if (!filter.test(email.value)) {
            errorText.innerHTML = "Sai kiểu dữ liệu"
            errorText.style.color = "red"
        }
    }
})
submit.addEventListener("click", function () {
    if (password) {
        if (password.value === "") {
            alert("Error password")
        }
        else if (password.value.length <= 8) {
            error.innerHTML = "Không đủ 8 ký tự của password hãy nhập lại"
            error.style.color = "red"
        }
        else if (password.value.length >= 8) {
            error.innerHTML = ""
        }
    }
})