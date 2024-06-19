import chickenImage from "./Chicken.jpg";    
import beefImage from './beef.jpg';
import porkImage from './pork.jpg' 
let menuPage = function () 
{
    let menuDiv = document.querySelector('#content')

    let imagesDiv = document.createElement('div')
    imagesDiv.classList.add('imagesDiv')

    let contentDiv = document.createElement('div')
    contentDiv.classList.add('imgContent')
    document.body.appendChild(menuDiv)
    menuDiv.appendChild(imagesDiv)  
    let menuHeading = document.createElement('h1')
    menuHeading.textContent = 'The Best Sellers from our Restaurant'
    imagesDiv.appendChild(menuHeading)
    imagesDiv.appendChild(contentDiv)
    
    
    let firstDiv = document.createElement('div')
    
    let innerHead = document.createElement('h3')
    innerHead.textContent = "Beef Fry"
    
    let innerPara = document.createElement('p')
    innerPara.textContent = "Beef fry is a delicious, aromatic dish hailing from various culinary traditions, notably from South Indian and Caribbean cuisines. This savory delight features tender pieces of beef marinated and cooked with an array of spices, creating a rich and flavorful experience."
    
    let innerImg = document.createElement('img')
    innerImg.setAttribute('src', beefImage)
    firstDiv.appendChild(innerHead)
    
    firstDiv.appendChild(innerPara)
    firstDiv.appendChild(innerImg)
    
    let secondDiv = document.createElement('div')
    let thirdDiv = document.createElement('div')
    let innerSecHead = document.createElement('h3')
    innerSecHead.textContent = "Pork Roast"
    
    let innerSecPara = document.createElement('p')
    innerSecPara.textContent = "This savory dish features succulent pieces of pork cooked to perfection with a medley of spices, resulting in a flavorful and hearty meal. Key ingredients typically include onions, garlic, ginger, curry leaves, and a blend of spices such as turmeric, chili powder, coriander, and fennel seeds."
    
    let innerSecImg = document.createElement('img')
    innerSecImg.setAttribute('src', porkImage)
    secondDiv.appendChild(innerSecHead)
    
    secondDiv.appendChild(innerSecPara)
    secondDiv.appendChild(innerSecImg)
    
    let innerThirdHead = document.createElement('h3')
    innerThirdHead.textContent = "Chicken 65"
    
    let innerThirdPara = document.createElement('p')
    innerThirdPara.textContent = "Chicken 65 is a popular and iconic dish from South Indian cuisine, known for its spicy, tangy, and flavorful profile. This dish features bite-sized pieces of chicken marinated in a vibrant blend of spices and deep-fried to perfection, creating a crispy exterior and juicy interior"
    
    let innerThirdImg = document.createElement('img')
    innerThirdImg.setAttribute('src', chickenImage)
    thirdDiv.appendChild(innerThirdHead)
    
    thirdDiv.appendChild(innerThirdPara)
    thirdDiv.appendChild(innerThirdImg)
    contentDiv.appendChild(firstDiv)
    contentDiv.appendChild(secondDiv)
    contentDiv.appendChild(thirdDiv)
    let content = document.querySelector('#content')

}

export {menuPage}