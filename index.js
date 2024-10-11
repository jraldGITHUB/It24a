class CardSearch {
    constructor(searchInputId, cardContainerClass) {
        this.searchInput = document.getElementById(searchInputId);
        this.cardContainer = document.querySelector(`.${cardContainerClass}`);
        this.cards = this.cardContainer.querySelectorAll('.col-md-4');
        this.init();
    }

    init() {
        this.searchInput.addEventListener('input', () => {
            this.filterCards(this.searchInput.value);
        });
    }

    filterCards(query) {
        const searchTerm = query.toLowerCase();

        this.cards.forEach(cardContainer => {
            const card = cardContainer.querySelector('.card');
            const title = card.querySelector('.card-title').textContent.toLowerCase();
            const text = card.querySelector('.card-text').textContent.toLowerCase();

            if (title.includes(searchTerm) || text.includes(searchTerm)) {
                cardContainer.style.display = ''; 
            } else {
                cardContainer.style.display = 'none'; 
            }
        });
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new CardSearch('Cardsearch', 'container')
});
