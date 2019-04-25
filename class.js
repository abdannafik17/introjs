class Person {
    constructor(name) {
      this._name = name;
    }
    getName() {
      return this._name;
    }
  }
  
  class Employee extends Person {
    doWork() {
        return this._name + " is working";
    }
  }

  const rendy = new Person("Rendy Augusto");
  console.log(rendy.doWork()); 



//   let scott = new Employee("Scott Moss");
//   console.log(scott.getName());
//   console.log(scott.doWork());