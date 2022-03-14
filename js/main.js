import { capitalizeFirstCharacter, getTodaysDate } from "./tools.js";
const contentElem = document.querySelector(".content");
contentElem.innerHTML = `
<p>${capitalizeFirstCharacter("this ist a test")}</p>`;
<p>${getTodaysDate()}</p>
`
