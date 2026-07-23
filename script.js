const openBtn = document.getElementById("openBtn");
const flap = document.querySelector(".flap");
const letter = document.querySelector(".letter");
const welcome = document.getElementById("welcome");
const card = document.getElementById("card");

// Create floating petals
function createPetal() {
    const petal = document.createElement("div");
    petal.className = "petal";

    petal.style.left = Math.random() * window.innerWidth + "px";
    petal.style.animationDuration = (5 + Math.random() * 5) + "s";
    petal.style.opacity = Math.random();

    document.body.appendChild(petal);

    setTimeout(() => petal.remove(), 10000);
}

setInterval(createPetal, 300);

// Gold sparkle burst
function createSparkles() {

    for (let i = 0; i < 40; i++) {

        const s = document.createElement("div");

        s.className = "spark";

        s.style.left = (window.innerWidth / 2) + "px";
        s.style.top = (window.innerHeight / 2) + "px";

        s.style.setProperty("--x", (Math.random() * 500 - 250) + "px");
        s.style.setProperty("--y", (Math.random() * 500 - 250) + "px");

        document.body.appendChild(s);

        setTimeout(() => s.remove(), 1800);
    }

}

openBtn.onclick = () => {

    flap.style.transform = "rotateX(-180deg)";

    setTimeout(() => {

       letter.style.transform =
"translateY(-430px) scale(1.1)";

    }, 300);

    createSparkles();

    setTimeout(() => {

        welcome.style.opacity = "0";

    }, 1800);

    setTimeout(() => {

        welcome.style.display = "none";
        card.style.display = "flex";

    }, 2500);

};
