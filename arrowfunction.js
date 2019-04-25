const add = (a, b) => a + b;
const square = x => x * x;
const three = () => 3;

console.log(square(4,5))

// const add = (a, b) => {
//     const temp = a + b;
//     return temp;
// }
// console.log(add(4,5))

// function Person() {
//     this.age = 0;
  
//     setInterval(function() {
//       this.age++;
//       console.log(this.age);
//     }, 1000);
//   }

// function Person() {
//     this.age = 0;
  
//     setInterval(function() {
//       this.age++;
//       console.log(this.age);
//     }.bind(this), 1000);
//   }


// function Person() {
//     this.age = 0;

//     setInterval(() => {
//       this.age++;
//       console.log(this.age);
//     }, 1000);
//   }
  
//   const p = new Person();
//   console.log(p)