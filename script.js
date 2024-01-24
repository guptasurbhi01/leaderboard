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
  const scoreboard = document.createElement("div");
  scoreboard.classList.add("main_scoreboard");
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
  activateBtnEventListener();
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
function sortBoard() {
  const main_score = document.querySelectorAll(".main_scoreboard");
  const scoreboardContainer = document.querySelector(
    ".main_scoreboard-wrapper"
  );

  let sortedElements = Array.from(main_score).sort((a, b) => {
    const scoreA = parseInt(a.querySelector(".main_player-score").innerText);
    const scoreB = parseInt(b.querySelector(".main_player-score").innerText);

    return scoreB - scoreA; 
  });

  scoreboardContainer.innerHTML = "";

  sortedElements.forEach((element) => {
    scoreboardContainer.appendChild(element);
  });
}


function activateBtnEventListener() {
  document.querySelectorAll(".main_scoreboard-btn-container").forEach((el) => {
    el.addEventListener("click", (e) => {
      let textContent = e.target.textContent;
      console.log(textContent);
      let scorePlayer = e.target.parentElement.parentElement.children[2];
      console.log(scorePlayer);

      if (textContent.length > 2) return;

      console.log(e.target.parentElement.parentElement);
      console.log("hi");

      if (textContent === "🗑")
        return e.target.parentElement.parentElement.remove();

      scorePlayer.textContent =
        parseInt(scorePlayer.textContent) + parseInt(textContent);

      sortBoard();
    });
  });
}

activateBtnEventListener();

