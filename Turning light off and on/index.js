//  For turning light on and off using different butttons

function bulbon(){
    let bulb = document.getElementById('lightbulb');
    bulb.src = 'lighton.jpg';
}
function bulboff(){
    let bulb = document.getElementById('lightbulb');
    bulb.src = 'lightoff.jpg';
}

// For turning light on and off by clicking on image 


// function bulbToggle(){
//     let bulb = document.getElementById('lightbulb');
//     if(bulb.src.match('lightoff')){
//         bulb.src='lighton.jpg';
//     }
//     else{
//         bulb.src = 'lightoff.jpg';
//     }
// }