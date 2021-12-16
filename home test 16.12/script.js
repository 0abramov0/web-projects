function sumInt(){
    let arr = [];
    let num = 0;
    let sum = 0;
    
    while (true){
        num = prompt("Введите число");

        if (num === '' || !isFinite(num)){
            break;
        }else{
            arr.push(+num);
        }
    }

    for (let item of arr){
        sum += item;
    }
    return sum;
}


alert(sumInt());