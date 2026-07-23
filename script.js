/* =========================
   ENVELOPE OPENING
========================= */


const openBtn = document.getElementById("openBtn");
const envelope = document.getElementById("envelope");
const flap = document.querySelector(".flap");
const letter = document.querySelector(".letter");

const welcome = document.getElementById("welcome");
const card = document.getElementById("card");

const music = document.getElementById("music");
const musicBtn = document.getElementById("musicBtn");


let opened = false;

function openInvitation(){

    if(opened) return;

    opened = true;


    const flap = document.querySelector(".flap");
    const letter = document.querySelector(".letter");
    const welcome = document.getElementById("welcome");
    const card = document.getElementById("card");


    // Open envelope
    flap.style.transform = "rotateX(180deg)";


    // Move letter out
    letter.style.transform = "translateY(-130px)";


    // Show invitation
    setTimeout(()=>{


        welcome.style.opacity="0";


        setTimeout(()=>{


            welcome.style.display="none";


            card.style.display="flex";


            setTimeout(()=>{

                card.style.opacity="1";

                card.classList.add("card-open");

            },100);


        },800);


    },1500);


}




/* =========================
   MUSIC BUTTON
========================= */


let playing=false;


musicBtn.addEventListener("click",()=>{


if(playing){

music.pause();

musicBtn.innerHTML="🎵";

}

else{

music.play();

musicBtn.innerHTML="🔊";

}


playing=!playing;


});





/* =========================
   GOLD SPARK BURST
========================= */


function createSparkBurst(){


for(let i=0;i<45;i++){


let spark=document.createElement("div");


spark.className="spark";


let x=(Math.random()-0.5)*500;

let y=(Math.random()-0.5)*500;



spark.style.left="50%";

spark.style.top="50%";

spark.style.setProperty("--x",x+"px");

spark.style.setProperty("--y",y+"px");



document.body.appendChild(spark);



setTimeout(()=>{

spark.remove();

},1500);



}


}





/* =========================
   FALLING PETALS
========================= */


function createPetals(){


for(let i=0;i<80;i++){


let petal=document.createElement("div");


petal.className="petal";


petal.style.left=
Math.random()*100+"vw";


petal.style.animationDuration=
(3+Math.random()*5)+"s";



petal.style.opacity=
Math.random();



document.body.appendChild(petal);



setTimeout(()=>{

petal.remove();

},8000);



}


}





/* =========================
   CONTINUOUS PETALS
========================= */


setInterval(()=>{


if(card.style.display==="flex"){

createPetals();

}


},7000);


}
