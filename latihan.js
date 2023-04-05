//section2
function ambilDataPengguna() {
    var inputFields = document.getElementsByName("dataPengguna");
    var dataPengguna = {};
    for (var i = 0; i < inputFields.length; i++) {
        var name = inputFields[i].getAttribute("name");
        var value = inputFields[i].value;
        dataPengguna[name] = value;
    }
    console.log(dataPengguna);
}

function tampilkanHasil() {
    var nama = document.getElementById("nama").value;
    document.getElementById("hasil").innerHTML = "Halo, " + nama + "!";
}

function ambilDataPengguna() {
    var inputFields = document.getElementsByTagName("input");
    var dataPengguna = {};
    for (var i = 0; i < inputFields.length; i++) {
        var name = inputFields[i].getAttribute("name");
        var value = inputFields[i].value;
        dataPengguna[name] = value;
    }
    console.log(dataPengguna);
}
// section3
var paragraph = document.querySelector("#container p");
if (paragraph) {
    var parentContainer = paragraph.parentNode;
    console.log("Parent container:", parentContainer);
} else {
    console.log("Paragraph element not found.");
}

// Get child elements
var container = document.getElementById("container");
if (container) {
    var children = container.children;
    console.log("Children of container:", children);
} else {
    console.log("Container element not found.");
}

// Get siblings of an element
if (paragraph) {
    var siblings = Array.from(paragraph.parentNode.children).filter(child => child !== paragraph);
    console.log("Siblings of paragraph:", siblings);
} else {
    console.log("Paragraph element not found.");
}
// section 4
function addNewParagraph() {
    // Create a new <p> element
    var newParagraph = document.createElement("p");

    // Set the text content of the new <p> element
    newParagraph.textContent = "New Paragraph";

    // Get the parent element (container)
    var container = document.getElementById("container");

    // Append the new <p> element as a child of the container
    container.appendChild(newParagraph);
}
// section5

function seclima() {

    var button = document.getElementById("myButton");

    button.setAttribute("style", "background-color: red; color: white;");
}
// getatribute
function seclima1() {
    let button = document.getElementById("Button");
    let id = button.getAttribute("id");
    console.log("ID: " + id);
}
// section6
// getcomputed style
function computed() {
    const myButton = document.getElementById("myButton");
    const computedStyle = getComputedStyle(myButton);
    const fontSize = computedStyle.fontSize;

    console.log(fontSize); // output: "18px"

    // kasus7
}

function kasus() {
    const myButton = document.getElementById("myButton");
    myButton.addEventListener("click", () => {
        alert("Button clicked!");
    });
}

function kasusdua() {
    const myButton = document.getElementById("aButton");
    myButton.addEventListener("mouseover", function() {
        console.log("Button focused!");
    });

}
const radioButtons = document.querySelectorAll('input[name="gender"]');
radioButtons.forEach(function(radio) {
    radio.addEventListener('change', function() {
        console.log(`Selected gender: ${this.value}`);
    });
});