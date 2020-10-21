const options = { /*para essa parte eu desabilitei tudo para o mapa*/
    dragging: false,
    dragging: false,
    touchZoom: false,
    doubleClickZoom: false,
    scrollWheelZoom: false,
    zoomControl: false

}

// get values from html
const lat = document.querySelector('span[data-lat]').dataset.lat
const lng = document.querySelector('span[data-lng]').dataset.lng

//Create map
var map = L.map('mapid', options).setView([-8.0550475, -34.884145], 13);

//Create and add tileLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

//Create icon
var icon = L.icon({ //L.icon tem dentro da funcionalidade 1 argumento por enquanto. Um argumento do tipo Objeto. Um objeto tem propriedade e valor. Olhando na documentação desse leaflet (L) a gente já sabe o que esse L.icon esperar ser colocado aqui dentro
    iconUrl: "./public/images/map-marker.svg", //Esse é o icone, coloquei sua localização. Lembresse de colocar vírgula no final
    iconSize: [58, 68], //O primeiro valor é a largura e o segundo a altura.
    iconAnchor: [29, 68], //Onde o icon vai está ancorado.
    popupAnchor: [170, 2], //Aqui é para o popup ficar ao lado e não em cima.

})


//Create and add marker
L.marker([-8.0550475, -34.884145], { icon }).addTo(map) //Aqui a gente coloca outro argumento no L.marker, a dicionando um objeto

window.document.body.style.background = "#ADD8E6"

/* image gallery*/
function selectImage(event) {
    const button = event.currentTarget

    //Remover todas as classes .active
    const buttons = document.querySelectorAll(".images button")
    buttons.forEach(removeActiveClass) //forEach (para cada) ou seja, para cada butão remova a class .active

    function removeActiveClass(button){
        button.classList.remove("active")
    }

    // selecionar a imagem clicada
    const image = button.children[0]
    const imageContainer = document.querySelector(".orphanage-details > img")

    //atualizar o container de image
    imageContainer.src = image.src
    // adicionar a classe .actove para este botão
    button.classList.add('active')

}