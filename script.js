let opened = false;

document.addEventListener("DOMContentLoaded", function(){

    const openBtn = document.getElementById("openBtn");

    if(openBtn){

        openBtn.addEventListener("click", openInvitation);

        openBtn.addEventListener("touchend", function(e){

            e.preventDefault();

            openInvitation();

        });

    }

});


function openInvitation(){


    if(opened) return;

    opened = true;


    const flap = document.querySelector(".flap");
    const letter = document.querySelector(".letter");
    const welcome = document.getElementById("welcome");
    const card = document.getElementById("card");


    // Envelope animation

    if(flap){

        flap.style.transform="rotateX(180deg)";

    }


    if(letter){

        letter.style.transform="translateY(-130px)";

    }



    setTimeout(function(){


        if(welcome){

            welcome.style.opacity="0";

        }


        setTimeout(function(){


            if(welcome){

                welcome.style.display="none";

            }


            if(card){

                card.style.display="flex";


                setTimeout(()=>{

                    card.style.opacity="1";

                },100);

            }


        },800);


    },1500);


}
