
let plusoneHome= document.getElementById("plushome").textContent
let plusoneGuest = document.getElementById("plusguest").textContent
countElHome = document.getElementById("count-home")
countElGuest = document.getElementById("count-guest")

let resulthome= 0;
let resultguest= 0;
function plusOneHome(){
   resulthome +=1 ;
   countElHome.textContent = resulthome;
}

function plusOneGuest(){
    resultguest +=1 ;
    countElGuest.textContent = resultguest;
 }

function plusTwoHome(){
    resulthome +=2;
    countElHome.textContent = resulthome ;
}

function plusThreeHome(){
    resulthome +=3;
    countElHome.textContent = resulthome ;
}

function plusTwoGuest(){
    resultguest +=2 ;
    countElGuest.textContent = resultguest;
 }
 function plusThreeGuest(){
    resultguest += 3;
    countElGuest.textContent = resultguest;
 }

 function reset(){
    resultguest = 0;
    resulthome=0;
    countElGuest.textContent = resultguest;
    countElHome.textContent = resulthome;

 }