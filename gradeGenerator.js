//Prompt the user to enter their marks
const prompt = require("prompt-sync")({ sigint: true });
const marks = prompt("Please enter your marks ");

//Places the marks to the respective grades

function generateGrade(marks){
    if(marks <=100 && marks >= 80){
        return "Your grade is A"
    } else if(marks >=60 && marks <=79){
        return "Your grade is B"
    }else if(marks >=50 && marks <=59){
        return "Your grade is C"
    }else if(marks >=40 && marks <=49){
        return "Your grade is D"
    }else if(marks >=0 && marks <=39){
        return "Your grade is E"
    }
}

//Calling the function
console.log (generateGrade(marks));