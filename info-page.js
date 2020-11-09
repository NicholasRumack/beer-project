





function getBeerInfo() {
    let str = .;

    const divElement = document.createElement('div');
    const pElement = document.createElement('p');
    pElement.innerText = str;

    pElement.onclick = function() {
        console.log('beer data >>>' + JSON.stringify());
        removeAllChildNodes(detailsElement);
    
        const height = character.height;
        const mass = character.mass;
        const hair_color = character.hair_color;
        const skin_color = character.skin_color;
        const eye_color = character.eye_color;
        const birth_year = character.birth_year;
        const gender = character.gender;

        const h2Tag  = document.createElement('h2');
        const pTagHeight  = document.createElement('p');
        const pTagMass  = document.createElement('p');
        const pTagHair_Color  = document.createElement('p');
        const pTagSkin_Color  = document.createElement('p');
        const pTagEye_Color  = document.createElement('p');
        const pTagBirth_Year  = document.createElement('p');
        const pTagGender  = document.createElement('p');

        const h2Node = document.createTextNode(str);
        const pHeightNode = document.createTextNode('Description:' + ' ' + height);
        const pMassNode = document.createTextNode('Image:' + ' ' + mass);
        const pHair_ColorNode = document.createTextNode('Alcohol by volume:' + ' ' + hair_color);
        const pSkin_ColorNode = document.createTextNode('Volume:' + ' ' + skin_color);
        const pEye_ColorNode = document.createTextNode('Ingredients:' + ' ' + eye_color);
        const pBirth_YearNode = document.createTextNode('Hops:' + ' ' + birth_year);
        const pGenderNode = document.createTextNode('Food pairing:' + ' ' + gender);
        const pGenderNode = document.createTextNode('Brewers tips:' + ' ' + gender);

        h2Tag.appendChild(h2Node);
        pTagHeight.appendChild(pHeightNode);
        pTagMass.appendChild(pMassNode);
        pTagHair_Color.appendChild(pHair_ColorNode);
        pTagSkin_Color.appendChild(pSkin_ColorNode);
        pTagEye_Color.appendChild(pEye_ColorNode);
        pTagBirth_Year.appendChild(pBirth_YearNode);
        pTagGender.appendChild(pGenderNode);

        detailsElement.appendChild(h2Tag);
        detailsElement.appendChild(pTagHeight);
        detailsElement.appendChild(pTagMass);
        detailsElement.appendChild(pTagHair_Color);
        detailsElement.appendChild(pTagSkin_Color);
        detailsElement.appendChild(pTagEye_Color);
        detailsElement.appendChild(pTagBirth_Year);
        detailsElement.appendChild(pTagGender);

    }

    divElement.appendChild(pElement);

    return divElement;
    
}