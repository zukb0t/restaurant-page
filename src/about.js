import './style.css'
import Gif from './infernalcape.gif';

function about(){

    const content = document.querySelector("#content");

    const about = document.createElement('div');
    about.classList.add('title');
    about.textContent = "About";

    const text = document.createElement('p');
    text.classList.add('shorttext');
    text.textContent = "If you managed to get to this part, then that means the logic is working properly and congratulations, you made it. Enjoy this image.";
    
    const gif = document.createElement('img');
    gif.classList.add('center');
    gif.src = Gif;

    content.appendChild(about);
    content.appendChild(text);
    content.appendChild(gif);
    return content;

}

export default about;