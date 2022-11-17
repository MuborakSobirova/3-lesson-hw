const plus = document.querySelector(".plus")
const plus1 = document.querySelector(".plus1")
const count = document.querySelector(".count")
const quantity = document.querySelector(".quantity")
const cancel = document.querySelector(".cancel")

let sum = 0;
let idf = 0;

plus.addEventListener("click", () => {
  sum += 7
  idf += 1

  count.innerHTML = "К оплате:" + " $" + sum
  quantity.innerHTML = "Количество книг: "  + idf
})

plus1.addEventListener("click", () => {
    sum += 5
    idf += 1
  
    count.innerHTML = "К оплате:" + " $" + sum
    quantity.innerHTML = "Количество книг: " + idf
  })


  cancel.addEventListener("click", () => {
    count.innerHTML = "К оплате:";
    quantity.innerHTML = "Количество книг:";
  })