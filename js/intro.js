var nextBtnEl = document.querySelector(".next");
var backBtnEl = document.querySelector(".back");
var transitionEl = document.querySelector(".transition");
var infoEl = document.querySelector(".content-info");
var introEl = document.querySelector(".content-intro");


function showInfoEl() {
  infoEl.className = "content-info";
  introEl.className = "content-intro hidden";
}

function showIntroEl() {
  infoEl.className = "content-info hidden";
  introEl.className = "content-intro";
}

function resetTransition() {
  transitionEl.className = "transition";
}

function transitionInfo() {
  transitionEl.className = "transition animate";
  
  setTimeout(showInfoEl, 1300);
  setTimeout(resetTransition, 3000);
}

function transitionIntro() {
  transitionEl.className = "transition animate";
  
  setTimeout(showIntroEl, 1300);
  setTimeout(resetTransition, 3000);
}

nextBtnEl.addEventListener("click", transitionInfo, false);
backBtnEl.addEventListener("click", transitionIntro, false);

