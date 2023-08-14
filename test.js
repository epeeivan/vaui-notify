import Notif from "./js/notif.js";

let notif = new Notif();

document.addEventListener("readystatechange", () => {
    document.readyState == "complete" ?
        document.getElementById("notif_button").addEventListener("click", () => {
            notif.notify("success", "welcome to notify");

        }) : '';
})