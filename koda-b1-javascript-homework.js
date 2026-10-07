// While loop to print a triangle pattern
let i = 1;
console.log(`While loop Triangle \n`);
while (i <= 6) {
  let star = "*".repeat(i * 2 - 1);
  let space = " ".repeat(6 - i);
  console.log(space + star);
  i++;
}

// For loop to print a triangle pattern
console.log("\nFor loop Triangle \n");
for (let j = 1; j <= 6; j++) {
  let space = "";
  for (let k = 6; k > j; k--) {
    space += " ";
  }

  let star = "";
  for (let l = 1; l <= j * 2 - 1; l++) {
    star += "*";
  }
  console.log(space + star);
}

//Do While
console.log("\nDo While Triangle \n");
let z = 1;
do {
  let space = "";
  let w = 7;
  do {
    space += " ";
    w--;
  } while (w > z);

  let y = 1;
  let star = "";
  do {
    star += "*";
    y++;
  } while (y <= z * 2 - 1);

  console.log(space + star);
  z++;
} while (z <= 6);
