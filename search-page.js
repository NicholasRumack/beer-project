const api = 'https://api.punkapi.com/v2/beers';
const formElement = document.querySelector('form');
const sectionElement = document.getElementById('searchresults');
const first = document.querySelector(".first");
const previous = document.querySelector(".previous");
const next = document.querySelector(".next");

let number = 1;

formElement.addEventListener('submit', onSubmit);

next.addEventListener('click', () => {
    number == number.length < 1 ? (number = 1) : (number += 1);
    //number.length ska såklart vara antalet li
    
    for (let i = number; i < number + 1; i++){
        
        console.log(number);
    }
});
 
function onSubmit(evt) {
    
    const searchStr = evt.target[0].value;

    url = `${api}?beer_name=${searchStr}&page=${number}&per_page=10`;
 
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
 
        ulElement.appendChild(liElement); 
        
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