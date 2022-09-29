let str = '';
const screen = document.getElementById("io");

function entry(s){
  str += s;
  screen.value = str;
}
function result(){
  screen.value = eval(screen.value);
}
