function printNumber(num: number): void {
  if (num < 0) {
    console.error('Number must be non-negative'); //Log the error instead of throwing
    return; // Explicitly return to maintain void return type
  }
  console.log(num);
}

printNumber(-5); // Logs an error to the console
printNumber(5); // Prints 5