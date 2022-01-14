HW1
let person = {
    name:       'Bob',
    occupation: 'web developer',
    hobbies:    'painting',
  };
  console.log(person.name);
  console.log(person["occupation"]);
  console.log(Object.values(person));
HW2
let obj = {
    b: 2,
    a: 1,
    c: 3,
};
let A = Object.keys(obj);
for (let i in A) {
    A[i]=A[i].toUpperCase()
}
console.log(A)
HW3
let myFamily = {
    quantity: 4,
    member: ["Dad", "Mom", "Me", "Daughter"],
    location: "Vietnam",
};
function myFamily(){
    this.quantity ="";
    this.member = "";
    this.location = "";
  
    this.showInfo = function(){
      document.write("Nhà có:" + this.quantity + "<br/>");
      document.write("Gồm:" + this.member + "<br/>");
      document.write("Hiện đang ở:" + this.location + "<br/>");
    };
  };
  
  let family = new myFamily();
  
  family.quantity = "5";
  family.member = ["Bố" , "Mẹ" , "Anh", "Chị" , "Tôi"];
  family.location = "HCM";
  
  family.showInfo();
  
HW4
let obj = {
    foo: { a: "hello", b: "world" },
    bar: ["example", "mem", null, { xyz: 6 }, 88],
    qux: [4, 8, 12]
  };
  obj.bar[3].xyz = 606 ;
  obj["bar"][3].xyz= 606 ;

  console.log(obj.bar)