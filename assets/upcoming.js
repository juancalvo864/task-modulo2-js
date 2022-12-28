let sectionUpComing = document.getElementById("section-upcoming")


function templateCard(card, seccion) {
    return seccion.innerHTML += `<article class="card">
      <img src="${card.image} " class=" img-card" alt="${card.name}">
        <div class="card-body">
          <h5 class="card-title">${card.name} </h5>
          <p class="card-text">${card.description} </p>
        </div>
        <div class="precio-compra">
          <p>Price : usd ${card.price}</p>
          <a href="details.html" class="btn btn-primary">Details</a>
        </div>
    </article>`
}




const cardsUpComing = []

function cardsDate(list, futuro, seccion) {
    for (let carta of list.events) {
        if (list.currentDate > carta.date) {
            futuro.push(templateCard(carta, seccion))
        }
    }

}


cardsDate(data, cardsUpComing, sectionUpComing)