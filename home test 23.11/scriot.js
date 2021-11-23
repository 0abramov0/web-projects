let user = {
    name: 'John',
    surname: 'Smith'
}

user.name = 'Pete';

delete user.name;


function isEmptyObject(obj) {
    for (let i in obj) {
        if (obj.hasOwnProperty(i)) {
            return false;
        }
    }
    return true;
}


let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
  }

let sum = 0;
for (let item in salaries){
    sum += salaries[item];
}
console.log(sum);