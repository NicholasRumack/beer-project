const api = `https://api.punkapi.com/v2/beers`;
const searchParams = new URLSearchParams(window.location.search);
const randomBtn = document.querySelector (".random")
const card = document.querySelector (".randomCard")

function removeAllChildNodes(parent) {
    
    while (parent.firstChild) {      
        parent.removeChild(parent.firstChild);
    }
}

function getData(url, callback) {  // hämtar api och gör om till json
    fetch(url)
    .then(res => res.json())
    .then(data => {

     callback(data);
    })
    .catch(error => console.log(error));
}

randomBtn.addEventListener('click', clickRandom);

function  clickRandom(evt) {
const url = `${api}/random`;

removeAllChildNodes(card)

getData(url, infoCard)

evt.preventDefault();
}

function infoCard (data) {
    const beer = data [0] 
    h2Element = document.createElement("h2")
    pElement = document.createElement("p")

    beerImg = new Image (54.4, 212.2);
    beerImg.src = beer.image_url;
    
    h2Element.textContent = beer.name
    pElement.setAttribute(`name`,beer.id)
    pElement.textContent = "See more info "

    card.appendChild(h2Element)
    card.appendChild(pElement)
    card.appendChild(beerImg)

    card.classList.remove("hidden");
}

function infoPage (evt) {
    const id = evt.target.getAttribute("name");
    const url = `info-page.html?name=${id}`;
    document.location.href=url 
}