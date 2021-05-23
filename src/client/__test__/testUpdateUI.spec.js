import { updateUI } from "../js/updateUI.js"

describe("Updating UI Testing ", () => {
  
    test(" Testing updateUI Fn ", () => {
        
        //enable us manipulate DOM else innerHTML would give an error
        document.body.innerHTML = `<div id = "results"></div>`
        
        const retData = { confidence: "100",score_tag: "P", subjectivity: "SUBJECTIVE", irony: "NONIRONIC", agreement: "DISAGREEMENT" };
        const resultsElem = document.getElementById('results');
        
        updateUI(resultsElem, retData);

        const recievedValue = resultsElem.innerHTML;
        const expectedValue = `<br><strong>Confidence: </strong>100<br><br>
        <strong>Score tag: </strong>P<br><br>
        <strong>Subjectivity: </strong>SUBJECTIVE<br><br>
        <strong>Irony: </strong>NONIRONIC<br><br>
        <strong>Agreement: </strong>DISAGREEMENT`

        // ignore the formatter of the string
        expect(recievedValue.replace(/\s/g, '')).toEqual(expectedValue.replace(/\s/g, ''))
      

    });
});
