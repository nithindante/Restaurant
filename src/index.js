import './style.css';
import {pageLoad} from './mainPage'
import { menuPage } from './menuPage';
import {contactPage} from './contactPage'
pageLoad();

let buttons = document.querySelectorAll('button')
for (let i = 0; i < buttons.length; i++) {
   buttons[i].addEventListener('click',function () {
    let content = document.querySelector('#content')
    if(buttons[i].textContent=='Menu')
    {
        content.innerHTML='';
        menuPage();
    }
    else if(buttons[i].textContent=='Contact Me')
    {
        content.innerHTML='';
        contactPage();
    }
    else if(buttons[i].textContent=='Home')
    {
        content.innerHTML='';
        pageLoad();
    }
   })
    
}

