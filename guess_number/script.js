let userName = '';
let num = Math.floor(Math.random()*100);
let out = document.querySelector('#out');
let form = document.querySelector('#form');
let input = document.querySelector('#form input');

form.addEventListener('submit', eventHandler);
message('Введите ваше имя');


function message(message){
  let li = document.createElement('li');
  li.textContent = message;
  out.appendChild(li);
}

function eventHandler(event){
  event.preventDefault();
  game(input.value);
  input.value  = '';
}

function game (input){
  if (!userName){
    userName = input;
    message(input+ ' приветствую тебя. Предлагаю тебе сыграть в игру, я загадаю число от 1 до 100, а тебе нужно будет его отгадать.');
    out.removeChild(out.children[0]);
    return;
  }
  let n = Number.parseInt(input);
  message(n);
  if (n>num){
    message('Слишком много, попробую еще раз');
  }else if (n<num){
    message('Слишком мало, попробуй еще раз');
  }else if (n == num){
    message('Отлично! Ты угадал мое число ');
  }
}

  
