//Prompts the user to input the speed
const prompt = require("prompt-sync")({ sigint: true });
const speed = prompt("Please input the speed ")

//Calculates the demerit points, 1 point for every 5 km/h over the speed limit of 70 km/h
points = Math.round((speed-70)/5);


function speedDetector(speed, points){

//checks whether the speed is less than 70.
    if(speed <70 ){
        return "Ok"
    }else if(points < 12){
//checks whether the number of points exceeds 12.

        return "You have " + points + " demerit points"
    }else if(points >= 12){

//if points exceeds 12, the lisense is suspended
        
        return "You have " +points+ " demerit points, Lisence Suspended!"
    }
}

console.log (speedDetector(speed, points));