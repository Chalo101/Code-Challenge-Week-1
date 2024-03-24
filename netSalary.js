//Prompts the user to enter their salary 
const prompt = require("prompt-sync")({ sigint: true });
let salary =  prompt("Enter your gross salary");

//Initializes the variables to 0
let payeeTax = 0;
let nhifDeduction = 0;
let nssfDeduction = 0;
let netSalary = 0;

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
function nhifRate(salary){
    if(salary <=5999){
        nhifDeduction = 150;

    }else if(salary >=6000 && salary <=7999){
        nhifDeduction =300;

    }else if(salary >=8000 && salary <=11999){
        nhifDeduction =400;

    }else if(salary >=12000 && salary <=14999){
        nhifDeduction =500;

    }else if(salary >=15000 && salary <=19999){
        nhifDeduction =600;

    }else if(salary >=20000 && salary <=24999){
        nhifDeduction =750;
        
    }else if(salary >=25000 && salary <=29999){
        nhifDeduction =850;

    }else if(salary >=30000 && salary <=34999){
        nhifDeduction =900;

    }else if(salary >=35000 && salary <=39999){
        nhifDeduction =950;

    }else if(salary >=40000 && salary <=44999){
        nhifDeduction =1000;

    }else if(salary >=45000 && salary <=49999){
        nhifDeduction =1100;

    }else if(salary >=50000 && salary <=59999){
        nhifDeduction =1200;

    }else if(salary >=60000 && salary <=69999){
        nhifDeduction =1300;

    }else if(salary >=70000 && salary <=79999){
        nhifDeduction =1400;

    }else if(salary >=80000 && salary <=89999){
        nhifDeduction =1500;

    }else if(salary >=90000 && salary <=99000){
        nhifDeduction =1600;

    }else if(salary >=100000){
        nhifDeduction =1700;
    }

    return nhifDeduction
}

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
nssfDeductions(salary), calculatePayee(salary), nhifRate(salary)

//Calculating the net salary
netSalary = salary - (payeeTax + nhifDeduction + nssfDeduction);

// Printing out all the calculations
console.log ("Gross Salary" + salary)
console.log ("Payee TAX " + payeeTax)
console.log (`NHIF Deduction ${nhifDeduction}`)
console.log ("NSSF Deduction " + nssfDeduction)
console.log ("Net Salary " + netSalary)