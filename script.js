document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();

  const firstName = e.target.children[0].value,
  lastName = e.target.children[1].value,
  country = e.target.children[2].value,
  score = e.target.children[3].value;
  if(firstName === "" || lastName === "" || country === "" || score === ""){
    const main = document.querySelector(".main_error-prompter");
    main.innerText = "All fields are required";
    console.log("ddd")
  }
  else{
  const scoreboardContainer = document.querySelector(".main_scoreboard-wrapper");
//   console.log(scoreboardContainer)
//   scoreboardContainer.classList.add("main-scoreboard");
  const scoreboard = document.createElement("div");
  scoreboard.innerHTML = `
     <div>
        <p class="main_player-name">${firstName} ${lastName}</p>
        <p class="main_time-stamp">${generateDateAndTime()}</p>
    </div>
    <p class="main_player-country">${country}</p>
        <p class="main_player-score">${score}</p>
        <div class="main_scoreboard-btn-container">
            <button>&#x1f5d1;</button>
            <button>+5</button>
            <button>-5</button>
    </div>
     `;
     scoreboardContainer.appendChild(scoreboard);
     sortBoard();
//   activateBtnEventListener();
  }
});
function generateDateAndTime() {
    const month = [
      "Jan",
      "Feb",
      "Mar",
      "April",
      "May",
      "June",
      "July",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    const date = new Date();
    let time = `${
      month[date.getMonth()]
    } ${date.getFullYear()}: ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()} `;
    console.log(time);
    return time;
} 
function sortBoard(){
    const main_score = document.querySelectorAll(".main_scoreboard");
    console.log(main_score);
    let arr = [];
    main_score.forEach((e) => arr.push(e));
    console.log(arr)
}

// function activateBtnEventListener() {
//   document.querySelectorAll(".main_scoreboard-btn-container").forEach((el) => {
//     el.addEventListener("click", (e) => {
//       let textContent = e.target.textContent;
//       console.log(textContent);
//       let scorePlayer = e.target.parentElement.parentElement.children[2];
//       console.log(scorePlayer);

//       if (textContent.length > 2) return;

//       console.log(e.target.parentElement.parentElement);
//       console.log("hi");

//       if (textContent === "🗑")
//         return e.target.parentElement.parentElement.remove();

//       scorePlayer.textContent =
//         parseInt(scorePlayer.textContent) + parseInt(textContent);

//       sortScoreBoard();
//     });
//   });
// }

// activateBtnEventListener();

// function sortScoreBoard() {
//   let scoreboardContainer = document.querySelector(".main_scoreboard-wrapper");

//   let scoreBoards = document.querySelectorAll(".main_scoreboard");

//   let elementsInArray = [];
//   scoreBoards.forEach((el) => elementsInArray.push(el));

//   console.log(elementsInArray);
//   let sortedElements = elementsInArray
//     .map((el) => {
//       return el;
//     })
//     .sort((a, b) => {
//       let numA = parseInt(a.children[2].textContent),
//         numB = parseInt(b.children[2].textContent);

//       if (numA > numB) return -1;
//       if (numA < numB) return 1;
//     });

//   sortedElements.forEach((el) => {
//     scoreboardContainer.append(el);
//   });
// }

