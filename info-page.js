const api = 'https://api.punkapi.com/v2/beers';
const detailsElement = document.querySelector('section.beerInfoGrid');
const searchParams = new URLSearchParams(window.location.search);
const id = searchParams.get('name');
const url = `${api}/${id}`;

getData(url, getBeerInfo)

function getData(url, callback) {
    
    fetch(url)
    .then(res => res.json())
    .then(data => {
        callback(data);
    })
    .catch(error => console.log(error));
    
}

function getBeerInfo(data) {
    const beer = data[0];
    let str = beer.name;

    const divElement = document.createElement('div');
    const pElement = document.createElement('p');
    pElement.innerText = str;

    const image = "" + beer.image_url;
    const abv = "Alcohol by volume: " + beer.abv;
    const volume = "Volume: " + beer.volume;
    const hops = "Hops: " + beer.hops;
    const description = "Description: " + beer.description;
    const ingredients = "Ingredients: " + beer.ingredients;
    const food_pairing = "Food pairing: " + beer.food_pairing;
    const brewers_tips = "Brewers tips: " + beer.brewers_tips;

    const imgTagbeerImg  = document.createElement('img');
    const h2Tag  = document.createElement('h2');
    const pTagAlcoholeByVolume  = document.createElement('p');
    const pTagVolume  = document.createElement('p');
    const pTagHops  = document.createElement('p');
    const pTagDescription  = document.createElement('p');
    const pTagIngredients  = document.createElement('p');
    const pTagFoodPairing  = document.createElement('p');
    const pTagBrewersTips  = document.createElement('p');

    const image_urlNode = document.createTextNode(image);
    const h2Node = document.createTextNode(str);
    const pAlcoholeByVolumeNode = document.createTextNode(abv);
    const pVolumeNode = document.createTextNode(volume);
    const pHopsNode = document.createTextNode(hops);
    const pDescriptionNode = document.createTextNode(description);
    const pIngredientsNode = document.createTextNode(ingredients);
    const pFoodPairingNode = document.createTextNode(food_pairing);
    const pBrewersTipsNode = document.createTextNode(brewers_tips);

    imgTagbeerImg.appendChild(image_urlNode);
    h2Tag.appendChild(h2Node);
    pTagAlcoholeByVolume.appendChild(pAlcoholeByVolumeNode);
    pTagVolume.appendChild(pVolumeNode);
    pTagHops.appendChild(pHopsNode);
    pTagDescription.appendChild(pDescriptionNode);
    pTagIngredients.appendChild(pIngredientsNode);
    pTagFoodPairing.appendChild(pFoodPairingNode);
    pTagBrewersTips.appendChild(pBrewersTipsNode);

    const divBeerImg = document.createElement('div');
    divBeerImg.classList.add('beerImg');
    const divBeerName = document.createElement('div');
    divBeerName.classList.add('beerName');
    const divAlcoholByVolume = document.createElement('div');
    divAlcoholByVolume.classList.add('alcoholByVolume');
    const divVolume = document.createElement('div');
    divVolume.classList.add('volume');
    const divHops = document.createElement('div');
    divHops.classList.add('hops');
    const divBeerDesc = document.createElement('div');
    divBeerDesc.classList.add('beerDesc');
    const divBeerInfo = document.createElement('div');
    divBeerInfo.classList.add('beerInfo');
    const divfoodPairing = document.createElement('div');
    divfoodPairing.classList.add('foodPairing');
    const divBrewersTips = document.createElement('div');
    divBrewersTips.classList.add('brewersTips');

    divBeerImg.appendChild(imgTagbeerImg);
    divBeerName.appendChild(h2Tag);
    divAlcoholByVolume.appendChild(pTagAlcoholeByVolume);
    divVolume.appendChild(pTagVolume);
    divHops.appendChild(pTagHops);
    divBeerDesc.appendChild(pTagDescription);
    divBeerInfo.appendChild(pTagIngredients);
    divfoodPairing.appendChild(pTagFoodPairing);
    divBrewersTips.appendChild(pTagBrewersTips);

    detailsElement.appendChild(divBeerImg);
    detailsElement.appendChild(divBeerName);
    detailsElement.appendChild(divAlcoholByVolume);
    detailsElement.appendChild(divVolume);
    detailsElement.appendChild(divHops);
    detailsElement.appendChild(divBeerDesc);
    detailsElement.appendChild(divBeerInfo);
    detailsElement.appendChild(divfoodPairing);
    detailsElement.appendChild(divBrewersTips);
    
    }

    

   
    


