// function addressFunction(){
//     if (document.getElementById("sameAddress").checked) {
//         document.getElementById("bill").value = document.getElementById("home").value;
//     }
//     else {
//         document.getElementById("home").value = "";
//     }
// }

document.querySelector("#sameAddress").addEventListener("click", function(){
    console.log ("this workds")

    bill = document.querySelector("#bill")
    home = document.querySelector("#home")
    console.log("Home value is" + home.value)
    console.log("Bill value is" + bill.value)
    if (this.checked){
        home.value = bill.value;
        home.disabled = true;
    }
    else{home.value = ""
        home.disabled = false;
    }
});
