var turn = false
var spots = document.body.querySelectorAll(".wrap div")

for (var i=0; i<spots.length; i+=1) {
  spots[i].addEventListener("click", function(){
    clickSpot(this)
  })
}

function reset() {
  for (var i=0; i<spots.length; i+=1) {
    spots[i].innerText = ""
    spots[i].className = ""
  }
}

function clickSpot(spot) {
  if (spot.innerText===""){
    if (turn) {
      spot.innerText = "X"
      spot.className = "red"
    } else {
      spot.innerText = "O"
      spot.className = "blue"
    }
    checkForWin()
    turn = !turn
  }
}

function checkForWin() {
  var p = turn ? "X" : "O"
  // console.log(p + spots[0].innerText)
  if ((spots[0].innerText === p && spots[1].innerText === p && spots[2].innerText === p) ||
      (spots[0].innerText === p && spots[3].innerText === p && spots[6].innerText === p) ||
      (spots[0].innerText === p && spots[4].innerText === p && spots[8].innerText === p) ||
      (spots[1].innerText === p && spots[4].innerText === p && spots[7].innerText === p) ||
      (spots[2].innerText === p && spots[4].innerText === p && spots[6].innerText === p) ||
      (spots[2].innerText === p && spots[5].innerText === p && spots[8].innerText === p) ||
      (spots[3].innerText === p && spots[4].innerText === p && spots[5].innerText === p) ||
      (spots[6].innerText === p && spots[7].innerText === p && spots[8].innerText === p)) {
        alert(p + " wins!")
        reset()
      }
}
