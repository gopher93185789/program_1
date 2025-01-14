function stripChar(string, delim) {
  let container = "";
  for (let char of string) {
    if (char != delim) {
      container += char;
    }
  }
  return container;
}

function getNums(str) {
  let s = str.split(",");
  let x = [];

  for (let i = 0; i < s.length; i++) {
    let num = parseInt(s[i]);
    if (!isNaN(num)) {
      x.push(num);
    }
  }
  return x
}

function average(nums){
  let sum = 0;
  for (let i = 0; i < nums.length; i++){
    sum += nums[i];
  }
  return sum / nums.length;
}


function main() {
  let str =  " "
  let strippedStr = stripChar(str, " ");
  let nums = getNums(strippedStr);
  console.log(`
    aantal getallen:  ${nums.length}
    hoogste getal:    ${Math.max(...nums)}
    laagste getal:    ${Math.min(...nums)}
    gemiddelde:       ${average(nums)}
  `);
}

main();
