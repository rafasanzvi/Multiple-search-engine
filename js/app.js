//Variables
const result = document.querySelector("#resultado")
const years = document.querySelector("#year")

//Events
document.addEventListener("DOMContentLoaded", () => {
    showAutos() //Show autos when the website has loaded
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
