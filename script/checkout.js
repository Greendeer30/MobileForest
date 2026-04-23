const BUCKS = document.getElementById("bucks");
const DOE = document.getElementById("doe");
const BUTTONBUCKS = document.getElementById("buttonBucks");
const TOTALCAUGHT = document.getElementById("totalCaught");
const CHECKOUT = document.getElementById("checkout");

function updateTotal(){
    var total = Number(BUCKS.value) + Number(DOE.value) + Number(BUTTONBUCKS.value);
    TOTALCAUGHT.textContent = "Total Caught: " + total;
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



    if(ID.value >= 1 && ID.value <= 99){
        checkLoginInfo(ID.value, NAME.value);
    }
});
