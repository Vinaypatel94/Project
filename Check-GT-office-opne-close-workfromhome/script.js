let day = document.querySelector("#Day");
let button = document.querySelector("#btn");

button.addEventListener("click", () => {
    switch (day.value) {
        case "monday":
            document.querySelector("#para").innerHTML="Goto office";
            break;
        case "tuesday":
            document.querySelector("#para").innerHTML="Work from home";
            break;
        case "wednesday":
            document.querySelector("#para").innerHTML="Goto office";
            break;
        case "thursday":
            document.querySelector("#para").innerHTML="Goto office";
            break;
        case "friday":
            document.querySelector("#para").innerHTML="work from home";
            break;
        case "saturday":
            document.querySelector("#para").innerHTML="Holiday";
            break;
        case "sunday":
            document.querySelector("#para").innerHTML="Holiday";
            break;
        default:
            alert("Please Enter the valid Day")
        }
        day.value=""
});
