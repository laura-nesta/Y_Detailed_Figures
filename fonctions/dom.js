const cardContent = document.querySelector(".card_title");
const cardText = document.querySelector(".card_text");

for (i = 0; i <= 10; i++) {
  cardContent.innerHTML = Projet[0].nom;
  cardText.innerHTML = Projet[0].description;
}
