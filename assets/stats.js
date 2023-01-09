
let containerTableOne = document.getElementById("first-table")
let conteinerTabletwo = document.getElementById("second-table")
let conteinerTablethree = document.getElementById("third-table")


let dataBase;
fetch(`https://mindhub-xj03.onrender.com/api/amazing`)
    .then(data => data.json())
    .then(res => {
        dataBase = res
        createTable(higherPorcentage(newList(dataBase.events)), lowerPorcentage(newList(dataBase.events)), higherCapacity(newList(dataBase.events)))
        createSecondThridTable(upcoming(newList(dataBase.events), dataBase.currentDate), conteinerTabletwo)
        createSecondThridTable(past(newList(dataBase.events), dataBase.currentDate), conteinerTablethree)
    })
    .catch(err => console.log(err))




function newList(firstArray) {
    let listWithPorcent = []
    listWithPorcent = firstArray.map(event => {
        if (event.assistance) {
            event.porcentage = (event.assistance / event.capacity) * 100
            event.revenues = event.assistance * event.price
            return {
                name: event.name,
                date: event.date,
                porcentage: Math.round(event.porcentage),
                capacity: event.capacity,
                revenues: Math.round(event.revenues),
                category: event.category
            }
        } else if (event.estimate) {
            event.porcentage = (event.estimate / event.capacity) * 100
            event.revenues = (event.estimate * event.price)
            return {
                name: event.name,
                date: event.date,
                porcentage: Math.round(event.porcentage),
                capacity: event.capacity,
                revenues: Math.round(event.revenues),
                category: event.category
            }
        }
    })
    return listWithPorcent
}




function higherCapacity(array) {
    let list = array.map(lista => lista.capacity)
    let ultimateList = array.find(event => event.capacity === Math.max(...list))
    return ultimateList
}

function higherPorcentage(array) {
    let list = array.map(lista => lista.porcentage)
    let ultimateList = array.find(event => event.porcentage === Math.max(...list))
    return ultimateList
}

function lowerPorcentage(array) {
    let list = array.map(lista => lista.porcentage)
    let ultimateList = array.find(event => event.porcentage === Math.min(...list))
    return ultimateList
}



function createTable(objet1, objet2, objet3) {
    let rowTable = ""
    rowTable += `
        <td td > ${objet1.name}, whit porcentage: ${objet1.porcentage} %</td >
                    <td>${objet2.name}, with porcentage: ${objet2.porcentage}%</td>
                    <td>${objet3.name}, with capacity of: ${objet3.capacity}</td>
                `
    return renderTemplate(rowTable, containerTableOne)
}


function upcoming(list, calendar) {
    let listNew = list.filter(event => calendar < event.date)
    return listNew
}

function past(list, calendar) {
    let listNew = list.filter(event => calendar > event.date)
    return listNew
}


function createSecondThridTable(listEvents, container) {
    let rowTable = ""
    listEvents.forEach(template => {
        rowTable += `<tr tr >
        <td>${template.category}</td> 
        <td>U$S ${template.revenues}</td>
        <td>${template.porcentage}%</td>
        </tr >
        `
    })
    return renderTemplate(rowTable, container)
}





function renderTemplate(template, ubicacion) {
    ubicacion.innerHTML = template
}

