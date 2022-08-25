import { getLetters, deleteLetters, getSenders, getpenPals, saveLetters, gettopics } from "./dataAccess.js"

const mainContainer = document.querySelector("#container")

mainContainer.addEventListener("click", click => {
    if (click.target.id.startsWith("letter")) {
        const [,letterId] = click.target.id.split("--")
        deleteLetters(parseInt(letterId))
    }
})

//Write a function to iterate through all the letters and print out the completed letters
//To check if the letter is ready to be printed- match letter.senderId to sender.id, letter.penPalId to penPal.id and then print out the correct statement. 
//The delete button needs to be attached to each letter entry printed on the bottom of the page.
export const letterBuilder = () => {
    const topics = gettopics()
    const senders = getSenders()
    const penPals = getpenPals()
    const letters = getLetters()

   const letterFormat = letters.map(letter => {
const foundTopic = topics.find(
        (topic) => {
            return parseInt(topic.id) === parseInt(letter.topicId)
        }
    )
    
const foundpenPal = penPals.find(
        (penPal) => {
            return parseInt(penPal.id) === parseInt(letter.penPalId)
        }
    )
    
const foundSender = senders.find(
        (sender) => {
            return parseInt(sender.id) === parseInt(letter.senderId)
        }
    )
//const letterParts = foundTopic + foundpenPal + foundSender
//const letterString = letterParts.toLocaleString()
    return `<div class=eachcompletedletter id="letter--${letter.id}">
              <p>Dear ${foundpenPal.name}, </p>
              <p>${letter.letterBody}</p>
              <p>${foundSender.name}</p>
              <p>${foundTopic.name}--${letter.reservationDate}
              
<button class="letter__delete"
      id="letter--${letter.id}">
  Delete
</button>
            </div>`
}).join("")

return letterFormat
}

export const Senders = () => {
    const senders = getSenders()
  return  `<select class="sender" name="sender">
    <option value="">Author</option>
    ${
        senders.map(
            sender => {
                return `<option value="${sender.id}">${sender.name}</option>`
            }
        ).join("")
    }
</select>`
}

export const PenPals = () => {
    const penPals = getpenPals()
  return  `<select class="penPal" id="penPal" name="servicepenPalName">
    <option value="">Recipient</option>
    ${
        penPals.map(
            penPal => {
                return `<option value="${penPal.id}">${penPal.name}</option>`
            }
        ).join("")
    }
</select>`
}

export const Topics = () => {
    const topics = gettopics()
  return  `
    ${
        topics.map(
            topic => {
                return `<input type="radio" name="servicetopic" value="${topic.id}"/><label>
                ${topic.name}</label>`
            }
        ).join("")
    }`
}

mainContainer.addEventListener(
    "change",
    (event) => {
        if (event.target.id === "sendletter") {
            const [letterId, senderId, penPalId, topicId] = event.target.value.split("--")

        const letter = {
            letterId: parseInt(letterId),
            senderId: parseInt(senderId),
            penPalId: parseInt(penPalId),
            topicId: parseInt(topicId),
            date_completed: Date.now()

        }
            saveLetters(letter)

        }
    }
)
// export const SubmittedLetters = (letter) => 
//     const letters = getLetters()
//     const senders = getSenders()
//     const penPals = getpenPals()
//     const topics = gettopics()
// let letterhtml = `<h2>Completed Letters</h2>`
    
// const foundTopic = topics.find(
//         (topic) => {
//             return topic.id === letter.topicId
//         }
//     )
//     letterhtml += `<section id="topic">${foundTopic.name}</section>`
    
//     const foundpenPal = penPals.find(
//         (penPal) => {
//             return penPal.id === letter.penPalId
//         })
    
//     letterhtml += `<section id="penPal">Dear, ${foundpenPal.name}</section>`

//     const foundSender = senders.find(
//         (sender) => {
//             return sender.id === letter.senderId
//         }
//     )
//     letterhtml += `<section id="sender">${letter.letterBody} 
//                         Sincerely,
//                         ${foundSender.name}</section>`

//  letterhtml += `<li> 
// <div
// <button class="letter__delete"
//       id="letter--${letter.id}">
//   Delete
// </button>`

// letterhtml += `<ul> ${letters.map(convertRequest).join("")} </ul>`

// }

// const findpenPal = (letter) => {
//     const penPal = getpenPals()
//     let foundpenPal = penPals.find(penPal => {return parseInt(penPal.id) === parseInt(letter.penPalId)})
//     return foundpenPal
// }

// const findSender = (letter) => {
//     const sender = getSenders()
//     let foundsender = senders.find(sender => {return parseInt(sender.id) === parseInt(letter.senderId)})
//     return foundsender
// }

// const findtopic = (letter) => {
//     const topic = gettopics()
//     let foundtopic = topics.find(topic => {return parseInt(topic.id) === parseInt(letter.topicId)})
//     return foundtopic
// }

// const completeletter = (letter) => {
//     const foundSender = findSender(letter)
//     const foundpenPal = findpenPal(letter)
//     const foundtopic = findtopic(letter)
//     const date = Date(Date.now())

// return `<section class="letter" id="completedletter">
//     ${foundtopic.name}/${date.toString()}--    
//     Dear ${foundpenPal.name},
//     ${letter.letterBody}
//         Sincerely ${foundSender.name}
// </section>`
// }

// export const completedLetter = () => {
//     const finalLetters = getLetters()
//     let letterhtml = `<div class="allletters">
//         ${finalLetters.map(completedLetter).join("")}
//         </div>
//     `
// return letterhtml
// }