//const inputNum = document.getElementById("input")
const checkButton = document.getElementById("button1")

function threeEx(n) {
  for (let count = 1; count <= n; count++) {
    if (count % 3 === 0) {
      console.log(count + "!!!!!!!")
    } else {
      console.log(count)
    }
  }
}

function displayNums() {
  const inputNum = document.getElementById("input").value
  threeEx(inputNum)
}

//checkbutton.addEventListener("click", threeEx(inputNum))
checkButton.onclick = displayNums()
