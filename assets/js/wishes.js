function initWishes(){

    const btn = document.getElementById("btnWish");

    if(!btn){

        return;

    }

    btn.addEventListener("click", function(){

        const name = document.getElementById("wishName").value.trim();

        const message = document.getElementById("wishMessage").value.trim();

        if(name === "" || message === ""){

            alert("Silakan lengkapi nama dan ucapan.");

            return;

        }

        const list = document.getElementById("wishList");

        const card = document.createElement("div");

        card.className = "wish-card";

        const now = new Date();

        card.innerHTML = `
            <div class="wish-name">${name}</div>
            <div>${message}</div>
            <div class="wish-date">
                ${now.toLocaleDateString("id-ID")} ${now.toLocaleTimeString("id-ID")}
            </div>
        `;

        list.prepend(card);

        document.getElementById("wishName").value = "";

        document.getElementById("wishMessage").value = "";

    });

}