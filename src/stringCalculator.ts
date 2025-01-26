export function add(numbers: string): number {
    try{
    if (numbers === "") return 0;

    let delimiter = /,|\n/;
    if (numbers.startsWith("//")) {
      const parts = numbers.split(/\r\n|\\n|\n|\r/);
      delimiter = new RegExp(parts[0].substring(2));
      numbers = parts[1];
    }
  
    const numArray = numbers?.split(delimiter).map((n) => parseInt(n, 10));
    const negatives = numArray?.filter((n) => n < 0);
    if (negatives.length > 0) {
      throw new Error(`Negative numbers not allowed: ${negatives.join(", ")}`);
    }
  console.log(numArray);
    return numArray.reduce((sum, num) => sum + num, 0);
}catch(err)
{
    throw err;
}
  }