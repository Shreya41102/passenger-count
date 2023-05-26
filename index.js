//document.getElementById("count").innerText = 5
// let myAge = 20
// console.log(myAge)
//to comment altogether press ctrl + k +c 
// let firstBatch = 5
// let secondBatch = 7
// let count = firstBatch + secondBatch
//  console.log(count)

// HOW TO MAKE THAT BUTTON WORK 

let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0

function increment() {
    count += 1
    countEl.textContent = count
}

function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    countEl.textContent = 0
    count = 0
}



