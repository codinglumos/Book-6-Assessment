import { sendLetters } from "./dataAccess.js"
import { Senders, PenPals, Topics, } from "./Choices.js"

const mainContainer = document.querySelector("#container")

mainContainer.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "sendletter") {
        // Get what the user typed into the form fields
        const usersenderName = document.querySelector("select[name='sender']").value
        const userpenPalName = document.querySelector("select[id='penPal']").value
        //const usersentDate = document.querySelector("input[name='servicesentDate']").value
        const userletterEntry = document.querySelector("textarea[name='serviceletterEntry']").value
        const usertopic = document.querySelector("input[name='servicetopic']").value

        // Make an object out of the user input
        const dataToSendToAPI = {
            senderId: usersenderName,
            penPalId: userpenPalName,
            reservationDate: Date.now(),
            letterBody: userletterEntry,
            topicId: usertopic
        }

        // Send the data to the API for permanent storage
        sendLetters(dataToSendToAPI)
    }
    //console.log("hi")
//     "id": 1,
//     "letterBody": "How's the afterlife?",
//     "senderId": 2,
//     "topicId": 4,
//     "reservationDate": "2022-08-30",
//     "penPalId": 4
//   },

})

export const LetterForm = () => {
    let html = `
        <div class="field">
            ${PenPals()}
        </div>
        <div class="field">
            <textarea v-model="message" placeholder="letter entry" name="serviceletterEntry"></textarea>
            </div>
        <div class="field" name="sender">
            ${Senders()}
        </div>
        <div class="field">
            <label class="label" for="servicetopic">Letter Topic</label>
            ${Topics()}
        </div>
        <button class="button" id="sendletter">Send Letter</button>
        </div>
    `

    return html
}
