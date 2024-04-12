//Prompts the user to enter their salary 
const prompt = require("prompt-sync")({ sigint: true });
let salary =  prompt("Enter your gross salary");

//Initializes the variables to 0
let payeeTax = 0;
let nhifRate = 0;
let nssfDeduction = 0;
let netSalary = 0;
let basicSalary = 0;

//Function to calculate the payee accon=rding to amount of salary
function calculatePayee(salary){
    if(salary <= 24000){
        payeeTax = (0.1 * salary)

    }else if(salary > 24000 && salary<= 32333){
        payeeTax = (0.25 * salary)
    
    }else if(salary >= 32334 && salary <= 500000){
        payeeTax = (0.3 * salary)
    
    }else if(salary >= 500001 && salary<= 800000){
        payeeTax = (0.325 * salary)
        
    } else if(salary >800000){
        payeeTax = (0.35 * salary)
    }

    return payeeTax
}

//Function to calculate the NHIF rate
function NHIFContributions(basicSalary) {
    let contribution;

    // A switch statement based on the NHIF contributions Chart 
    switch (true) {
      case (basicSalary <= 5999):
        contribution = 150;
        break;
      case (basicSalary >= 6000 && basicSalary <= 7999):
        contribution = 300;
        break;
      case (basicSalary >= 8000 && basicSalary <= 11999):
        contribution = 400;
        break;
      case (basicSalary >= 12000 && basicSalary <= 14999):
        contribution = 500;
        break;
      case (basicSalary >= 15000 && basicSalary <= 19999):
        contribution = 600;
        break;
      case (basicSalary >= 20000 && basicSalary <= 24999):
        contribution = 750;
        break;
      case (basicSalary >= 25000 && basicSalary <= 29999):
        contribution = 850;
        break;
      case (basicSalary >= 30000 && basicSalary <= 34999):
        contribution = 900;
        break;
      case (basicSalary >= 35000 && basicSalary <= 39999):
        contribution = 950;
        break;
      case (basicSalary >= 40000 && basicSalary <= 44999):
        contribution = 1000;
        break;
      case (basicSalary >= 45000 && basicSalary <= 49999):
        contribution = 1100;
        break;
      case (basicSalary >= 50000 && basicSalary <= 59999):
        contribution = 1200;
        break;
      case (basicSalary >= 60000 && basicSalary <= 69999):
        contribution = 1300;
        break;
      case (basicSalary >= 70000 && basicSalary <= 79999):
        contribution = 1400;
        break;
      case (basicSalary >= 80000 && basicSalary <= 89999):
        contribution = 1500;
        break;
      case (basicSalary >= 90000 && basicSalary <= 99999):
        contribution = 1600;
        break;
      case (basicSalary >= 100000):
        contribution = 1700;
        break;
      default:
        break;
    }
  
    return contribution;
}

let yourNHIFContributions = NHIFContributions(basicSalary);

//Function to calculate the nssf deduction
function nssfDeductions(salary){
    if(salary <=7000){
        nssfDeduction = (0.06*7000) *2
    }else if (salary >7000){
        nssfDeduction = ((0.06*7000) + (0.06*7000)) *2;
    }

    return nssfDeduction
}

//Calling the functions
nssfDeductions(salary), calculatePayee(salary), NHIFContributions(salary)

//Calculating the net salary
netSalary = salary - (payeeTax + yourNHIFContributions + nssfDeduction);

// Printing out all the calculations
console.log ("Gross Salary" + salary)
console.log ("Payee TAX " + payeeTax)
console.log (`NHIF Deduction ${NHIFContributions(salary)}`)
console.log ("NSSF Deduction " + nssfDeduction)
console.log ("Net Salary " + netSalary)