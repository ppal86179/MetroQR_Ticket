const wrapper = document.querySelector(".wrapper");
const flex = document.querySelector(".flex");
qrInput = wrapper.querySelector(".form input"),
generateBtn = wrapper.querySelector(".form button"),
qrImg = wrapper.querySelector(".qr-code img");
let preValue;

generateBtn.addEventListener("click", () => {
    let qrValue = qrInput.value.trim();
    if(!qrValue || preValue === qrValue) return;
    preValue = qrValue;
    generateBtn.innerText = "Generating QR Code...";
    qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${qrValue}`;
    qrImg.addEventListener("load", () => {
        wrapper.classList.add("active");
        flex.classList.add("active");
        generateBtn.innerText = "QR Code Generated Successfully";
    });
});

qrInput.addEventListener("keyup", () => {
    if(!qrInput.value.trim()) {
        wrapper.classList.remove("active");
        flex.classList.remove("active");
        generateBtn.innerText = "Pay ticket Fare To Generate QR Code";
        preValue = "";
    }
});
