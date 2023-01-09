let parameterUrl = location.search

let parameters = new URLSearchParams(parameterUrl)

let id = parameters.get("id")
console.log(id)

let boxCardDetails = document.getElementById("box-card-details")

let dataBase;
fetch(`https://mindhub-xj03.onrender.com/api/amazing`)
    .then(data => data.json())
    .then(res => {
        dataBase = res
        let cardAssigned = dataBase.events.find(card => card._id === id)
        printCard(cardAssigned, boxCardDetails)
    })
    .catch(err => console.log(err))




function printCard(selectCard, section) {
    section.innerHTML = ""
    let div = document.createElement("div")
    div.className = "box-description-card"
    div.innerHTML = `   <h2>${selectCard.name}</h2>
                        <div class="pic-and-description" >
                        <img src="${selectCard.image}" alt="${selectCard.name}" class="img-description">
                        <div class="description-card">
                            <ul class="list-group list-group-flush " >
                                <li class="list-group-item">Date:  ${selectCard.date}</li>
                                <li class="list-group-item">Description:  ${selectCard.description}</li>
                                <li class="list-group-item">Category:  ${selectCard.category}</li>
                                <li class="list-group-item">Place:  ${selectCard.place}</li>
                                <li class="list-group-item">Capacity:  ${selectCard.capacity}</li>
                                <li class="list-group-item">Price: U$S ${selectCard.price}</li>                               
                                <li class="list-group-item">${(() => {
            if (selectCard.assistance) {
                return `Assistance: ${selectCard.assistance}`
            } else {
                return `Estimate: ${selectCard.estimate}`
            }
        })()}</li>
                            </ul>
                        </div>
                        </div> `
    section.appendChild(div)
}


