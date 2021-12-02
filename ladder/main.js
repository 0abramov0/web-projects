let input = document.querySelector('#form input');
let form = document.querySelector('#form');

let ladder = {
    step: 0,
    action : prompt(),
    up(){this.step+=1; console.log('Вы поднялись на 1 ступень вверх');},
    down(){this.step-=1; console.log('Вы спустились на 1 ступень вниз');},
    showStep(){console.log(`Вы находтесь на ${this.step} ступени`);}
};


form.addEventListener('submit', eventHandler);


function eventHandler(event){
    event.preventDefault();
    game(input.value);
    input.value  = '';
  }

  function game(input){
    if (String(input)=='up'){
        ladder.up();
    }else if (String(input) == 'down'){
        ladder.down();
    }else if (String(input) == 'showStep'){
        ladder.showStep();
    }
}
