class LeafletMap {

    constructor(containerId, center, zoom) {
        this.map = L.map(containerId).setView(center, zoom);
        this.initTileLayer();

        this.attendanceCountSC = 0;
        this.attendanceCountBA = 0;
        this.attendanceCountLab = 0;
        this.attendanceCountLab2 = 0;


        this.markerCounts = {};
        this.markers = [];

        this.loggedData = []; 

        this.btn = document.getElementById('btn');
        this.btn1 = document.getElementById('btn1');
        this.btn2 = document.getElementById('btn2');
        this.btn3 = document.getElementById('btn3'); 
        this.btnclear = document.getElementById('btnclear');
        this.logCountElement = document.getElementById('logCountlab');
        this.logCount1Element = document.getElementById('logCountBA');
        this.logCount2Element = document.getElementById('logCountSc');
        this.logCountLab2Element = document.getElementById('logCountClinic');
        this.logCountLab3Element = document.getElementById('logCounttambayan');

        this.idContainer = document.getElementById('logContainer');

        this.btn.addEventListener('click', () => this.dataSc());
        this.btn1.addEventListener('click', () => this.dataLab());
        this.btn2.addEventListener('click', () => this.dataBA());
        this.btn3.addEventListener('click', () => this.dataClinic());
        this.btn4.addEventListener('click', () => this.datatambayan());
        this.btnclear.addEventListener('click', () => this.clearLogs());
    }

initTileLayer() {
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors | Sample for new corales BSIT student'
    }).addTo(this.map);
}

addMarker(lat, long, message){
    const marker = L.marker([lat, long]).addTo(this.map)
    this.markerCounts[message] = (this.markerCounts[message] || 0) + 1;
    this.updateMarkerPopup(marker, message);
    this.markers.push(marker);
}
}   
