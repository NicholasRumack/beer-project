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
    console.log(beer)

    let str = beer.name;
    let bVolume = beer.boil_volume
    let volume = bVolume.value + " " + bVolume.unit;

    const pElement = document.createElement('p');
    pElement.innerText = str;

    const abv = beer.abv +"%";
    const description = beer.description;
    
    let ingredients = "";  
    
    ingredients += 'Hops: '
    for (let i = 0; i < beer.ingredients.hops.length; i++) {
        const hop = beer.ingredients.hops[i];
        ingredients += hop.name + ", ";
    }

    ingredients += 'Malt: '
    for (let i = 0; i < beer.ingredients.malt.length; i++) {
        const m = beer.ingredients.malt[i];
        ingredients += m.name + ", ";
    }

    ingredients += 'Yeast: ' + beer.ingredients.yeast

    const food_pairing = beer.food_pairing;
    const brewers_tips = beer.brewers_tips;
    beerImg = new Image (54.4, 212.2);
    beerImg.src = beer.image_url;

    let h3abv = document.createElement("h3");
    h3abv.innerHTML = "Alcohol by volume";
    let h3Volume = document.createElement("h3");
    h3Volume.innerHTML = "Volume";
    let h3Hops = document.createElement("h3");
    h3Hops.innerHTML = "Hops";
    let h3BeerInfo = document.createElement("h3");
    h3BeerInfo.innerHTML = "Ingredients";
    let h3FoodPairing = document.createElement("h3");
    h3FoodPairing.innerHTML = "Food pairing";
    let h3BrewersTips = document.createElement("h3");
    h3BrewersTips.innerHTML = "Brewers tips";

    const h2Tag  = document.createElement('h2');
    const pTagAlcoholeByVolume  = document.createElement('p');
    const pTagVolume  = document.createElement('p');
    const pTagDescription  = document.createElement('p');
    const pTagIngredients  = document.createElement('p');
    const pTagFoodPairing  = document.createElement('p');
    const pTagBrewersTips  = document.createElement('p');

    const h2Node = document.createTextNode(str);
    const pAlcoholeByVolumeNode = document.createTextNode(abv);
    const pVolumeNode = document.createTextNode(volume);
    const pDescriptionNode = document.createTextNode(description);
    const pIngredientsNode = document.createTextNode(ingredients);
    const pFoodPairingNode = document.createTextNode(food_pairing);
    const pBrewersTipsNode = document.createTextNode(brewers_tips);

    h2Tag.appendChild(h2Node);
    pTagAlcoholeByVolume.appendChild(pAlcoholeByVolumeNode);
    pTagVolume.appendChild(pVolumeNode);
    pTagDescription.appendChild(pDescriptionNode);
    pTagIngredients.appendChild(pIngredientsNode);
    pTagFoodPairing.appendChild(pFoodPairingNode);
    pTagBrewersTips.appendChild(pBrewersTipsNode);

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

    divBeerName.appendChild(h2Tag);
    divAlcoholByVolume.appendChild(h3abv);
    divAlcoholByVolume.appendChild(pTagAlcoholeByVolume);
    divVolume.appendChild(h3Volume);
    divVolume.appendChild(pTagVolume);
    divBeerDesc.appendChild(pTagDescription);
    divBeerInfo.appendChild(h3BeerInfo);
    divBeerInfo.appendChild(pTagIngredients);
    divfoodPairing.appendChild(h3FoodPairing);
    divfoodPairing.appendChild(pTagFoodPairing);
    divBrewersTips.appendChild(h3BrewersTips);
    divBrewersTips.appendChild(pTagBrewersTips);

    detailsElement.appendChild(beerImg)
    detailsElement.appendChild(divBeerName);
    detailsElement.appendChild(divAlcoholByVolume);
    detailsElement.appendChild(divVolume);
    detailsElement.appendChild(divHops);
    detailsElement.appendChild(divBeerDesc);
    detailsElement.appendChild(divBeerInfo);
    detailsElement.appendChild(divfoodPairing);
    detailsElement.appendChild(divBrewersTips);
    
    }

    

   
    


