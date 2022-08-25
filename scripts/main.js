import { fetchletters, fetchSenders, fetchpenPals, fetchtopics } from "./dataAccess.js"
import { PenPalSociety } from "./PenPalSociety.js"

const mainContainer = document.querySelector("#container")

const render = () => {
    fetchletters()
        .then(() => fetchSenders())
        .then(() => fetchpenPals())
        .then(() => fetchtopics())
        .then(
            () => {
                mainContainer.innerHTML = PenPalSociety()
            }
        )
}

render()

mainContainer.addEventListener(
    "stateChanged",
    customEvent => { 
        console.log("State of data has changed. Regenerating HTML...")
        render()
    }
)

