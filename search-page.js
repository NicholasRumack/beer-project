const api = 'https://api.punkapi.com/v2/beers';
const formElement = document.querySelector('form');
const sectionElement = document.getElementById('searchresults');
const first = document.querySelector(".first");
const previous = document.querySelector(".previous");
const next = document.querySelector(".next");
let searchStr;
let nextUrl;

let number = 1;

formElement.addEventListener('submit', onSubmit);

next.addEventListener('click', () => {

   removeAllChildNodes(sectionElement);

    number == number.length < 1 ? (number = 1) : (number += 1);

    nextUrl = `${api}?beer_name=${searchStr}&page=${number}&per_page=10`
    getData(nextUrl,renderFirstBeer);
});

previous.addEventListener('click', () => {

    removeAllChildNodes(sectionElement);
 
     number == number.length < 1 ? (number = 1) : (number -= 1);
 
     nextUrl = `${api}?beer_name=${searchStr}&page=${number}&per_page=10`
     getData(nextUrl,renderFirstBeer);
 });

 /*till listan*/
function onSubmit(evt) {
    
    searchStr = evt.target[0].value;

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

 /*Lista*/
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
    ulElement.addEventListener("click",infoPage);
}
 
/*Länkar till infosidan*/
function infoPage(evt) {
    const id = evt.target.getAttribute('name');
    const url = `info-page.html?name=${id}`;
    document.location.href=url 
}
