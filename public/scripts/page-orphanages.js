//Create map
var map = L.map('mapid').setView([-8.0550475,-34.884145], 13);

//Create and add tileLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

//Create icon
var icon = L.icon({ //L.icon tem dentro da funcionalidade 1 argumento por enquanto. Um argumento do tipo Objeto. Um objeto tem propriedade e valor. Olhando na documentação desse leaflet (L) a gente já sabe o que esse L.icon esperar ser colocado aqui dentro
    iconUrl: "./public/images/map-marker.svg", //Esse é o icone, coloquei sua localização. Lembresse de colocar vírgula no final
    iconSize: [58, 68], //O primeiro valor é a largura e o segundo a altura.
    iconAnchor: [29, 68], //Onde o icon vai está ancorado.
    popupAnchor: [170, 2], //Aqui é para o popup ficar ao lado e não em cima.

})

// function addMarker({id, name, lat, lng}){
//Creat popup overlay
var popup = L.popup({ //Olhando na documentação já sei quais as propriedades e valores que o L.popup espera ser colocado aqui dentro.
    closeButton: false, //estou desabilitando o closebutton com o false.
    className: 'map-popup', //Nome da classe q ele vai ter.
    minWidth: 240, //Largura mínima 
    minHeight: 240 //Altura mínima
}).setContent(`Lar das meninas <a href="page-orphanage.html?id=1" class="choose-orphanage"> <img src="./public/images/arrow-white.svg"</a>`) //O L.popup me retorna um popup, (esse popup também é um objeto) e o .setContent("") é a função que vai ser responsável por colocar um conteúdo aqui dentro. E esse conteúdo é do tipo string.)

//Create and add marker
L.marker([-8.0550475,-34.884145], { icon }).addTo(map) //Aqui a gente coloca outro argumento no L.marker, a dicionando um objeto
    .bindPopup(popup) //Aqui a gente tira o 'A pretty CSS3 popup.<br> Easily customizable.' e coloca popup
        //.openPopup(); Não vou fazer o openPopup();

// }

// todos esses códigos abaixo podem ser excluidos
const orphanagesSpan = document.querySelectorAll('.orphanages span') 
orphanagesSpan.forEach(span => {
    const orphanage = {
        id: span.dataset.id,
        name: span.dataset.name,
        lat: span.dataset.lat,
        lng: span.dataset.lng
    }

    addMarker(orphanage)
})

//INICIO DO OUTRO MARKER

//Create and add tileLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

//Create icon
var icon = L.icon({ //L.icon tem dentro da funcionalidade 1 argumento por enquanto. Um argumento do tipo Objeto. Um objeto tem propriedade e valor. Olhando na documentação desse leaflet (L) a gente já sabe o que esse L.icon esperar ser colocado aqui dentro
    iconUrl: "./public/images/map-marker.svg", //Esse é o icone, coloquei sua localização. Lembresse de colocar vírgula no final
    iconSize: [58, 68], //O primeiro valor é a largura e o segundo a altura.
    iconAnchor: [29, 68], //Onde o icon vai está ancorado.
    popupAnchor: [170, 2], //Aqui é para o popup ficar ao lado e não em cima.

})

// function addMarker({id, name, lat, lng}){
//Creat popup overlay
var popup = L.popup({ //Olhando na documentação já sei quais as propriedades e valores que o L.popup espera ser colocado aqui dentro.
    closeButton: false, //estou desabilitando o closebutton com o false.
    className: 'map-popup', //Nome da classe q ele vai ter.
    minWidth: 240, //Largura mínima 
    minHeight: 240 //Altura mínima
}).setContent(`Lar dos meninos <a href="page-orphanage2.html?id=2" class="choose-orphanage"> <img src="./public/images/arrow-white.svg"</a>`) //O L.popup me retorna um popup, (esse popup também é um objeto) e o .setContent("") é a função que vai ser responsável por colocar um conteúdo aqui dentro. E esse conteúdo é do tipo string.)

//Create and add marker
L.marker([-8.0550475,-34.894145], { icon }).addTo(map) //Aqui a gente coloca outro argumento no L.marker, a dicionando um objeto
    .bindPopup(popup) //Aqui a gente tira o 'A pretty CSS3 popup.<br> Easily customizable.' e coloca popup
        //.openPopup(); Não vou fazer o openPopup();

// }

window.document.body.style.background = "#ADD8E6"