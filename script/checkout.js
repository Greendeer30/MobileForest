const BUCKS = document.getElementById("bucks");
const DOE = document.getElementById("doe");
const BUTTONBUCKS = document.getElementById("buttonBucks");
const TOTALCAUGHT = document.getElementById("totalCaught");
const SUBMIT = document.getElementById("submit");

BUCKS.addEventListener("input", () => {
    
});

SUBMIT.addEventListener("click", () => {



    if(ID.value >= 1 && ID.value <= 99){
        checkLoginInfo(ID.value, NAME.value);
    }
});
