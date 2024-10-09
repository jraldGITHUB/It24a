class StudentList {
    
    constructor(dataUrl) {
        this.dataUrl = dataUrl;
        this.students = [];
        this.init();
    }
    async init() {
        await this.fetchData();
        this.renderStudentList(this.students); 
        this.bindSearchEvent();
    }

}

