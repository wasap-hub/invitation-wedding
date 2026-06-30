const music = document.getElementById("music");

function playMusic(){

    if(music){

        music.play().catch(()=>{});

    }

}