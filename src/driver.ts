import { add } from "./stringCalculator";
import * as readline from "readline";
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  
try{
rl.question("Enter Strings ", (input) => {
  console.log(`You entered: ${input}`);
  const result = add(input); 
  console.log(`The result is: ${result}`);
      rl.close(); 
});
}catch(err)
{
    console.log("Error is:"+err);
}
