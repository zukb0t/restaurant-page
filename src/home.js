import './style.css'
import Pho from './pho.jpg';

function home(){
    const content = document.querySelector("#content");
    const header = document.querySelector("header");

    const page_header = document.createElement("div");
    page_header.classList.add("title");
    page_header.textContent = "Homepage";
    header.appendChild(page_header);

    const page_content = document.createElement("div");
    page_content.classList.add("middle");
    const content_one = document.createElement("div");
    content_one.classList.add("description");
    content_one.textContent = "Caught a cold? Need a quick lunch before work? Well come on down to our restaurant, where we serve some of the greatest pho. Loved by many, we try our best to ensure your experiences are fufilled with our welcoming atmosphere!";
    page_content.appendChild(content_one);

    const pho_one = document.createElement('img');
    pho_one.classList.add("image");
    pho_one.src = Pho;
    page_content.appendChild(pho_one);

    
    








    content.appendChild(page_content);
    content.appendChild(footer)
    return content;

}


export default home;