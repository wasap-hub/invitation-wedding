function initRSVP(){

    const form=document.getElementById("rsvpForm");

    if(!form){

        return;

    }

    form.addEventListener("submit",function(e){

        e.preventDefault();

        const data={

            guest:

            document.getElementById("guest").value,

            guestCount:

            document.getElementById("guestCount").value,

            attendance:

            document.getElementById("attendance").value,

            message:

            document.getElementById("message").value

        };

        console.table(data);

        alert("Terima kasih atas konfirmasi kehadiran Anda.");

        form.reset();

    });

}