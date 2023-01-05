
let sectionUpComing = document.getElementById("section-upcoming")
let check = document.getElementById("checkpoint")
let search = document.getElementById("searchBox")



function listUpComing(list) {
  let listNew = []
  for (let carta of list.events) {
    if (list.currentDate < carta.date) {
      listNew.push(carta)
    }
  }
  return (listNew)
}


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




function loadcards(list) {
  let template = ""
  for (let infoCard of list) {
    template += templateCard(infoCard)
  }
  return template

}

renderTemplate(loadcards(listUpComing(data)), sectionUpComing)


/*---------------------check point / serch -----------------*/





//funcion para filtrar por categoria
function filterCategory(lista) {
  const categoryMovie = lista.events.map(movie => movie.category);
  return categoryMovie
}


const sinRepetidos = Array.from(new Set(filterCategory(data)))

//funcion para generar los check
function generarCheck(categories) {
  let template = ''
  categories.forEach(opcion => {
    template += `<div class="form-check form-check-inline">
                <input class="form-check-input " type="checkbox" id="inlineCheckbox1" value="${opcion}">
                <label class="form-check-label" for="inlineCheckbox1">${opcion}</label>
                </div>`
  });
  return template
}

// inner para pasar los check a pantalla
check.innerHTML += generarCheck(sinRepetidos)
let checkbuttons = document.querySelectorAll(".form-check-input")


//funcion de filtro para el check
function filterCheck(buttons, listMovies) {
  let listValue = [];
  for (let button of buttons) {
    if (button.checked)
      listValue.push(button.value.toLowerCase())
  }
  let filtered = listMovies.filter(movie => listValue.includes(movie.category.toLowerCase()));
  if (filtered.length === 0) {
    return listMovies
  } else {
    return filtered
  }

}


check.addEventListener('change', filtroCruzado)

//funcion del search para filtrar por nombre de pelicula
function searchMovies(inputBusqueda, listMovies) {
  const filterMovies = listMovies.filter(movie => {
    return movie.name.toLowerCase().startsWith(inputBusqueda.value.toLowerCase())
  })

  return filterMovies
}


search.addEventListener('input', filtroCruzado)


function filtroCruzado(evento) {

  const filtradosPorBusqueda = searchMovies(search, data.events)
  const filtradosPorCheck = filterCheck(checkbuttons, filtradosPorBusqueda)
  if (filtradosPorCheck.length === 0) {
    let alert = `<h2 class="alert">NO HAY COINCIDENCIAS</H2>`
    renderTemplate(alert, sectionUpComing)
  } else {
    renderTemplate(loadcards(filtradosPorCheck), sectionUpComing)
  }
}


function renderTemplate(template, ubicacion) {
  ubicacion.innerHTML = template
}
