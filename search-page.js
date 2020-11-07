const api = 'https://api.punkapi.com/v2/beers';
const formElement = document.querySelector('form');
const sectionElement = document.getElementById('searchresults');
const first = document.querySelector(".first");
const previous = document.querySelector(".previous");
const next = document.querySelector(".next");

const page = "&page=" + pageValue;
let pageValue = 1;

formElement.addEventListener('submit', onSubmit);


function onSubmit(evt) {
    
    const searchStr = evt.target[0].value;
    const url = `${api}?beer_name=${searchStr}${page}&per_page=10`;
    //const url = api + "?beer_name" + searchStr; 
    //samma syntax som raden ovan

    getData(url, renderFirstBeer);
    evt.preventDefault();
    removeAllChildNodes(sectionElement);
    console.log(url);
}

function removeAllChildNodes(parent) {
    
    while (parent.firstChild) {      
        parent.removeChild(parent.firstChild);
    }
}

function getData(url, callback) {
    fetch(url)
    .then(res => res.json())
    .then(data => {
        callback(data);
    })
    .catch(error => console.log(error));
    
}

function renderFirstBeer(data) {
    
    const ulElement = document.createElement('ul');

    for (let i = 0; i < data.length; i++) {
       
        const beer = data[i];
        const liElement = document.createElement('li');
        liElement.setAttribute('name', beer.id)
        liElement.textContent = beer.name;

        ulElement.appendChild(liElement); //lägger li i ul med appendchild
        
    }
    
    sectionElement.appendChild(ulElement);

}

/*
function onUlClicked(evt) {
    
    const id = evt.target.getAttribute('name');

    const url = `./myView.html?name=${id}`;
    document.location.href = url;
}
*/