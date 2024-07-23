import './style.css'
import Pho from './pho.jpg';

function home(){
    const content = document.querySelector("#content");
    const header = document.querySelector("header");
    const days = ['Sunday:', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

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

    const business = document.createElement('div');
    business.textContent = "Business hours";
    const businessHours = document.createElement('ul');
    businessHours.classList.add('list');
    business.classList.add('days');

    function appendDays(day){
        let li = document.createElement('li');
        li.textContent = day + " 8am-5pm";
        businessHours.appendChild(li);
    }
    days.forEach(appendDays);
    business.appendChild(businessHours);
    page_content.appendChild(business);

    content.appendChild(page_content);
    content.appendChild(footer)
    return content;

}


export default home;