

let contactPage = function () {
    let contactDiv = document.createElement('div');
document.body.appendChild(contactDiv)

let headingDiv = document.createElement('h3')
headingDiv.textContent = 'Contact me';
contactDiv.appendChild(headingDiv)
contactDiv.classList.add('contactDiv')
let infoDiv = document.createElement('div')
infoDiv.classList.add('infoDiv')
contactDiv.appendChild(infoDiv)

let nameDiv = document.createElement('div')
nameDiv.textContent = 'Kerala Tales'

let addressDiv = document.createElement('div')
addressDiv.textContent = "Noel Focus, 3rd Floor, Seaport - Airport Road Chittethukara, Kakkanad, Kochi, Kerala 682037"

let phoneDiv = document.createElement('div')
phoneDiv.textContent = "9995006300"

infoDiv.appendChild(nameDiv)
infoDiv.appendChild(addressDiv)
infoDiv.appendChild(phoneDiv)
}

