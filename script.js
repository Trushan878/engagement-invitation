let opened = false;

function openInvitation(){

    console.log("Button clicked");


    if(opened) return;

    opened = true;


    const flap = document.querySelector(".flap");
    const letter = document.querySelector(".letter");
    const welcome = document.getElementById("welcome");
    const card = document.getElementById("card");


    if(flap){
        flap.style.transform = "rotateX(180deg)";
    }


    if(letter){
        letter.style.transform = "translateY(-130px)";
    }


    setTimeout(function(){


        welcome.style.display = "none";


        card.style.display = "flex";


        setTimeout(function(){

            card.style.opacity = "1";

        },100);


    },1500);

}
