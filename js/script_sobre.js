import {send} from "./script_base.js";

document.querySelector("#enviarEmail").addEventListener("click", e =>{
    send(document.querySelector("#email"))
});