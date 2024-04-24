#! /usr/bin/env node

import inquirer from "inquirer";


let myBalance = 50000;
let myPinCode = 7733;


console.log("welcome to my ATM service");


let pinAnswer = await inquirer.prompt(
    [     
       {
           name:"pin",
           message: "please enter your 4-digit PIN",
           type: "number",
        }
          

    ]
);

if (pinAnswer.pin === myPinCode ) {
    console.log("account authorized!");


let operationAns = await inquirer.prompt(
        [
            {
               name: "operation",
               message: "select an option",
               type: "list",
               choices: ["withdrawal cash" , "fast cash" , "check balance"],         
            
            }
        ]
              
    ); 
        
    console.log(operationAns);
          
 
    if (operationAns.operation === "withdrawal cash") {
   let amountAns = await inquirer.prompt(
        [
            {
                name: "amount",
                message: "please enter your amount",
                type: "number",         
               

            }   

        ]
   );
   
   
        myBalance -= amountAns.amount
       console.log("your total balance is: " + myBalance); 



}
    if (operationAns.operation=== "fast cash") {
       let fastcashAmount = await inquirer.prompt(
            [  
              
               {
                  name: "cash",
                  message: "select your amount",
                  type: "list",
                  choices: [1000 ,3000 ,5000,10000,15000]
               }   
            ]                    
                                      
        );  
    

    
            myBalance -= fastcashAmount.cash;
    console.log("your remaining balance is:" + myBalance);
       
    }      

else if (operationAns.operation === "check balance"){
    console.log("your total balance is: " + myBalance)
}

}      
else  {
    console.log("your pin is incorrect please try again");
}

