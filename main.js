let name1 = prompt("What is the name of person number one?")
let name2 = prompt("What is the name of person number two?")
let name3 = prompt("What is the name of person number three?")


let x = name1.length;
let y = name2.length;
let z = name3.length;


if ((x > y) && (x > z)) {
  console.log(`${name1} has the longest name.`);
} else if ((y > x) && (y > z)) {
  console.log(`${name2} has the longest name.`);
} else if ((z > x) && (z > y)) {
  console.log(`${name3} has the longest name.`);
}



if ((x === y) && (x > z)) {
  console.log(`${name1} and ${name2} tie for the longest name.`);
} else if ((y === z) && (y > x)) {
  console.log(`${name2} and ${name3} tie for the longest name.`);
} else if ((z === x) && (z > y)) {
  console.log(`${name1} and ${name3} tie for the longest name.`);
}


if ((x === y) && (x === z)) {
  console.log(`${name1}, ${name2}, and ${name3} all tie for the longest name.`);
}
