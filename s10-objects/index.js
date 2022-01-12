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
let arrObj = Object.keys(obj)
for (let i in obj){
    console.log(i.toUpperCase()); 
}
HW3
let myFamily = {
    quantity: 4,
    member: ["Dad", "Mom", "Me", "Daughter"],
    location: "Vietnam",
};
let family =Object.entries(myFamily)
console.log(family)
HW4
let obj = {
    foo: { a: "hello", b: "world" },
    bar: ["example", "mem", null, { xyz: 6 }, 88],
    qux: [4, 8, 12]
  };
  obj.bar[3].xyz = 606 ;
  obj["bar"][3].xyz= 606 

  console.log(obj.bar)