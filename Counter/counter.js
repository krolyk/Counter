// document.getElementById("count-element").innerText=4 
let countEl = document.getElementById("count-element")
let count = 0

function increment() {
    count = count + 1
    countEl.textContent=count
    console.log(count)
}

let saveEl = document.getElementById("save-element")

function save() {
    let scount = count + " - " 
    saveEl.textContent += scount
    console.log(scount)
    countEl.textContent=0
    count = 0
}





