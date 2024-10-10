class cardSearch {
    constructor(searchInputId, cardContainerClass) {
        this.searchInput = document.getElementById(searchInputId);
        this.cardContainer = document.querySelector(`.${cardContainerClass}`);
        this.cards = this.cardContainer.querySelectorAll('.card');
    }
}