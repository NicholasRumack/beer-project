const api = 'https://api.punkapi.com/v2/beers';
const detailsElement = document.querySelector('section.beerInfoGrid > div');

let beer = [];



function getBeerInfo(beer) {
    let str = beer.name;

    const divElement = document.createElement('div');
    const pElement = document.createElement('p');
    pElement.innerText = str;

    pElement.onclick = function() {
        console.log('beer data >>>' + JSON.stringify(beer));
        removeAllChildNodes(detailsElement);
    
        const image_url = beer.image_url;
        const abv = beer.abv;
        const volume = beer.volume;
        const hops = beer.hops;
        const description = beer.birth_year;
        const ingredients = beer.ingredients;
        const food_pairing = beer.food_pairing;
        const brewers_tips = beer.brewers_tips;

        const imgTagbeerImg  = document.createElement('img');
        const h2Tag  = document.createElement('h2');
        const pTagAlcoholeByVolume  = document.createElement('p');
        const pTagVolume  = document.createElement('p');
        const pTagHops  = document.createElement('p');
        const pTagDescription  = document.createElement('p');
        const pTagIngredients  = document.createElement('p');
        const pTagFoodPairing  = document.createElement('p');
        const pTagBrewersTips  = document.createElement('p');

        const image_urlNode = document.createTextNode('Image:' + ' ' + image_url);
        const h2Node = document.createTextNode(str);
        const pAlcoholeByVolumeNode = document.createTextNode('Alcohol by volume:' + ' ' + abv);
        const pVolumeNode = document.createTextNode('Volume:' + ' ' + volume);
        const pHopsNode = document.createTextNode('Hops:' + ' ' + hops);
        const pDescriptionNode = document.createTextNode('Description:' + ' ' + description);
        const pIngredientsNode = document.createTextNode('Ingredients:' + ' ' + ingredients);
        const pFoodPairingNode = document.createTextNode('Food pairing:' + ' ' + food_pairing);
        const pBrewersTipsNode = document.createTextNode('Brewers tips:' + ' ' + brewers_tips);

        imgTagbeerImg.appendChild(image_urlNode);
        h2Tag.appendChild(h2Node);
        pTagAlcoholeByVolume.appendChild(pAlcoholeByVolumeNode);
        pTagVolume.appendChild(pVolumeNode);
        pTagHops.appendChild(pHopsNode);
        pTagDescription.appendChild(pDescriptionNode);
        pTagIngredients.appendChild(pIngredientsNode);
        pTagFoodPairing.appendChild(pFoodPairingNode);
        pTagBrewersTips.appendChild(pBrewersTipsNode);

        detailsElement.appendChild(h2Tag);
        detailsElement.appendChild(pTagAlcoholeByVolume);
        detailsElement.appendChild(pTagVolume);
        detailsElement.appendChild(pTagHops);
        detailsElement.appendChild(pTagDescription);
        detailsElement.appendChild(pTagIngredients);
        detailsElement.appendChild(pTagFoodPairing);
        detailsElement.appendChild(pTagBrewersTips);

    }

    divElement.appendChild(pElement);

    return divElement;
    
}

