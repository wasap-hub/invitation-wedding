// ======================
// Guest Name
// ======================

// window.addEventListener("DOMContentLoaded", () => {

//     const params = new URLSearchParams(window.location.search);

//     const guest =
//         params.get("to") || "Bapak/Ibu/Saudara/i";

//     const guestElement =
//         document.getElementById("guestName");

//     if (guestElement) {
//         guestElement.innerHTML =
//             decodeURIComponent(guest.replace(/\+/g, " "));
//     }

// });

function initGuest() {

    const params = new URLSearchParams(window.location.search);

    let guest =
        params.get("to") ||
        params.get("guest") ||
        params.get("nama") ||
        "Bapak/Ibu/Saudara/i";

    guest = decodeURIComponent(guest.replace(/\+/g, " "));

    const guestName = document.getElementById("guestName");

    if (guestName) {
        guestName.textContent = guest;
    }

}