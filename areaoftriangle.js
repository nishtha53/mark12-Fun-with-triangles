const button = document.querySelector("#submit");
const output = document.querySelector("#output");
const baseHeight = document.querySelectorAll(".input");

function calculateArea() {
    let oneSide = Number(baseHeight[0].value);
    let secondSide = Number(baseHeight[1].value);
    if (oneSide < 0 || secondSide < 0 || !oneSide || !secondSide) {
        return "Enter valid Input";
    }
    let area = oneSide * secondSide;
    area = area / 2;
    return `Area of Triangle is ${area.toFixed(2)}`;
}
button.addEventListener('click', () => {
    let area = calculateArea();
    output.innerText = area;
});