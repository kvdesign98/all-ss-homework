// W1
function tuoi(old){
    let old=true;
    if(old>18){
        old=true;
        console.log(old);
    }
    else{
        old=false;
        console.log(old);
    }

    old = (old>18)?console.log(old=true):console.log(old=false)
    return old;
}

function checkAge(age) {
    if (age > 18) {
      return true;
    } else {
      return confirm('Did parents allow you?');
    }
// ?
    age=(age>18)?console.log(age=true):console.log('Did parents allow you?')
// or ||
    age=(age>18);alert(age=true)||alert('Did parents allow you?')

    return age;
}

// W2
function min(a,b){
    if(a<b||b<a){
        if(a<b){
            console.log(a)
        }else{
            console.log(b)
        }
    }
}

// W3
ask=(question, yes, no)=> {
    if (confirm(question)) yes()
    else no();
  }

  ask(
    "Do you agree?",
    () => { alert("You agreed."); },
    () => { alert("You canceled the execution."); }
  );

// W4

let dangNhap = prompt("Yêu Cầu Đăng Nhập")

if (dangNhap == "Admin") {
    matKhau = prompt("hãy nhập mật khẩu")
    if (matKhau == "cafedev") {
        alert("Chào Mừng")
    }
    else if (matKhau != "cafedev") {
        alert("Mật khẩu sai")
    }
    else if (matKhau ==="") {
        alert("Đã hủy")
    }
}
else if (dangNhap ==="") {
    alert("Canceled")
}
else {
    alert("Tôi không biết bạn")
}