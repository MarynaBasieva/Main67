// part 1
let arr1 = ["1", "2", "3", "4", "5"];
let el = document.getElementById("forOf");
for (const i of arr1) {
  let p = document.createElement("p");
  p.innerText = i;
  p.style.backgroundColor = "green";
  el.appendChild(p);
}
// part2
let arr2 = ["hello", "hi", "first", "second", "third", "fourth", "fifth"];
let el2 = document.getElementById("forIn");
for (const i in arr2) {
  let p = document.createElement("p");
  p.innerHTML = i;
  p.style.backgroundColor = "red";
  el2.appendChild(p);
}
// part 3
let arr3 = ["one", "two", "three", "four", "five"];
let el3 = document.getElementById("for");
console.log(el3);
for (let i = 0; i < arr3.length; i++) {
  let p = document.createElement("p");
  p.innerHTML = arr3[i];
  p.style.backgroundColor = "yellow";
  el3.appendChild(p);
  if (i === arr3.length - 1) {
    let p = document.createElement("p");
    p.innerText = "довжина масива " + arr3.length;
    p.style.backgroundColor = "aqua";
    el3.appendChild(p);
  }
}
