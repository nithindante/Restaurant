let pageLoad = function() {
    let mainContent = document.querySelector('#content')
    let homeContent = document.createElement('div')
    homeContent.classList.add('homeContent')
    mainContent.appendChild(homeContent)
    let heading = document.createElement('h1')
    let para = document.createElement('p')
    heading.textContent='Taste of Kerala';
    para.textContent="At Taste of Kerala, we bring you the rich and diverse culinary traditions of Kerala, the enchanting southern state of India known for its lush landscapes and vibrant culture. Our restaurant offers a delightful journey through Kerala's famous cuisine, blending traditional recipes with fresh, locally-sourced ingredients to create an unforgettable dining experience.";
    let secondPara = document.createElement('p')
    secondPara.textContent="Experience the essence of Kerala with our meticulously crafted menu featuring an array of traditional delicacies. From the aromatic spices of our signature Malabar Biryani to the delicate flavors of our Appam and Stew, each dish is prepared with fresh, locally sourced ingredients and a passion for authenticity."
    homeContent.appendChild(heading)
    homeContent.appendChild(para)
    homeContent.appendChild(secondPara)
}

export {pageLoad}