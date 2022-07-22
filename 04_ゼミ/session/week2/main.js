//const memoInput = document.getElementById("memo-input")
const addButton = document.getElementById("add-button")
const memoContainer = document.getElementById("memo-container")

addButton.onclick = function () {
  createCard(document.getElementById("memo-input"))
}

function createCard(memoInput) {
  // inputの値が空でなければcard生成
  if (memoInput.value) {
    // card生成
    const card = document.createElement("div")
    card.textContent = memoInput.value

    // deleteButton生成
    const deleteButton = document.createElement("button")
    deleteButton.textContent = "削除"

    deleteButton.onclick = function () {
      deleteObj(card, deleteButton)
    }

    // htmlに追加
    card.append(deleteButton)
    memoContainer.append(card)

    // 終了処理(値の消去)
    memoInput.value = ""
  }
}

// 削除ボタン押下時の処理
function deleteObj(card, deleteButton) {
  // card と deleteButtonの削除
  card.remove()
  deleteButton.remove()
}
