const  inputs = document.querySelectorAll('.angle-input');
const buttonTriangle = document.querySelector("#is-triangle-button");
const outputEL = document.querySelector("#output");


function calculateSumOfTraingles(angle1 , angle2 , angle3){
    const sumOfAngles = angle1 + angle2 + angle3;
    return sumOfAngles;
}

function isTriangle(){
    const sumOfAngles = calculateSumOfTraingles(Number(inputs[0].value) , Number(inputs[1].value) , Number(inputs[2].value));
    if(sumOfAngles === 180){
        outputEL.innerText = "Yayy😀!! The angles form a triangle";
    }
    else{
        outputEL.innerText = "Oh No😟!! The angles don't  form a triangle";
    }
}

buttonTriangle.addEventListener("click", isTriangle)