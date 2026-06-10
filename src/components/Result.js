import React from "react";


function Result ({secretNum, term}) {

    let result;


   if(term >0 && term <=10) {
     if (term > secretNum){
         result = "Highter"
    }else if (term < secretNum) {
        result = 'Lower'
    }else if (term == secretNum) {
        result = 'Yipee! Correct'
    
    } else {
        result = 'Enter number between 1 to 10' 
    }
    
   
   }else{
    result = ''
   }


    return  <h3>Guessing answer : {result}</h3>

  


}

export default Result;