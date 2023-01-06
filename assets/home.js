let sectionHome = document.getElementById("cards-container")
let check = document.getElementById("checkpoint")
let search = document.getElementById("searchBox")


function templateCard(card) {
  return `<article class="card">
      <img src="${card.image} " class=" img-card" alt="${card.name}">
        <div class="card-body">
          <h5 class="card-title">${card.name} </h5>
          <p class="card-text">${card.description} </p>
        </div>
        <div class="precio-compra">
          <p>Price : usd ${card.price}</p>
          <a href="./details.html?id=${card._id}" class="btn btn-primary">Details</a>
        </div>
    </article>`
}


function loadCards(list) {
  let template = ""
  for (let infoCard of list) {
    template += templateCard(infoCard)
  }
  return template

}

renderTemplate(loadCards(data.events), sectionHome)


/*---------------------check point / serch -----------------*/






//funcion para filtrar por categoria
function filterCategory(lista) {
  const categoryEvents = lista.events.map(events => events.category);
  return categoryEvents
}

const noRepeat = Array.from(new Set(filterCategory(data)))

//funcion para generar los check
function generarCheck(categories) {
  let checkbox = ''
  categories.forEach(opcion => {
    checkbox += `<div class="form-check form-check-inline">
                <label class="form-check-label" >
                <input class="form-check-input inlineCheckbox1" type="checkbox"  value="${opcion}">
                ${opcion}
                </label>
                </div>`
  });
  return checkbox
}

renderTemplate(generarCheck(noRepeat), check)



let checkbuttons = Array.from(document.querySelectorAll(".form-check-input"))

//funcion de filtro para el check
function filterCheck(checksInput, listEvents) {
  let listValue = checksInput.filter(event => event.checked).map(click => click.value.toLowerCase())
  let filtered = listEvents.filter(movie => listValue.includes(movie.category.toLowerCase()));
  if (filtered.length === 0) {
    return listEvents
  } else {
    return filtered
  }

}


check.addEventListener('change', crossFilter)

//funcion del search para filtrar por nombre de pelicula
function searchEvents(inputBusqueda, listEvents) {
  const filterEvents = listEvents.filter(movie => {
    return movie.name.toLowerCase().startsWith(inputBusqueda.value.toLowerCase())
  })

  return filterEvents
}


search.addEventListener('input', crossFilter)


function crossFilter(evento) {

  const filtradosPorBusqueda = searchEvents(search, data.events)
  const filtradosPorCheck = filterCheck(checkbuttons, filtradosPorBusqueda)
  if (filtradosPorCheck.length === 0) {
    let alert = `<h2 class="alert">WAS NOT FOUND</H2>`
    renderTemplate(alert, sectionHome)

  } else {
    renderTemplate(loadCards(filtradosPorCheck), sectionHome)
  }
}



function renderTemplate(template, ubicacion) {
  ubicacion.innerHTML = template
}

