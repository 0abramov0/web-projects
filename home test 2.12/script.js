function readNumber(){
    
    let num;

    while (!isFinite(num)){
        num = prompt();
    }

    if (num === '' || num === null){
        return null;
    }

    return num;
}

alert(readNumber());