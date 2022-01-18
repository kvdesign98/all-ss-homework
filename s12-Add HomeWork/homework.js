const email = document.getElementById("email")
const password = document.getElementById("password")
const submit = document.getElementById("submit")
const error = document.getElementById("error")
function run() {
    if (email) {
        if (email.value === "") {
            alert("Error email")
        }
    }
    if (password) {
        if (password.value === "") {
            alert("Error password")
        }
        else if (password.value.length <= 8) {
            error.innerHTML = "Không đủ 8 ký tự của password hãy nhập lại"
            error.style.color = "red"
        }
    }
    if (password.value.length >= 8) {
        error.innerHTML = ""
    }
}   