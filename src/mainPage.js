let pageLoad = function() {
    let mainContent = document.querySelector('#content')
    let heading = document.createElement('h1')
    let para = document.createElement('p')
    heading.textContent='Taste of Kerala';
    para.textContent="At Taste of Kerala, we bring you the rich and diverse culinary traditions of Kerala, the enchanting southern state of India known for its lush landscapes and vibrant culture. Our restaurant offers a delightful journey through Kerala's famous cuisine, blending traditional recipes with fresh, locally-sourced ingredients to create an unforgettable dining experience.";
    mainContent.appendChild(heading)
    mainContent.appendChild(para)
}

export {pageLoad}