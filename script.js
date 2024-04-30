let formData = {
    status: "",
    color: ""
}

let display = document.getElementById("display");

function selectImge(src) {
    display.src = src.src;
}

function selectImg() {
    let image1El = document.getElementById("image1");
    console.log(image1El.src);
    selectImge(image1El);
}

function selectImg1() {
    let image2El = document.getElementById("image2");
    console.log(image2El.src);
    selectImge(image2El);
}

function selectImg2() {
    let image3El = document.getElementById("image3");
    console.log(image3El.src);
    selectImge(image3El);
}

function selectImg3() {
    let image4El = document.getElementById("image4");
    console.log(image4El.src);
    selectImge(image4El);
}




let smallEl = document.getElementById("small");
let mediumEl = document.getElementById("medium");
let largeEl = document.getElementById("large");
let ExtralargeEl = document.getElementById("Extralarge");
let XXLEl = document.getElementById("XXL");

smallEl.addEventListener("change", function(event) {
    formData.status = event.target.value;
    console.log(event.target.value);
});
mediumEl.addEventListener("change", function(event) {
    formData.status = event.target.value;
    console.log(event.target.value);
});
largeEl.addEventListener("change", function(event) {
    formData.status = event.target.value;
    console.log(event.target.value);
});
ExtralargeEl.addEventListener("change", function(event) {
    formData.status = event.target.value;
    console.log(event.target.value);
});
XXLEl.addEventListener("change", function(event) {
    formData.status = event.target.value;
    console.log(event.target.value);
});



let numberEl = document.getElementById("number");

function decrementButton() {
    let numberEle = document.getElementById("number");
    let b = parseInt(numberEle.textContent) - 1;
    if (b >= 0) {
        numberEl.textContent = b;
    }
}

function incrementButton() {
    let numberEle = document.getElementById("number");
    let b = parseInt(numberEle.textContent) + 1;
    numberEl.textContent = b;
}

var selectedColor = null;

function selectColor(color) {
    selectedColor = color;
    var colorOptions = document.getElementsByClassName("color-option");
    for (var i = 0; i < colorOptions.length; i++) {
        colorOptions[i].classList.remove("selected");
    }
    console.log(selectedColor);
    formData.color = selectedColor;
    event.target.classList.add("selected");
}


function addToCart() {
    let messageEl = document.getElementById("message");
    let displaymessage = "Embarace Sideboard with Color " + formData.color + " and " + formData.status + " added to cart";
    messageEl.textContent = displaymessage;
    messageEl.classList.add("paragraph-styling");
}

