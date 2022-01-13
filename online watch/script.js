function time() {
    let date = new Date();
    let hour = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();
    hour = ifZero(hour);
    min = ifZero(min);
    sec = ifZero(sec);
    let timer = setTimeout(function(){ time() }, 1000); 
    document.getElementById("time").innerText = hour + " : " + min + " : " + sec; 
  }
  
  
function ifZero(param){
    if (param<10){
        return "0"+param;
    }else{
        return param;
    }
}
  
time(); 