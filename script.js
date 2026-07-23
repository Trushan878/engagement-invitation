/* =========================
   ELEMENTS
========================= */


const openBtn = document.getElementById("openBtn");

const music = document.getElementById("music");
const musicBtn = document.getElementById("musicBtn");


let opened = false;
let playing = false;



/* =========================
   OPEN BUTTON
========================= */


if(openBtn){

    openBtn.addEventListener("click", openInvitation);


    // Mobile support

    openBtn.addEventListener("touchend", function(e){

        e.preventDefault();

        openInvitation();

    });

}




/* =========================
   ENVELOPE OPENING
========================= */


function openInvitation(){


    if(opened) return;


    opened=true;



    const flap = document.querySelector(".flap");

    const letter = document.querySelector(".letter");

    const welcome = document.getElementById("welcome");

    const card = document.getElementById("card");



    // Open flap

    if(flap){

        flap.style.transform =
        "rotateX(180deg)";

    }



    // Letter comes out

    if(letter){

        letter.style.transform =
        "translateY(-130px)";

    }



    // Spark effect

    createSparkBurst();



    // Petals

    createPetals();



    // Music start

    if(music){

        music.play().catch(()=>{});

    }



    // Show invitation


    setTimeout(()=>{


        if(welcome){

            welcome.style.opacity="0";

        }



        setTimeout(()=>{


            if(welcome){

                welcome.style.display="none";

            }



            if(card){


                card.style.display="flex";


                setTimeout(()=>{


                    card.style.opacity="1";


                    card.classList.add(
                    "card-open"
                    );


                },100);


            }



        },800);



    },1500);



}







/* =========================
   MUSIC BUTTON
========================= */


if(musicBtn){


musicBtn.addEventListener("click",()=>{


    if(!music) return;



    if(playing){


        music.pause();


        musicBtn.innerHTML="🎵";


    }

    else{


        music.play().catch(()=>{});


        musicBtn.innerHTML="🔊";


    }



    playing=!playing;



});


}







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



        spark.style.setProperty(
        "--x",
        x+"px"
        );


        spark.style.setProperty(
        "--y",
        y+"px"
        );



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



        petal.style.left =
        Math.random()*100+"vw";



        petal.style.animationDuration =
        (3+Math.random()*5)+"s";



        petal.style.opacity =
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


    const card =
    document.getElementById("card");


    if(card && card.style.display==="flex"){


        createPetals();


    }


},7000);
