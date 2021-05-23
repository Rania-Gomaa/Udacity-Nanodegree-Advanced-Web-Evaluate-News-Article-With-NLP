import { validateURL } from './urlChecker'
import {updateUI} from './updateUI'


const postData = async (url = "", data = {}) => {

    const response = await fetch(url, {
        method: "POST",
        credentials: "same-origin",
        headers: {"Content-Type": "application/json"
        },
        body: JSON.stringify(data),
    })
    .then(res => res.json())
    .then(function(res) {
        let displayResults = document.getElementById('results');
        updateUI(displayResults, res);
    })
} 


// check if input url is valid

const submitAction =  (evt) => {
//function submitAction(evt) {
    evt.preventDefault() //prevent default action of reloading 
    document.getElementById("results").innerHTML = ""  //clear the UI
    const inputURL = document.getElementById('name').value
    if(validateURL(inputURL)){
        const retData = postData('http://localhost:8081/userURL', {inputURL})
           
    }else{
        alert("Enter a valid URL")
    }


}





export { submitAction }
