function Calculator(a,b){
    this.inputA = a;
    this.inputB = b;
    console.log(`Произведение чисел ${a*b}`);
    console.log(`Сумма чисел ${Number(a)+Number(b)}`);
}

let calculator = new Calculator(prompt(),prompt());