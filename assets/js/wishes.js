let wishesLoaded = false;

function initWishes() {

    if (wishesLoaded) return;

    wishesLoaded = true;

    const btn = document.getElementById("btnWish");

    if (!btn) return;

    loadWishes();

    btn.onclick = async function () {

        const name = document.getElementById("wishName").value.trim();
        const message = document.getElementById("wishMessage").value.trim();

        if (!name || !message) {

            alert("Silakan lengkapi nama dan ucapan.");

            return;

        }

        btn.disabled = true;
        btn.innerHTML = "Mengirim...";

        try {

            const url =
                CONFIG.api.wishes +
                "?action=save" +
                "&nama=" + encodeURIComponent(name) +
                "&ucapan=" + encodeURIComponent(message);

            const response = await fetch(url);

            const result = await response.json();

            if (result.status) {

                document.getElementById("wishName").value = "";
                document.getElementById("wishMessage").value = "";

                await loadWishes();

            } else {

                alert("Gagal menyimpan ucapan.");

            }

        } catch (err) {

            console.error(err);

            alert("Terjadi kesalahan.");

        }

        btn.disabled = false;
        btn.innerHTML = "Kirim Ucapan";

    };

}

async function loadWishes() {

    const list = document.getElementById("wishList");

    if (!list) return;

    list.innerHTML = "";

    try {

        const response = await fetch(CONFIG.api.wishes);

        const data = await response.json();

        data.forEach(item => {

            const card = document.createElement("div");

            card.className = "wish-card";

            card.innerHTML = `
                <div class="wish-name">${item.nama}</div>
                <div>${item.ucapan}</div>
                <div class="wish-date">${item.waktu}</div>
            `;

            list.appendChild(card);

        });

    } catch (err) {

        console.error(err);

    }

}