let parameterUrl = location.search

let parameters = new URLSearchParams(parameterUrl)

let id = parameters.get("id")


let boxCardDetails = document.getElementById("box-card-details")

let carAssigned = data.events.find(card => card._id === id)

function printCard(selectCard) {

    let cardPrint = `   <h2>${selectCard.name}</h2>
                        <div class="pic-and-description" >
                        <img src="${selectCard.image}" alt="img-description" class="img-description">
                        <div class="description-card">
                            <ul class="list-group list-group-flush " >
                                <li class="list-group-item">Date:  ${selectCard.date}</li>
                                <li class="list-group-item">Description:  ${selectCard.description}</li>
                                <li class="list-group-item">Category:  ${selectCard.category}</li>
                                <li class="list-group-item">Place:  ${selectCard.place}</li>
                                <li class="list-group-item">Capacity:  ${selectCard.capacity}</li>
                                <li class="list-group-item">Price:  ${selectCard.price}</li>
                            </ul>
                        </div>
                        </div> `
    return cardPrint
}

function renderTemplate(template, ubicacion) {
    ubicacion.innerHTML = template
}


renderTemplate(printCard(carAssigned), boxCardDetails)