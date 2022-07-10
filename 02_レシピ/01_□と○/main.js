const figure = document.getElementById("figure")
// const squareButton = document.getElementById("square-button")
// const circleButton = document.getElementById("circle-button")

// circleButton.onclick = function () {
//   figure.classList.add("rounded")
// }

// squareButton.onclick = function () {
//   figure.classList.remove("rounded")
// }

// 状態変数
let a = 0

figure.onclick = function () {
  switch (a) {
    case 0:
      figure.classList.remove("triangle")
      figure.classList.add("rounded")
      a = 1
      break
    case 1:
      figure.classList.remove("square")
      figure.classList.remove("rounded")
      figure.classList.add("triangle")
      a = 2
      console.log(a)
      break
    case 2:
      figure.classList.add("square")
      figure.classList.remove("triangle")
      a = 0
      console.log("square")
      break
    default:
      break
  }
}
