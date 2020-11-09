const api = `https://api.punkapi.com/v2/beers/random`;
const randomBtn = document.querySelector ("random")
const card = document.querySelector ("randomCard")

function getData(url, callback) {  // hämtar api och gör om till json
    fetch(url)
    .then(res => res.json())
    .then(data => {
    // console.log(data)
    // callback(data);
    })
    .catch(error => console.log(error));
}

randomBtn.addEventListener('click', randomClick);

function randomClick(data) {
    
    const ulElement = document.createElement('div');
 
    for (let i = 0; i < data.length; i++) {
       
        const beer = data[i];
        const liElement = document.createElement('h2');
        liElement.setAttribute('name', beer.id)
        liElement.textContent = beer.name;
 
        ulElement.appendChild(liElement); 
        
    }
    
    sectionElement.appendChild(ulElement);
    card.appendChild(ulElement)
}