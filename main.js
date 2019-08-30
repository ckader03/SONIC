let logoEl = document.querySelector(".logo");
let player1 = document.querySelector(".p1");
let player2 = document.querySelector(".p2");
let container = document.querySelector(".container");
let startBtn = document.getElementById("startBtn");



startBtn.addEventListener("click", function() {
    logoEl.style.visibility = "hidden";
    console.log("this should hide")
    container.style.display = "inline";

});

let posL1 = 0;
let posL2 = 0;



document.addEventListener("keydown", function(event) {
    // this checks that you pressed the spacebar, if using Mac OS & Chrome
    if (event.keyCode == 39) {

        if (posL1 < 1100) {
            posL1 += 50;
            player1.style.left = posL1 + "px";
            console.log(player1.style.left);
        } else { alert('You Win player1!!!') }

    } else if (event.keyCode == 96) {
        if (posL2 < 1100) {
            posL2 += 50;
            player2.style.left = posL2 + "px";
            console.log(player2.style.left);
        } else { alert('You Win Sonic!!!'); }
    }

});