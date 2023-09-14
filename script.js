const container = document.getElementById("container")

const cards = 
[
    {
        "id": "1",
        "name":"Quixadá",
        "temperatura": 31,
        "imagem":"img/quixada.jpg",
        "segunda": {
            "titulo": "MON",
            "sun": "img/sun.jpeg",
        },
        "terca": {
            "titulo": "TUE",
            "cloud": "img/weather_cloud.jpg"
        },
        "quarta": {
            "titulo": "WED",
            "clouds": "img/weather_clouds.jpg"
        }

    },
    {
        "id": "2",
        "name":"Recife",
        "temperatura": 33,
        "imagem":"img/Recife.jpg",
        "segunda": {
            "titulo": "MON",
            "sun": "img/sun.jpeg",
        },
        "terca": {
            "titulo": "TUE",
            "cloud": "img/weather_cloud.jpg"
        },
        "quarta": {
            "titulo": "WED",
            "clouds": "img/weather_clouds.jpg"
        }

    },
    {
        "id": "3",
        "name":"Recife",
        "temperatura": 33,
        "imagem":"img/Recife.jpg",
        "segunda": {
            "titulo": "MON",
            "sun": "img/sun.jpeg",
        },
        "terca": {
            "titulo": "TUE",
            "cloud": "img/weather_cloud.jpg"
        },
        "quarta": {
            "titulo": "WED",
            "clouds": "img/weather_clouds.jpg"
        }

    }
]

    for(let i = 0; i < cards.length; i++){
        const {name, imagem, temperatura, segunda, terca, quarta} = cards[i];

        const myDiv = document.createElement('div')
        myDiv.innerHTML = `
        <div class="w3-card-4 w3-margin" style="width:30%">
        <div class="w3-display-container w3-text-white">
          <img src="${imagem}" alt="Lights" style="width:100%">
          <div class="w3-xlarge w3-display-bottomleft w3-padding">${name} ${temperatura}&deg; C</div>
        </div>
        <div class="w3-row">
          <div class="w3-third w3-center">
            <h3>${segunda.titulo}</h3>
            <img src="${segunda.sun}" alt="sun" style="width:80px">
          </div>
          <div class="w3-third w3-center">
            <h3>${terca.titulo}</h3>
            <img src="${terca.cloud}" alt="cloud" style="width:80px">
          </div>
          <div class="w3-third w3-center w3-margin-bottom">
            <h3>${quarta.titulo}</h3>
            <img src="${quarta.clouds}" alt="clouds" style="width:80px">
          </div>
        </div>
      </div>
        `
        container.appendChild(myDiv);

}

