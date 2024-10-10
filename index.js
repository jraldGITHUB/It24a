class cardSearch {
    constructor(searchInputId, cardContainerClass) {
        this.searchInput = document.getElementById(searchInputId);
        this.cardContainer = document.querySelector(`.${cardContainerClass}`);
        this.cards = this.cardContainer.querySelectorAll('.card');
        this.init();
    }	    

     init() {
        this.searchInput.addEventListener('input', () => {
            this.filterCards(this.searchInput.value);
        });
    }
    filterCards(query) {
        const searchTerm = query.toLowerCase();

        this.cards.forEach(card => {
            const title = card.querySelector('.card-title').textContent.toLowerCase();
            const text = card.querySelector('.card-text').textContent.toLowerCase();

            if (title.includes(searchTerm) || text.includes(searchTerm)) {
                card.closest('.col-sm-4').style.display = '';
            } else {
                card.closest('.col-sm-4').style.display = 'none';
            }
        });
    }

}
