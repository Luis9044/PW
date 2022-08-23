var plansito1 = document.getElementById("plan1");
var plansito2 = document.getElementById("plan2");
var plansito3 = document.getElementById("plan3");
var plansito4 = document.getElementById("plan4");
var plansito5 = document.getElementById("plan5");
var plansito6 = document.getElementById("plan6");

function Aparecer(n){
    if(n==1){ 
        plansito1.style.display= "inline";
        plansito2.style.display= "none";
        plansito3.style.display= "none";
        plansito4.style.display= "none";
        plansito5.style.display= "none";
            }
    if(n==2){plansito2.style.display= "inline";
        plansito1.style.display= "none";
        plansito3.style.display= "none";
        plansito4.style.display= "none";
        plansito5.style.display= "none";}
    if(n==3){plansito3.style.display= "inline";
        plansito1.style.display= "none";
        plansito2.style.display= "none";
        plansito4.style.display= "none";
        plansito5.style.display= "none";}
    if(n==4){plansito4.style.display= "inline";
        plansito2.style.display= "none";
        plansito1.style.display= "none";
        plansito3.style.display= "none";
        plansito5.style.display= "none";}
    if(n==5){plansito5.style.display= "inline";
        plansito2.style.display= "none";
        plansito3.style.display= "none";
        plansito1.style.display= "none";
        plansito4.style.display= "none";}
}