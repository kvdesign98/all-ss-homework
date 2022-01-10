// Tạo máy tính cơ bản với các chức năng: +, -, * và /.
let a = prompt("nhâp phép tính đơn giản như : +, -, * và /. ");
let b = parseFloat(prompt("số thứ nhất:"));
let c = parseFloat(prompt("số thứ hi:"));
if(a== "+")
{
    alert(`${b}+${c}=${b+c}`);
}
else if(a== "-")
{
    alert(`${b}+${c}=${b-c}`);
}
else if(a== "*")
{
    alert(`${b}+${c}=${b*c}`);
}
else if(a== "/")
{
    alert(`${b}+${c}=${b/c}`);
}
switch (a) 
{
    case "+":
        alert(`${b}+${c}=${b + c}`);
        break;
    case "-":
        alert(`${b}+${c}=${b - c}`);
        break;
    case "*":
        alert(`${b}+${c}=${b * c}`);
        break;
    case "/":
        alert(`${b}+${c}=${b / c}`);
        break;
}
// Viết chương trình tìm số nguyên tố
const number = parseInt(prompt("Enter a positive number: "));
let isPrime = true;
if(number<2)
{
    isPrime = false;
}
else
{
    for(let i=2;i<number;i++)
    {
        if(number%i==0)
        {
            isPrime = false;
            break;
        }
    }
}
if(isPrime==true)
{
    alert(number+" là số nguyên tố")
}
else
{
    alert(number+" không là số nguyên tố")
}
