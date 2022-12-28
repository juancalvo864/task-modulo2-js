function loadCard(card) {
    return (`<article class="card">
      <img src="${card.image} " class=" img-card" alt="${card.name}">
        <div class="card-body">
          <h5 class="card-title">${card.name} </h5>
          <p class="card-text">${card.description} </p>
        </div>
        <div class="precio-compra">
          <p>"Price :",${card.price}</p>
          <a href="details.html" class="btn btn-primary">Details</a>
        </div>
    </article>`)
}


const cards = []

function cargaDeCartas(lista, carta) {
    for (let infoCard of lista.events) {
        carta.push(loadCard(infoCard))
    }
}
cargaDeCartas(data, cards)

console.log(cards.toString())


const cardsPast = []
const cardsUpComing = []



function cardsDate(list, pasado, futuro) {
    for (let carta of list.events) {
        if (list.currentDate > carta.date) {
            pasado.push(loadCard(carta))
        } else {
            futuro.push(loadCard(carta))
        }
    }
    console.log(pasado.toString())
    console.log(futuro.toString())
}

cardsDate(data, cardsPast, cardsUpComing)



