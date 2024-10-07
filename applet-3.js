class DataLogger{

    constructor(buttonId, cardContainerId, clearButtonId, logCountId){
        this.logButton = document.getElementById(buttonId);
        this.clearButton = document.getElementById(clearButtonId);
        this.idContainer = document.getElementById(cardContainerId);
        this.logCountElement = document.getElementById(logCountId);
        this.loggedData = [];

       
        this.logButton = addEventListener('click', () => this.logData());
        this.clearButton = addEventListener('click', () => this.clearLogs());



    }
    logData(){
        const time = new Date().toLocaleDateString();
        this.loggedData.push(time);
    }
    clearLogs(){
        this.loggedData = []; 
        this.updateCardContainer();
    }
    updateCardContainer(){

        this.idContainer.innerHTML = '';

        this.loggedData.forEach(data => {       
            const card = document.createElement('div');
            card.className = 'card mb-2';
            card.innerHTML = `
                <div class="card-body">
                    <h5 class="card-title">Logged Data</h5>
                    <p class="card-text">${data}</p>
                </div>
            `;
            this.idContainer.appendChild(card);
        });

        this.displayLogCount();
        
    }
    countLogs(){
        return this.loggedData.length;
      }
      displayLogCount() {
        const logCount = this.countLogs();
        this.logCountElement.innerHTML = `<p>Total Logs: ${logCount}</p>`; 
    }
}