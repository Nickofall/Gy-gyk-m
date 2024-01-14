
document.addEventListener('DOMContentLoaded', function () {
    let app = new JSApp();
    app.init();
});

class JSApp {
    constructor() {
        this.jsmeApplet = null;
        this.compoundSelect = document.getElementById('compound-select');
        this.submitBtn = document.getElementById('submit-btn');
        this.feedbackDiv = document.getElementById('feedback');
    }

    init() {
        this.jsmeApplet = new JSApplet.JSME("jsme_container", "400px", "400px");
        this.addEventListeners();
    }

    addEventListeners() {
        this.submitBtn.addEventListener('click', () => this.checkCompoundStructure());
    }

    checkCompoundStructure() {
        let selectedCompound = this.compoundSelect.value;
        let userDrawnStructure = this.jsmeApplet.smiles();
        if (this.validateStructure(selectedCompound, userDrawnStructure)) {
            this.feedbackDiv.textContent = 'Correct Structure!';
            this.feedbackDiv.style.color = 'green';
        } else {
            this.feedbackDiv.textContent = 'Incorrect Structure. Try Again!';
            this.feedbackDiv.style.color = 'red';
        }
    }

    validateStructure(compound, drawnStructure) {
        const validStructures = {
            'H2O': 'O',
            'CO2': 'O=C=O',
            'CH4': 'C'
            // Add more structures here.
        };
        return validStructures[compound] === drawnStructure;
    }
}
