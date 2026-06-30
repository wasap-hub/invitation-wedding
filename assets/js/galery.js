// function initGallery(){

// console.log("Gallery Ready");

// }

function initGallery(){

    const modal =
        document.getElementById("galleryModal");

    const preview =
        document.getElementById("galleryPreview");

    const images =
        document.querySelectorAll(".gallery-item img");

    const close =
        document.querySelector(".gallery-close");

    images.forEach(img=>{

        img.addEventListener("click",function(){

            modal.style.display="flex";

            preview.src=this.src;

        });

    });

    close.addEventListener("click",function(){

        modal.style.display="none";

    });

    modal.addEventListener("click",function(e){

        if(e.target===modal){

            modal.style.display="none";

        }

    });

}