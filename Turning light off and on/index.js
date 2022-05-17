//  For turning light on and off using different butttons

function bulbon(){
    let bulb = document.getElementById('lightbulb');
    bulb.src = 'lighton.png';
    document.getElementById('change_color').style.backgroundColor = 'white';

}

function bulboff(){
    let bulb = document.getElementById('lightbulb');
    bulb.src = 'lightoff.png';
    document.getElementById('change_color').style.backgroundColor = 'black';
    
}
// For turning light on and off by clicking on image 


// function bulbToggle(){
//     let bulb = document.getElementById('lightbulb');
//     if(bulb.src.match('lightoff')){
//         bulb.src='lighton.png';
//         document.getElementById('change_color').style.backgroundColor = 'White';
//     }
//     else{
//         bulb.src = 'lightoff.png';
//      document.getElementById('change_color').style.backgroundColor = 'black';
//     }
// }