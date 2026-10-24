/* =========================
   RÉCUPÉRATION DES PAGES
========================= */

const page1 = document.getElementById("page1");
const page2 = document.getElementById("page2");
const page3 = document.getElementById("page3");


/* =========================
   BOUTONS
========================= */

const button1 = document.getElementById("button1");
const button2 = document.getElementById("button2");


/* =========================
   FONCTION POUR CHANGER DE PAGE
========================= */

function changePage(currentPage, nextPage) {

    currentPage.classList.remove("active");

    setTimeout(function () {

        nextPage.classList.add("active");

    }, 100);
}


/* =========================
   PAGE 1 → PAGE 2
========================= */

button1.addEventListener("click", function () {

    changePage(page1, page2);

});


/* =========================
   PAGE 2 → PAGE 3
========================= */

button2.addEventListener("click", function () {

    changePage(page2, page3);

    setTimeout(function () {

        createFinalHearts();

    }, 700);

});


/* =========================
   CŒURS FLOTTANTS
========================= */

function createHeart() {

    const container =
        document.querySelector(".hearts");

    const heart =
        document.createElement("div");


    heart.classList.add("heart");


    const symbols = [
        "♡",
        "♥️",
        "❤️",
        "🤍",
        "💕"
    ];


    heart.textContent =
        symbols[
            Math.floor(
                Math.random() * symbols.length
            )
        ];


    heart.style.left =
        Math.random() * 100 + "%";


    heart.style.fontSize =
        (14 + Math.random() * 25) + "px";


    heart.style.animationDuration =
        (5 + Math.random() * 5) + "s";


    container.appendChild(heart);


    setTimeout(function () {

        heart.remove();

    }, 10000);
}


/* =========================
   CRÉATION AUTOMATIQUE
========================= */

setInterval(function () {

    createHeart();

}, 700);


/* =========================
   EXPLOSION DE CŒURS
   PAGE FINALE
========================= */

function createFinalHearts() {

    const container =
        document.querySelector(".hearts");


    for (let i = 0; i < 30; i++) {

        setTimeout(function () {

            const heart =
                document.createElement("div");


            heart.classList.add("heart");

            heart.textContent = "❤️";


            heart.style.left =
                (20 + Math.random() * 60) + "%";


            heart.style.bottom =
                (20 + Math.random() * 30) + "%";


            heart.style.fontSize =
                (15 + Math.random() * 30) + "px";


            heart.style.animationDuration =
                (3 + Math.random() * 3) + "s";


            container.appendChild(heart);


            setTimeout(function () {

                heart.remove();

            }, 6000);


        }, i * 80);

    }
}