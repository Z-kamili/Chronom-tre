var Milisecondes=0;
var Minute = 0;
var seconds = 0;
var Heur = 0;
var t;
var btn_start = document.getElementById("start");
var btn_stop = document.getElementById("stop");
/*function*/
function start() {
    
t = setInterval(update_chrono,100);
btn_start.disabled = true;
    
}
function update_chrono() {
    
    Milisecondes = Milisecondes + 1;
    if (Milisecondes === 10) {

        seconds= seconds + 1;
        Milisecondes = 0;
    }
    if (seconds === 60) {

        Minute +=1;
        seconds = 0;
    }
    if (Minute === 60) {
        Heur = Heur + 1;
        Minute = 0;
    }
    if (Heur === 24) {

        Heur = 0;
    }
      document.getElementById('H').innerHTML = Heur;
      document.getElementById('m').innerHTML = Minute;
      document.getElementById('s').innerHTML = seconds;
      document.getElementById('ms').innerHTML = Milisecondes;
}
function stop() {
clearInterval(t);
btn_start.disabled = false;
}
function reset() {
clearInterval(t);
    btn_start.disabled = false;
    Heur = 0;
    Minute = 0;
    seconds = 0;
    Milisecondes = 0;
     document.getElementById('H').innerHTML = Heur;
      document.getElementById('m').innerHTML = Minute;
      document.getElementById('s').innerHTML = seconds;
      document.getElementById('ms').innerHTML = Milisecondes;

}
function validation(){
    
  var exp =  new RegExp(/^[A-Za-z-0-9-_.]+@[A-Za-z]{4,7}.[A-Za-z]{2,3}$/);
    
  var   Email = document.getElementById('em').value;
   var valid = exp.test(Email);
    if(valid){  
        alert("Le email est bien valide");
    }else{
        
        alert("Le email n'est pas valide");
    }
    
    
    
    
}

