//Variables
const result = document.querySelector("#resultado")

const maxYear = new Date().getFullYear()
const minYear = maxYear - 12

const years = document.querySelector("#year")

//Events
document.addEventListener("DOMContentLoaded", () => {
    showAutos() //Show autos when the website has loaded

    //Fill the year options
    fillSelect()
})


//Functions
function showAutos() {
    autos.forEach(auto => {
        
        const {marca, modelo, year, precio, puertas, color, transmision} = auto
        const autoHTML = document.createElement("p")

        //To give content to the autoHTML´s "p"
        autoHTML.textContent = `${marca} ${modelo} --- Year: ${year}, Price: ${precio}, Doors: ${puertas}, Color: ${color}, Transmission: ${transmision}`

        //To insert in HTML
        result.appendChild(autoHTML)
    })
}

function fillSelect() {
    
    for(i = maxYear; i >= minYear; i--) {
        const option = document.createElement("option")
        option.value = i
        option.textContent = i
        years.appendChild(option)
    }

}
