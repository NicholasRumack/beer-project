const api = 'https://api.punkapi.com/v2/beers';
const detailsElement = document.querySelector('section.beerInfoGrid');
const searchParams = new URLSearchParams(window.location.search);
const id = searchParams.get('name');
const url = `${api}/${48}`;

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

    let ingredients = beer.ingredients
    let malt = ingredients.malt
    let hops = ingredients.hops
    let yeast = ingredients.yeast
    
    for (let i = 0; i < malt.length; i++) {
        const maltInfo = malt[i];
        let str = `${maltInfo.name}: ${maltInfo.amount.value}: ${maltInfo.amount.unit}`
        console.log(str)
    }
    

    for (let i = 0; i < hops.length; i++) {
        const hopsInfo = hops[i];
        let str = `${hopsInfo.name}: ${hopsInfo.amount.value}: ${hopsInfo.amount.unit}`
        console.log(str)
    }
    console.log(yeast)
    
    let volume = beer.boil_volume;
    for (let i = 0; i < volume.length; i++) {
        const volumeInfo = volume[i];
        let str = `${volumeInfo.name}: ${volumeInfo.amount.value}`
        console.log(str)
    }
    
    console.log(beer.description)
    console.log(beer.abv + "%")
    console.log(beer.brewers_tips)
    let foodPairing = beer.food_pairing

    for (var i =0; i <= foodPairing.length; i++) {
        var foodPairingItem = foodPairing[i];

        console.log(foodPairingItem)
    }
}