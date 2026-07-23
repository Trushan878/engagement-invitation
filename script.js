const music = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicBtn");

let musicPlaying = false;

musicBtn.addEventListener("click", () => {

    if(musicPlaying){

        music.pause();

        musicBtn.innerHTML="🔇";

    }else{

        music.play();

        musicBtn.innerHTML="🔊";

    }

    musicPlaying=!musicPlaying;

});
const openBtn = document.getElementById("openBtn");
const envelope = document.getElementById("envelope");
const flap = document.querySelector(".flap");
const letter = document.querySelector(".letter");
const seal = document.querySelector(".seal");
const welcome = document.getElementById("welcome");
const card = document.getElementById("card");

// ---------- Falling Petals ----------

function createPetal(){

    const petal=document.createElement("div");

    petal.className="petal";

    petal.style.left=Math.random()*window.innerWidth+"px";

    petal.style.animationDuration=(5+Math.random()*4)+"s";

    petal.style.opacity=Math.random();

    petal.style.transform=`rotate(${Math.random()*360}deg)`;

    document.body.appendChild(petal);

    setTimeout(()=>{

        petal.remove();

    },9000);

}

setInterval(createPetal,350);

// ---------- Gold Sparkles ----------

function burst(){

    for(let i=0;i<70;i++){

        let s=document.createElement("div");

        s.className="spark";

        s.style.left=(window.innerWidth/2)+"px";

        s.style.top=(window.innerHeight/2)+"px";

        s.style.setProperty("--x",(Math.random()*700-350)+"px");

        s.style.setProperty("--y",(Math.random()*700-350)+"px");

        document.body.appendChild(s);

        setTimeout(()=>{

            s.remove();

        },1800);

    }

}

// ---------- Envelope Opening ----------

openBtn.onclick=function(){

    openBtn.disabled=true;

    // Remove seal
    seal.style.transition=".5s";
    seal.style.transform="translateX(-50%) scale(0)";
    seal.style.opacity="0";

    // Open flap
    setTimeout(()=>{

        flap.style.transform="rotateX(-180deg)";

    },500);

    // Pull invitation out
    setTimeout(()=>{

        letter.style.transform="translateY(-420px) scale(1.08)";

    },1200);

    // Sparkles
    setTimeout(()=>{

        burst();

    },1600);

    // Fade welcome
    setTimeout(()=>{

        welcome.style.transition="1.2s";
        welcome.style.opacity="0";

    },2600);

    // Show invitation
    setTimeout(()=>{

        welcome.style.display="none";

        card.style.display="flex";

        card.style.opacity="0";

        setTimeout(()=>{

            card.style.transition="1.5s";
            card.style.opacity="1";

        },100);

    },3400);

}
