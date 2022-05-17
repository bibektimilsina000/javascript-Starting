//  to generate random number 
let num = Math.floor(Math.random()*100)+1;
console.log (num)

// to add click function on button 
let btn1 = document.getElementById("button");
btn1.addEventListener("click", myFunction);

// for displaying output 
let output = document.getElementById("output");

// main function 
function myFunction(){
    let input = document.getElementById("userInput").value;

    if(input==num){
        output.innerHTML = "Congratulation, You guess correct number";
        output.style.backgroundColor = 'green';
        restart.style.display = 'inline-block';
        btn1.style.display = 'none';
    } 
    else if(input <= num){
        output.innerHTML = "Try bigger number !";
        output.style.backgroundColor = 'red';
    } 
    else {
        output.innerHTML = "Try smaller number !";
        output.style.backgroundColor = 'red';
    }
}


