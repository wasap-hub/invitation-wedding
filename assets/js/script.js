async function loadSection(id, file) {

    try {

        const response = await fetch("sections/" + file);

        if (!response.ok) {
            throw new Error("Tidak dapat membuka " + file);
        }

        const html = await response.text();

        document.getElementById(id).innerHTML = html;

        console.log("✔ " + file + " berhasil dimuat");

    } catch (e) {

        console.error(e);

    }

}

async function init() {

    await loadSection("cover", "01-cover.html");
    initGuest();
    await loadSection("opening", "02-opening.html");
    await loadSection("home", "03-home.html");
    await loadSection("couple", "04-bride.html");
    await loadSection("countdown","05-countdown.html");
    await loadSection("event", "06-event.html");
    await loadSection("story", "07-story.html");
    await loadSection("gallery", "08-gallery.html");
    // await loadSection("rsvp", "09-rsvp.html");
    await loadSection("gift", "10-gift.html");
    await loadSection("wishes", "11-wishes.html");
    await loadSection("closing", "12-closing.html");

    if (typeof initCountdown === "function")
        initCountdown();

    if (typeof initGallery === "function")
        initGallery();

    // if (typeof initRSVP === "function")
    //     initRSVP();

    if (typeof initWishes === "function")
        initWishes();

}

document.addEventListener("DOMContentLoaded", init);



init();


document.addEventListener("click",function(e){

    if(e.target.id==="btnOpen"){

        playMusic();

        document
            .getElementById("openingAnimation")
            .style.display="flex";

        setTimeout(()=>{

            document
                .getElementById("openingAnimation")
                .style.display="none";

            document
                .getElementById("cover")
                .style.display="none";

            document
                .getElementById("main")
                .style.display="block";

            window.scrollTo({

                top:0,

                behavior:"smooth"

            });

        },2500);

    }

});


function openInvitation(){

    playMusic();

    document.getElementById("openingSection").style.display="flex";

    setTimeout(function(){

        document.getElementById("cover").style.display="none";

        document.getElementById("openingSection").style.display="none";

        document.getElementById("main").style.display="block";

        window.scrollTo({

            top:0,

            behavior:"smooth"

        });

    },2500);

}

