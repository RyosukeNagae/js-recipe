let number = document.getElementById("num").value

const threeEx = function (n) {
  for (let count = 1; count <= n; count++) {
    if (count % 3 === 0) {
      console.log(count + "!!!!!!!")
    } else {
      console.log(count)
    }
  }
}

threeEx(number)
