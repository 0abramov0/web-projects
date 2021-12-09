function ucFirst(str) {
    return str[0].toUpperCase() + str.slice(1);
}

let userName = prompt('Введите имя');
console.log(`${userName} - ${ucFirst(userName)}`);


 function extractCurrencyValue(str) {
    return str.slice(1);
}

let price = prompt("Введите цену");
console.log(`${price} - ${extractCurrencyValue(price)}`);