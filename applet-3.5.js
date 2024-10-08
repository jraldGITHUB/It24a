class LeafletMap {

    constructor(containerId, center, zoom) {
        this.map = L.map(containerId).setView(center, zoom);
        this.initTileLayer();

        this.attendanceCountSC = 0;
        this.attendanceCountBA = 0;
        this.attendanceCountLab = 0;
        this.attendanceCountTambayan = 0;
        this.attendanceCountClinic=0


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
        this.logCount3Element = document.getElementById('logCountClinic');
        this.logCount4Element = document.getElementById('logCounttambayan');

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

updateMarkerPopup(marker, message) {
    const count = this.markerCounts[message];
    marker.bindPopup(`${message}<br>Attendance logs: ${count}`).openPopup();
}

loadMarkersFromJson(url) {
    fetch(url)
    .then(response => response.json())
    .then(data => {
        data.forEach(marker => {
            this.addMarker(marker.latitude, marker.longitude, marker.message);
        });
    })
    .catch(error => console.error("Error Loading servers:", error));
}
clearLogs(){
    this.attendanceCountSC = 0;
    this.attendanceCountBA = 0;
    this.attendanceCountLab = 0;
    this.attendanceCountClinic = 0;
    this.attendanceCountTambayan = 0;

    this.loggedData = [];
    this.markerCounts = {}; 
    this.markers.forEach(marker => {
        const message = marker.getPopup().getContent().split('<br>')[0]; 
        this.markerCounts[message] = 0;
        this.updateMarkerPopup(marker, message); 
    });


}

displayLogCount() {      
    this.logCountElement.innerHTML = `SC Building Attendance: ${this.attendanceCountSC}`;
    this.logCount1Element.innerHTML = `BA Building Attendance: ${this.attendanceCountBA}`;
    this.logCount2Element.innerHTML = `CCS Laboratory Attendance: ${this.attendanceCountLab}`;
    this.logCount3Element.innerHTML = `Clinic Attendance: ${this.attendanceCountClinic}`;
    this.logCount4Element.innerHTML = `Tambayan Attendance: ${this.attendanceCountTambayan}`;
}
}   
