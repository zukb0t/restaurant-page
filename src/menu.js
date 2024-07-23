import './style.css'

function menu(){

    const content = document.querySelector("#content");
    const mainMenu = ['pho-dac-biet','chicken-pho','beef pho'];
    const size = ['small: $7.50','medium: $10.00','large: $12.50','x-large: $15.00'];

    const header = document.createElement('div');
    header.classList.add('title');
    header.textContent = "Menu";

    //parent
    const menu = document.createElement('div'); //parent
    menu.classList.add('dishes');

    //child
    const foodTitle = document.createElement('div');
    foodTitle.textContent = "Food for thought";
    const entrees = document.createElement('ul');
    entrees.classList.add('list');
    mainMenu.forEach((entree) => {
        let li = document.createElement('li');
        li.textContent = entree;
        entrees.appendChild(li);
    })
    foodTitle.appendChild(entrees);
    menu.appendChild(foodTitle);

    const priceSize = document.createElement('div');
    priceSize.textContent = "Pricing of each size";
    const prices = document.createElement('ul');
    prices.classList.add('list')
    size.forEach((pricing) => {
        let li = document.createElement('li');
        li.textContent = pricing;
        prices.appendChild(li);
    })
    priceSize.appendChild(prices);
    menu.appendChild(priceSize);





    content.appendChild(header);
    content.appendChild(menu);
    return content;

}

export default menu;