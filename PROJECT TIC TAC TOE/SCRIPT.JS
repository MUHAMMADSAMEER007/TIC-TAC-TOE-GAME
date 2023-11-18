let player = document.querySelector(".player");
let counter = 0;
let tieHelper = false;
const wincondition = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];
let playerTurn = document.querySelector("span");

let arr = document.querySelectorAll(".cell");
let ary = Array.from(arr);

ary.forEach(cell => {
    cell.addEventListener("click", () => {
        if (cell.innerHTML != "") { return false }
        else {
            if (playerTurn.innerText === "X") {
                cell.style.background = "green";
                cell.innerHTML = "X"
                playerTurn.innerText = "O";
                counter++

            }
            else if (playerTurn.innerText == "O") {
                cell.innerHTML = "O";
                cell.style.background = "purple";
                playerTurn.innerText = 'X';
                counter++
            }
        }

        winStatus();
        tie();
    })
})
let winStatus = () => {

    for (let i = 0; i < wincondition.length; i++) {
      let [c1, c2, c3] = wincondition[i];
      if (ary[c1].innerHTML != '' && ary[c1].innerHTML == ary[c2].innerHTML && ary[c2].innerHTML == ary[c3].innerHTML) {
        ary[c1].style.background = '#0f0';
        ary[c2].style.background = '#0f0';
        ary[c3].style.background = '#0f0';
        ary.forEach(cell => {
          cell.setAttribute("disabled", true);
        })
        let winer = ary[c1].innerHTML;

        player.innerText = "The winner is " + winer;
        playerTurn.style.display = "none";

        tieHelper = true;}

    }
  }

  const tie = () => {
    if (counter == ary.length && tieHelper == false) {
      player.innerText = 'Tie'
      playerTurn.style.display = 'none';

    }
  }

  document.querySelector(".Reset").addEventListener("click", () => {
    ary.forEach(cell => {
      cell.innerHTML = '';
      cell.style.background = 'gray';
      playerTurn.innerText = 'X';
      cell.removeAttribute("disabled", "")
    })
    player.innerText = "player turn";
    playerTurn.style.display = "block"
    counter = 0;
    tieHelper = false;
  })


