let popup = document.querySelector("#popup");
let closepopup = document.querySelector("#closePopup");
closepopup.addEventListener("click", () => {
    popup.style.display = "none";
})
let cells = document.querySelectorAll(".cell");
let player = 1;
cells.forEach((cell) => {
    cell.addEventListener("click", ()=> {
        if (!cell.classList.contains("taken")) {
            if(player == 1) {
                cell.innerText = 'O';
                cell.style.color = "#ff00ff";
                player = 2;
            } else {
                cell.innerText = 'X';
                cell.style.color = "#00ffc6";
                player = 1;
            }
            cell.disabled = true;
            cell.classList.add("taken"); 
            checkWinner();
        }
        // Check for draw
        // Check for draw
        let allTaken = true;
        cells.forEach((c) => {
            if (!c.classList.contains("taken")) {
                allTaken = false; // If any cell is not taken, it's not a draw
            }
        });

        if (allTaken && play.innerText === "Let's Play Tic Tac Toe") { 
            play.innerText = "Match Draw! :(";
        }

    })  
})
let play = document.querySelector("#play");
const wins = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
const checkWinner = () => {
    for(let win of wins) {
        let val1 = cells[win[0]].innerText;
        let val2 = cells[win[1]].innerText;
        let val3 = cells[win[2]].innerText;
        if(val1 != "" && val2 != "" && val3 != "") {
            if(val1 === val2 && val2 === val3) {
                play.innerText = `Player ${val1} Wins!`;
                cells.forEach(cell => cell.classList.add("taken")); // Ensures no more clicks after game ends
            }
        }
    }
}

let reset = document.querySelector(".reset");
reset.addEventListener("click", ()=>{
    play.innerText = "Let's Play Tic Tac Toe";
    cells.forEach((cell) => {
        cell.innerText = "";
        cell.classList.remove("taken");
    })
})
