const adviceNum = document.getElementById("num");
const adviceContainer = document.getElementById("advice");
const adviceBtn = document.getElementById("next-advice-btn");

async function adviceAPI() {
  const response = await fetch("https://api.adviceslip.com/advice");
  const adviceSlip = await response.json();
  const adviceID = adviceSlip.slip.id;
  const pieceofAdvice = adviceSlip.slip.advice;

//  console.log(adviceSlip);
//  console.log(adviceID);
//  console.log(pieceofAdvice);

 adviceNum.innerText = adviceID;
 adviceContainer.innerText = `"${pieceofAdvice}"`
};


adviceBtn.addEventListener("click", () => {
    adviceAPI();
  });


