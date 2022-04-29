interface Person { 
   age:number;
   name:string;
} 
 
interface Employee extends Person { 
   empId:string; 
} 
 
var engineer = <Employee>{}; 
engineer.age = 23; 
engineer.name = "Harshita";
engineer.empId = "EMP024";
console.log("Name:  "+engineer.name);
console.log("Age:  "+engineer.age);
console.log("Emp Id:  "+engineer.empId);
