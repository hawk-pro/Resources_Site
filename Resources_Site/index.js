
let saveEl=document.getElementById("prin-el");
let countEl=document.getElementById("count-el");


console.log(countEl)
console.log(saveEl)
// let firstBatch=5
// let secondBatch=7
let count=0
// let count=firstBatch+secondBatch
// console.log(count)
function increment(){
    // console.log("The button was clicked")
count+=1
countEl.textContent=count
}
function save(){

    
    let countStr=count+" - ";
    console.log(countStr);
    saveEl.textContent+=countStr;

}