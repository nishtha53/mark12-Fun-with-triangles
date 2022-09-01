const sideInput = document.querySelectorAll(".side-input");
const hypotenuseBtn = document.querySelector("#hypotenuse-btn")
const outputAns = document.querySelector("#output");

function calculateHypotenuse(lenghts) {
    let hypotenuse = 0;
    for (let i = 0; i < lenghts.length; i++) {
        if (lenghts[i].value == "" || Number(lenghts[i].value) < 0) {
            hypotenuse = 0;
            break;
        } else {
            hypotenuse = hypotenuse + (Number((lenghts[i].value) ** 2));
        }
    }
    hypotenuse = Math.sqrt(hypotenuse);
    return hypotenuse;
}
hypotenuseBtn.addEventListener('click', () => {
    let hypotenuse = calculateHypotenuse(sideInput);
    if (hypotenuse == 0) {
        outputAns.innerText = `Enter valid length of sides `;
    } else {
        outputAns.innerText = `Hypotenuse is  ${hypotenuse.toFixed(2)}`;
    }
});