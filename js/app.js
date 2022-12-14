//Variables
const years = document.querySelector("#year")
const brand = document.querySelector("#marca")
const minPrice = document.querySelector("#minimo")
const maxPrice = document.querySelector("#maximo")
const doors = document.querySelector("#puertas")
const transmission = document.querySelector("#transmision")
const color = document.querySelector("#color")

const maxYear = new Date().getFullYear()
const minYear = maxYear - 12

//Container to the results
const result = document.querySelector("#resultado")


//Create an object with the search
const dataSearch = {
    marca: "",
    year: "",
    minimo: "",
    maximo: "",
    puertas: "",
    color: "",
    transmision: "",
}

//Events
document.addEventListener("DOMContentLoaded", () => {
    showAutos(autos) //Show autos when the website has loaded

    //Fill the year options
    fillSelect()
})

//Event listener to the search selects
brand.addEventListener("change", e => {
    dataSearch.marca = e.target.value

    autoFilter()
})

years.addEventListener("change", e => {
    dataSearch.year = parseInt(e.target.value) //Now the datas come like string

    autoFilter()
})

minPrice.addEventListener("change", e => {
    dataSearch.minimo = e.target.value

    autoFilter()
})

maxPrice.addEventListener("change", e => {
    dataSearch.maximo = e.target.value

    autoFilter()
})

doors.addEventListener("change", e => {
    dataSearch.puertas = parseInt(e.target.value)

    autoFilter()
})

color.addEventListener("change", e => {
    dataSearch.color = e.target.value

    autoFilter()
})

transmission.addEventListener("change", e => {
    dataSearch.transmision = e.target.value

    autoFilter()
})

//Functions
function showAutos(autos) {

    cleanHtml()

    autos.forEach(auto => {

        const { marca, modelo, year, precio, puertas, color, transmision } = auto
        const autoHTML = document.createElement("p")

        //To give content to the autoHTML´s "p"
        autoHTML.textContent = `${marca} ${modelo} --- Year: ${year}, Price: ${precio}, Doors: ${puertas}, Color: ${color}, Transmission: ${transmision}`

        //To insert in HTML
        result.appendChild(autoHTML)
    })
}

//Function to clean previous HTML
function cleanHtml() {
    while (result.firstChild) {
        result.removeChild(result.firstChild)
    }
}

function fillSelect() {

    for (i = maxYear; i >= minYear; i--) {
        const option = document.createElement("option")
        option.value = i
        option.textContent = i
        years.appendChild(option)
    }
}

//Function to filtering depend the search
function autoFilter() {
    const result = autos.filter(brandFilter).filter(yearFilter).filter(minFilter).filter(maxFilter).filter(doorFilter).filter(transmissionFilter).filter(colorFilter)

    console.log(result)

    if(result.length) {
        showAutos(result) 
    } else {
        notResult()
    }
}

function notResult() {
    
    cleanHtml()

    const notResult = document.createElement("div")
    notResult.classList.add("alerta", "error")
    notResult.textContent = "There is not result with this search, you can try with other kinds of datas"
    result.appendChild(notResult)
}

function brandFilter(auto) {
    const { marca } = dataSearch // The same that dataSearch.marca
    if (marca) {
        return auto.marca === marca
    }
    return auto
}

function yearFilter(auto) {
    const { year } = dataSearch
    /* console.log("I am year", typeof year)
    console.log("I am auto.year", typeof auto.year) */
    if (year) {
        return auto.year === year  //Here the result is an empty string because the function is trying to campare a string with a number, "year" is the string, something common when datas come from of a form
        //return auto.year === parseInt(year) we had use parseInt() here but is better practice to use in years listener to avoid use to match logic in this function.
    }
    return auto
}

function minFilter(auto) {
    const { minimo } = dataSearch
    if (minimo) {
        return auto.precio >= minimo
    }
    return auto
}

function maxFilter(auto) {
    const { maximo } = dataSearch
    if (maximo) {
        return auto.precio <= maximo
    }
    return auto
}

function doorFilter(auto) {
    const { puertas } = dataSearch
    if (puertas) {
        return auto.puertas === puertas
    }
    return auto
}

function transmissionFilter(auto) {
    const { transmision } = dataSearch
    if (transmision) {
        return auto.transmision === transmision
    }
    return auto
}

function colorFilter(auto) {
    const { color } = dataSearch
    if (color) {
        return auto.color === color
    }
    return auto
}







