let btnNext = document.getElementById("btn-next");
let btnBack = document.getElementById("btn-back");
let cards = document.querySelectorAll(".card");
let currentCard = 0;

function hideSelectCard() {
  let cardSelect = document.querySelector(".select");
  cardSelect.classList.remove("select");
}

function showCard(cardIndex) {
  cards[cardIndex].classList.add("select");
}

btnNext.addEventListener("click", function () {
  if (currentCard === cards.length - 1) return;

  hideSelectCard();

  currentCard++;
  showCard(currentCard);
});

btnBack.addEventListener("click", function () {
  if (currentCard === 0) return;

  hideSelectCard();

  currentCard--;
  showCard(currentCard);
});
