function getresultpos() {

 let rand = Math.floor(Math.random() * 100);
  document.getElementById("final").innerHTML=rand;

}

function getresultneg() {

  let rand = Math.floor(Math.random() * 100)- 90;
  document.getElementById("final").innerHTML=rand;


}

function reset() {

  document.getElementById('final').innerHTML="0";

}
