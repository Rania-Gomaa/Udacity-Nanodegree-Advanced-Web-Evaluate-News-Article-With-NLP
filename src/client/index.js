import { submitAction } from './js/formHandler'
import img from './background.jpeg';
import './styles/resets.scss'
import './styles/base.scss'
import './styles/form.scss'
import './styles/footer.scss'
import './styles/header.scss'


const submitBtn = document.getElementById('submitbtn')
submitBtn.addEventListener('click', (evt) => {
    
    submitAction(evt)
})


export{
    
    submitAction
}
