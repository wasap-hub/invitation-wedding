let countdownInterval = null;

function initCountdown() {

    const countdownDate = new Date(
        CONFIG.event.countdown.date +
        "T" +
        CONFIG.event.countdown.time +
        ":00"
    );

    function updateCountdown() {

        const day = document.getElementById("day");
        const hour = document.getElementById("hour");
        const minute = document.getElementById("minute");
        const second = document.getElementById("second");

        if (!day || !hour || !minute || !second) {
            return;
        }

        const now = new Date();
        const distance = countdownDate.getTime() - now.getTime();

        if (distance <= 0) {

            day.textContent = "00";
            hour.textContent = "00";
            minute.textContent = "00";
            second.textContent = "00";

            clearInterval(countdownInterval);

            return;
        }

        day.textContent = Math.floor(distance / (1000 * 60 * 60 * 24));

        hour.textContent = Math.floor(
            (distance % (1000 * 60 * 60 * 24)) /
            (1000 * 60 * 60)
        );

        minute.textContent = Math.floor(
            (distance % (1000 * 60 * 60)) /
            (1000 * 60)
        );

        second.textContent = Math.floor(
            (distance % (1000 * 60)) /
            1000
        );
    }

    updateCountdown();

    countdownInterval = setInterval(updateCountdown, 1000);

}