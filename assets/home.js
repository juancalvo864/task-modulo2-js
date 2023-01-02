let sectionHome = document.getElementById("cards-container")



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




function cargaDeCartas(lista, seccion) {
  for (let infoCard of lista.events) {
    templateCard(infoCard, seccion)
  }

}
cargaDeCartas(data, sectionHome)



