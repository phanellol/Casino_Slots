const mainContainer = document.querySelector("#mainContainer");

const balanceContainer = document.querySelector(".balanceContainer");

let userBalance = 0;

const userBalanceButton = document.createElement("button");
userBalanceButton.classList.add("userBalanceButton");
userBalanceButton.textContent = `Current Balance: ${userBalance}`
balanceContainer.appendChild(userBalanceButton);

const gameplayPlace = document.createElement("div");
gameplayPlace.classList.add("gameplayPlace");
mainContainer.appendChild(gameplayPlace);

const mainPlayIconsContainer = document.createElement("div");
mainPlayIconsContainer.classList.add("mainPlayIconsContainer");
gameplayPlace.appendChild(mainPlayIconsContainer);

const playIconLeft = document.createElement("div");
playIconLeft.classList.add("playIconLeft");
playIconLeft.classList.add("playIcon");
mainPlayIconsContainer.appendChild(playIconLeft);

const playIconCenter = document.createElement("div");
playIconCenter.classList.add("playIconCenter");
playIconCenter.classList.add("playIcon");
mainPlayIconsContainer.appendChild(playIconCenter);

const playIconRight = document.createElement("div");
playIconRight.classList.add("playIconRight");
playIconRight.classList.add("playIcon");
mainPlayIconsContainer.appendChild(playIconRight);

const playButtonContainer = document.createElement("div");
playButtonContainer.classList.add("playButtonContainer");
mainContainer.appendChild(playButtonContainer);

const playButton = document.createElement("button");
playButton.classList.add("playButton");
playButton.textContent = "ROLL";
playButtonContainer.appendChild(playButton);