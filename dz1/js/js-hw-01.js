let salary = parseFloat(prompt("enter your salary in $ pls: "));
const premium = ((salary * 0.15) + salary);
const wages = premium + salary;
const taxes = premium-(premium*0.10);
const costs = taxes - 190;
console.log("your salary is ", salary, "$");
console.log("your salary including premium is ", wages, );
console.log("your salary including taxes is ", taxes, "$");
console.log("your salary including costs is ", costs, "$");
console.log("now you have", costs, "$");


