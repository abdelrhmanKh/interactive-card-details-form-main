const form = document.querySelector("#infoCard");
let nameInput = document.querySelector("#name");
let numInput = document.querySelector("#number");
let monthInput = document.querySelector("#month");
let yearInput = document.querySelector("#year");
let cvcInput = document.querySelector("#cvc");

const cardname = document.querySelector(".card-name");
const cardnum = document.querySelector(".card-num");
const carddate = document.querySelector(".card-date");
const cardcvc = document.querySelector(".card-cvc");

const thanksDiv = document.querySelector(".thanks")
const nameDiv = document.querySelector(".name-div")
const numDiv = document.querySelector(".num-div")
const dateDive = document.querySelector(".date")
const cvcDiv = document.querySelector(".cvc")

let errorSpan = document.createElement("span")
errorSpan.classList.add("error");
errorSpan.classList.remove("grid");

const submitBtn = document.querySelector(".submit");
const conyBtn = document.querySelector("#cont");

nameInput.addEventListener("keyup", (e) => {
    errorSpan.classList.remove("grid");
    let regex = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/g
    nameDiv.appendChild(errorSpan);
    if (regex.test(e.target.value)) {
        cardname.textContent = e.target.value;
        nameDiv.removeChild(errorSpan)
    } else {
        errorSpan.innerText = "InCorrect name"
    }
})
numInput.addEventListener("keyup", (e) => {
    errorSpan.classList.remove("grid");
    let regex = /^[0-9]+$/g
    let split4 = /.{1,4}/g
    let val = e.target.value.split(" ").join("")
    e.target.value = val.match(split4).join(" ")
    numDiv.appendChild(errorSpan);
    if (regex.test(val) && val.length <= 16) {
        cardnum.textContent = val.match(split4).join(" ");
        numDiv.removeChild(errorSpan);
    } else {
        errorSpan.innerText = "Incorrect Card Number"
    }
})


monthInput.addEventListener("keyup", (e) => {
    errorSpan.classList.add("grid");
    dateDive.appendChild(errorSpan);
    if (parseInt(e.target.value) && parseInt(e.target.value) >= 1 && parseInt(e.target.value) <= 12 && e.target.value.match(/(\d)/g).length == e.target.value.length) {
        e.target.value.length < 2 && parseInt(e.target.value) < 10 ? carddate.firstChild.innerText = `0${e.target.value}` : carddate.firstChild.innerText = e.target.value
        dateDive.removeChild(errorSpan);
    } else {
        errorSpan.innerText = "InCorrect Mounth";
    }
})

yearInput.addEventListener("keyup", (e) => {
    let currentYear = new Date().getFullYear() - 2000
    errorSpan.classList.add("grid");
    dateDive.appendChild(errorSpan);
    if (parseInt(e.target.value) && parseInt(e.target.value) >= currentYear && e.target.value.match(/(\d)/g).length == e.target.value.length) {
        e.target.value.length < 2 && parseInt(e.target.value) < 10 ? carddate.lastChild.innerText = `0${e.target.value}` : carddate.lastChild.innerText = e.target.value
        dateDive.removeChild(errorSpan);
    } else {
        errorSpan.innerText = "InCorrect Year Or Expired Year";
    }
})


cvcInput.addEventListener("keyup", (e) => {
    errorSpan.classList.remove("grid");
    cvcDiv.appendChild(errorSpan);
    if (parseInt(e.target.value) && e.target.value.match(/(\d)/g).length == e.target.value.length) {
        e.target.value.length < 2 && parseInt(e.target.value) < 10 ? cardcvc.innerText = `0${e.target.value}` : cardcvc.innerText = e.target.value
        cvcDiv.removeChild(errorSpan);
    } else {
        errorSpan.innerText = "InCorrect CVC";
    }
})

submitBtn.addEventListener("click", (e) => {
    e.preventDefault()
    console.log(!nameInput.value == "")
    if (!nameInput.value == "" && !numInput.value == "" && !monthInput.value == "" && !yearInput.value == "" && !cvcInput.value == "") {
        form.classList.add("none")
        thanksDiv.classList.remove("none")
    } else {
        nameInput.value === "" ? nameInput.focus() : numInput.value == "" ? numInput.focus() : monthInput.value == "" ? monthInput.focus() : yearInput.value == "" ? yearInput.focus() : cvcInput.focus()
    }
})

conyBtn.addEventListener("click", () => {
    form.reset()
    cardname.innerText = "Jane Appleseed"
    cardnum.innerText = "0000 0000 0000 0000"
    carddate.innerHTML = "<span>00</span>/<span>00</span>"
    cardcvc.innerText = "000"
    form.classList.remove("none")
    thanksDiv.classList.add("none")
})


