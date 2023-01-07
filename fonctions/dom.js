const cards = Projet;
const cardContainer = document.querySelector("#card-container");
cards.forEach((card) => {
  const cardElement = `
          <div class="cards_item">
              <div class="card">
              <div class="card_content">
              <h2 class="card_title">${card.nom}</h2>
              <p class="card_text">${card.description}</p>
              <img src="${card.imageCardUrl}" alt="${card.imageCardUrl}"class="card_image">
              </div>
              </div>
          </div>
      `;
  cardContainer.innerHTML += cardElement;
});
