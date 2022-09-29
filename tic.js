const obj = {
  1 : [[1,2,3], [1, 4, 7], [1, 5, 9]],
  2 : [[1,2,3], [2, 5, 8]],
  3 : [[1,2,3], [3, 5, 7], [3, 6, 9]],
  4 : [[1, 4, 7], [4, 5, 6]],
  5 : [[2, 5, 8], [4, 5, 6], [1, 5, 9], [3, 5, 7]],
  6 : [[4, 5, 6], [3, 6, 9]],
  7 : [[1, 4, 7], [7, 8, 9], [3, 5, 7]],
  8 : [[2, 5, 8], [7, 8, 9]],
  9 : [[7, 8, 9], [1, 5, 9], [3, 6, 9]]
}
let btns;
document.body.onload = setGameEnv();
function setGameEnv(){
  btns = document.querySelectorAll(".btn");
  btns.forEach(function(btn){
    btn.disabled = true;
  });
}
let entry = 'O';

function start(){  
  btns.forEach(function(btn){
    btn.disabled = false;
  });
  playerDisplay();
}
function playerDisplay(){
  let player = entry == 'O' ? 'X' : 'O';
  document.getElementById("turn").innerHTML = player + "'s turn";
}
function put(x){
  if(entry === 'X'){
    entry = 'O';
  }else{
    entry = 'X';
  }
  x.innerHTML = entry; 
  playerDisplay();
}
function reset(){
  document.getElementById("turn").innerHTML = '';
  btns.forEach(function(btn){
    btn.innerHTML = '';
  });
  setGameEnv();
}
function result(id){
  let arr = obj[id]; 
  arr.forEach(function(e){
    let res = true;
    e.forEach(function(val){
      const v = document.getElementById(val).innerHTML;
      if(v !== entry){
        res = false;
      }
    });
    if(res){
      let result = "Player " + entry + " won";
      alert(result);
      document.getElementById("turn").innerHTML = result;
      setGameEnv();
    }
  });
}
