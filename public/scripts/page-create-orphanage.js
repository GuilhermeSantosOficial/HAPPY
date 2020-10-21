// const Database = require("sqlite-async");
// const { saveOrphanage } = require("../src/pages");

//Create map
var map = L.map('mapid').setView([-8.0550475,-34.884145], 13);

//Create and add tileLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

//Create icon
var icon = L.icon({ //L.icon tem dentro da funcionalidade 1 argumento por enquanto. Um argumento do tipo Objeto. Um objeto tem propriedade e valor. Olhando na documentação desse leaflet (L) a gente já sabe o que esse L.icon esperar ser colocado aqui dentro
    iconUrl: "./public/images/map-marker.svg", //Esse é o icone, coloquei sua localização. Lembresse de colocar vírgula no final
    iconSize: [58, 68], //O primeiro valor é a largura e o segundo a altura.
    iconAnchor: [29, 68] //Onde o icon vai está ancorado.

})

let marker;

// Create and add marker
map.on('click', (event) => {
    const lat = event.latlng.lat;
    const lng = event.latlng.lng;

    document.querySelector('[name=lat]').value = lat  //Esse jeito da para selecionar qualquer tipo de tag que tenha o atributo name e dentro do name o atributo lat. (Funcina com qualquer um)
    document.querySelector('[name=lng]').value = lng //Com esses códigos agora quando a pessoa cadastras onde é o orfanato e confirmar vai enviar a latitude a longitudo e vai da para trabalhar com eles no backend

    //remove icon
    marker && map.removeLayer(marker)
    

    // add icon layer
    marker = L.marker([lat, lng], { icon })
    .addTo(map)
    
})

// Adicionar fotos 
function addPhotoField(){
    // Pegar o container de fotos (#images)
    var container = document.querySelector('#images')
    // Pegar o container para duplicar (.new-image)
    var fieldsContainer = document.querySelectorAll('.new-upload')
    // Realizar o clone da última image (adicionada)
    var newFieldContainer = fieldsContainer[fieldsContainer.length - 1].cloneNode(true)
    // Verificar se o campo está vazio, se sim, não adicionar ao container de imagens
    var input = newFieldContainer.children[0]

    if(input.value == ""){
        return
    }
    // Limpar o campo antes de adicionar ao container de imagens
    input.value =""
    // Adicionar o clone ao container de (#images)
    container.appendChild(newFieldContainer)

}

function deleteField(event){
    var span = event.currentTarget

    var fieldsContainer = document.querySelectorAll('.new-upload')
    
    if(fieldsContainer.length < 2){
        // Limpar o valor do campo
        span.parentNode.children[0].value = ""
        return
    }

    // Deletar o campo
    span.parentNode.remove(); // Vai pegar todos os parentes do span e deletar o clone.
}

// Seleção de Sim ou Não
function toggleSelect(event){
    // Retirar a class active dos botões
    document.querySelectorAll('.button-select button')
    .forEach(function(button){
        button.classList.remove('active')
    })

    // Cololar a class .active nesse botão clicado
    var button = event.currentTarget
    button.classList.add('active')

    // Atualizar o meu input hidden com o valor selecionado
    var input = document.querySelector('[name="open_on_weekends"]')
    
    input.value = button.dataset.value
}

 function validate(event) {

     //validar se lat e lng estão preenchidos.
     const needsLatAndLng = true;
     if(needsLatAndLng) {
         event.preventDefault()
         alert('Selecione um ponto no mapa')
     }

 }

window.document.body.style.background = "#ADD8E6"