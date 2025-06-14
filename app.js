const text = document.querySelector("#text");
const sizes = document.querySelector("#sizes");
const generateBtn = document.querySelector("#generateBtn");
const downloadBtn = document.querySelector("#downloadBtn");

let size = sizes.value;
const qrBody = document.querySelector(".qrBody")

generateBtn.addEventListener("click", (e) => {
    e.preventDefault();
    generateQR();
})

sizes.addEventListener("change", (e) => {
    size = e.target.value;
    generateQR();
})

async function generateQR() {
    qrBody.innerHTML = "";
    if (text.value === "") {
        alert("Please enter text or URL to generate QR code.");
    } else {
        new QRCode(qrBody, {
            text: text.value,
            width: size,
            height: size,
            colorDark: "#000000",
            colorLight: "#ffffff",
        });
    }
}

downloadBtn.addEventListener("click", () => {
    let img = document.querySelector(".qrBody img");

    if (img !== null) {
        downloadBtn.setAttribute("href", img.src);
    }
})