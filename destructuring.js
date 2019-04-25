// const user = {
//     name: 'Adi Nugroho',
//     handle: '@adinugroho',
//     location: 'Jakarta, Indonesia'
// }
// extraction
// const { name, handle, location } = user;
// console.log(name, handle, location);


// const getUser = () => {
//     return {
//       name: 'Adi Nugroho',
//       handle: '@adinugroho',
//       location: 'Jakarta, Indonesia'
//     };
//   }
  
//   // extraction
//   const { name, handle, location } = getUser();
//   console.log(name, handle, location);

//Destructuring Array
// const csv = "1997,Ford,F350,Must Sell!";
// const [ year, make, model, description ] = csv.split(",");
// console.log(year, make, model, description)

//Aliasing Object Properties
const user = {
    n: 'Adi Nugroho',
    h: '@adinugroho',
    l: 'Jakarta, Indonesia'
}
  
// extraction
const { n: name, h: handle, l: location } = user;
console.log(name, handle, location);

