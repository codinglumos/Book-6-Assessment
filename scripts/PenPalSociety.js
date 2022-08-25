import { LetterForm } from "./LetterForm.js"
import { letterBuilder } from "./Choices.js"


export const PenPalSociety = () => {
    return `
        <h1>Pen Pal Society</h1>
        <section class="serviceLetterform">
            ${LetterForm()}
        </section>

        <section class="completedletters">
        <h2>Submitted Letters</h2>
        ${letterBuilder()}
        </section>
    `
}