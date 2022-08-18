const sideInput = document.querySelectorAll(".side-input");
const hypotenuseBtn = document.querySelector("#hypotenuse-btn")
const outputAns = document.querySelector("#output");

function calculateSumOfSquares(a,b){
    const sumOfSquares = a*a + b*b;
    return sumOfSquares;
}


function calculateHypotenuse(){
    const sumOfSqaures = calculateSumOfSquares(Number(sideInput[0].value) , Number(sideInput[1].value));
    const lengthOfHypotenuse = Math.sqrt(sumOfSqaures);
    outputAns.innerText = "Length of Hypotenuse is " + lengthOfHypotenuse.toFixed(2);
}

hypotenuseBtn.addEventListener("click", calculateHypotenuse);