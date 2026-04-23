const BUCKS = document.getElementById("bucks");
const DOE = document.getElementById("doe");
const BUTTONBUCKS = document.getElementById("buttonBucks");
const TOTALCAUGHT = document.getElementById("totalCaught");
const CHECKOUT = document.getElementById("checkout");

var total = 0;

function updateTotal(){
    total = Number(BUCKS.value) + Number(DOE.value) + Number(BUTTONBUCKS.value);
    TOTALCAUGHT.textContent = "Total Caught: " + total;
}

async function updateData(){

    console.log(String(sessionStorage.getItem("id")));

    const doc = await db
        .collection("hunters")
        .doc(String(sessionStorage.getItem("id")));
   
    const startTime = (await doc.get()).data()["startTime"];
    const endTime = (new Date()).toISOString();

    console.log(startTime);

    await doc.collection("sessions").doc("2").set({
        bucks: Number(BUCKS.value),
        doe: Number(DOE.value),
        buttonBucks: Number(BUTTONBUCKS.value),
        caught: total
    });

    window.location.href = "donecheckout.html";

}

DOE.addEventListener("input", () => {
    updateTotal();
});

BUCKS.addEventListener("input", () => {
    updateTotal();
});

BUTTONBUCKS.addEventListener("input", () => {
    updateTotal();
});


CHECKOUT.addEventListener("click", () => {

    updateData();

});
