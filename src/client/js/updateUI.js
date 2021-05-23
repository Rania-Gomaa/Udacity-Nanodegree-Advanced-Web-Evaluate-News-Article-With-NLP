//use the returned data after article analysis to update the UI with the following values

function updateUI(resultsElem, retData) {
    
    resultsElem.innerHTML = `<br><strong>Confidence: </strong>${retData.confidence}<br><br>
                        <strong>Score tag: </strong>${retData.score_tag}<br><br>
                        <strong>Subjectivity: </strong>${retData.subjectivity}<br><br>
                        <strong>Irony: </strong>${retData.irony}<br><br>
                        <strong>Agreement: </strong>${retData.agreement}`; 
    
}

export { updateUI };