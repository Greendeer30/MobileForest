
var id = document.getElementById("hunterId");
var name = document.getElementById("hunterName");
var login = document.getElementById("login");

login.addEventListener("click", () => {
    if(id.value >= 1 && id.value <= 99){
        checkLoginInfo(id.value, login.value);
    }
});

async function checkLoginInfo(){
    var correctName = db
        .collection("login")
        .doc("hunters");
    
    console.log(correctName.1);
    console.log(correctName["1"]);
    console.log(correctName.data());
}

