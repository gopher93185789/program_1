function getRandomNumber(x, y) {
  return Math.round(Math.random() * (y - x) + x);
}

function incMap(map, k) {
  let valn = map.get(k); // val, _ := map[T any] in go
  if (!valn) {
    valn = 0;
  }

  valn += 1;
  map.set(k, valn); // map[T any] = val
}

function getPercentage(map, k, total) {
  const val = map.get(k);
  if (!val) {
    return 0;
  }
  return (val / total) * 100;
}

function createDiv(i, percentage, out){
    const newDiv = document.createElement("div");
    newDiv.className = "my-div";
    newDiv.style.width = `${3 * percentage}px`;
   
    out.appendChild(newDiv);

    const child = document.createElement("div");
    child.className = "text-in-div";

    let ps = Math.round(percentage);
    if (ps === 0){
      child.textContent = `${ps}%`;
    }else{
       child.textContent = `${i}: ${ps}%`;
    }

   
    newDiv.appendChild(child);
}


function main(totalRolls) {
  const resultDiv = document.getElementById("result");
  resultDiv.innerHTML = "";
  const map1 = new Map();

  for (let i = 0; i < totalRolls; i++) {
    let num = getRandomNumber(1, 6);
    incMap(map1, num);
  }


  const out = document.createElement("div");
  out.className = "container";
  document.getElementById("result").appendChild(out);

  for (let i = 0; i < 7; i++) {
    if (i == 0) {
      continue;
    }

    const percentage = getPercentage(map1, i, totalRolls);
    createDiv(i, percentage, out)
  }
}



document.getElementById("roller").addEventListener("submit", function(event) {
    event.preventDefault();
    const totalRolls = parseInt(document.getElementById("numrolls").value, 10); // Get the number of rolls
    main(totalRolls); 
});
