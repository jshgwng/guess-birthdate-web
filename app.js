const data = [
  [
    [1, 3, 5, 7],
    [9, 11, 13, 15],
    [17, 19, 21, 23],
    [25, 27, 29, 31],
  ],
  [
    [2, 3, 6, 7],
    [10, 11, 14, 15],
    [18, 19, 22, 23],
    [26, 27, 30, 31],
  ],
  [
    [4, 5, 6, 7],
    [12, 13, 14, 15],
    [20, 21, 22, 23],
    [26, 27, 30, 31],
  ],
  [
    [8, 9, 10, 11],
    [12, 13, 14, 15],
    [24, 25, 26, 27],
    [28, 29, 30, 31],
  ],
  [
    [16, 17, 18, 19],
    [20, 21, 22, 23],
    [24, 25, 26, 27],
    [28, 29, 30, 31],
  ],
];

// DOM Element variables
const titlePrompt = document.querySelector("#display-prompt");
const yesButton = document.querySelector("#yes-button");
const noButton = document.querySelector("#no-button");
const tableBody = document.querySelector("#table-body");
const startButton = document.querySelector("#start-button");
let answer = 0;
let count = 0;
// Create table
startButton.addEventListener("click", function(e){
  e.preventDefault();
  startButton.textContent = `Next`;
  if (count > 4) {
    startButton.textContent.add("d-none");
    titlePrompt.textContent = `Your birthdate is ${answer}`;
  } else {
    titlePrompt.textContent = `Is your birthdate in set ${count + 1}?`;
    tableBody.innerHTML = "";
    createTable(data[count]);
  }
})


yesButton.addEventListener("click", function (e) {
  switch (count) {
    case 0:
      answer += 1;
      count++;
      break;
    case 1:
      answer += 2;
      count++;
      break;
    case 2:
      answer += 4;
      count++;
      break;
    case 3:
      answer += 8;
      count++;
      break;
    case 4:
      answer += 16;
      count++;
      break;
  }
});

noButton.addEventListener("click", function (e) {
  e.preventDefault();
  count++;
})
function createTable(data) {
  for (let i = 0; i < data.length; i++) {
    let tr = "<tr>";
    for (let j = 0; j < data[i].length; j++) {
      tr += `<td>${data[i][j]}</td>`;
    }
    tr += "</tr>";
    tableBody.innerHTML += tr;
  }
}
