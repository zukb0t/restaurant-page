import home from './home.js';
import menu from './menu.js';
import about from './about.js';

function clearContent(){
    const test = document.querySelector("#content").innerHTML = "";
}

const home_button = document.querySelector(".Home");
home_button.addEventListener("click",function(){
    clearContent();
    document.body.appendChild(home());
});

const menu_button = document.querySelector(".Menu");
menu_button.addEventListener("click",function(){
    clearContent();
    document.body.appendChild(menu());
});

const about_button = document.querySelector(".About");
about_button.addEventListener("click", function(){
    clearContent();
    document.body.appendChild(about());
});



document.body.appendChild(home());