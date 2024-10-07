class leafLetMap{
    constructor(containerId, center, zoom){
        this.map = L.map(containerId).setView(center, zoom);
    }
}
