const choosenNote = document.querySelectorAll(".buttonNote");
let x;

for (let i = 0; i < choosenNote.length; i++) {
    choosenNote[i].addEventListener("mouseover", function(event) {
        setTimeout(() => {
            event.target.style.backgroundColor = 'hsl(25, 97%, 53%)';
        if (event.target.previousElementSibling){
            event.target.previousElementSibling.style.backgroundColor= "hsl(216, 12%, 54%, .8";
        }
        if (event.target.nextElementSibling) {
        event.target.nextElementSibling.style.backgroundColor= "hsl(216, 12%, 54%, .8)";
        }
        }, 100);
    });
}

for (let i = 0; i < choosenNote.length; i++) {
    choosenNote[i].addEventListener("mouseout", function(event) { 
        setTimeout(() => {
              event.target.style.backgroundColor = 'hsl(216, 12%, 54%, .2)';
        if (event.target.previousElementSibling){
            event.target.previousElementSibling.style.backgroundColor= "hsl(216, 12%, 54%, .2)";
        }
        if (event.target.nextElementSibling) {
        event.target.nextElementSibling.style.backgroundColor= "hsl(216, 12%, 54%, .2)";
        } 
        }, 100)
      
    });

    








}

console.log(x);
    // if (x === 1) {
    //                 document.querySelector("#btn1").style.backgroundColor = 'hsl(25, 97%, 53%)';
    //                 document.querySelector("#btn2").style.backgroundColor = 'hsl(216, 12%, 54%, .8)';
    //             } else if (x === 2) {
    //                 document.querySelector("#btn1").style.backgroundColor = 'hsl(216, 12%, 54%, .8)';
    //                 document.querySelector("#btn2").style.backgroundColor = 'hsl(25, 97%, 53%)';
    //                 document.querySelector("#btn3").style.backgroundColor = 'hsl(216, 12%, 54%, .8)';
    //             } else if (x === 3) {
    //                 document.querySelector("#btn2").style.backgroundColor = 'hsl(216, 12%, 54%, .8)';
    //                 document.querySelector("#btn3").style.backgroundColor = 'hsl(25, 97%, 53%)';
    //                 document.querySelector("#btn4").style.backgroundColor = 'hsl(216, 12%, 54%, .8)';
    //             } else if (x === 4) {
    //                 document.querySelector("#btn3").style.backgroundColor = 'hsl(216, 12%, 54%, .8)';
    //                 document.querySelector("#btn4").style.backgroundColor = 'hsl(25, 97%, 53%)';
    //                 document.querySelector("#btn5").style.backgroundColor = 'hsl(216, 12%, 54%, .8)';
    //             } else if (x === 5) {
    //                 document.querySelector("#btn5").style.backgroundColor = 'hsl(25, 97%, 53%)';
    //                 document.querySelector("#btn4").style.backgroundColor = 'hsl(216, 12%, 54%, .8)';
    //             } else {
    //                 document.querySelector("#btn1").style.backgroundColor = '';
    //                 document.querySelector("#btn2").style.backgroundColor = '';
    //                 document.querySelector("#btn3").style.backgroundColor = '';
    //                 document.querySelector("#btn4").style.backgroundColor = '';
    //                 document.querySelector("#btn5").style.backgroundColor = '';
    //             }



// function changeColorOff() {
//     bouton2.style.backgroundColor = 'hsl(216, 12%, 54%, .2)';
//     bouton3.style.backgroundColor = 'hsl(216, 12%, 54%, .2)';
//     bouton4.style.backgroundColor = 'hsl(216, 12%, 54%, .2)';
// };

