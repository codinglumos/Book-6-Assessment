const applicationState = {
    letters: [],
    penPals: [],
    topics: [],
    senders: []
}

const API = "http://localhost:8088"

const mainContainer = document.querySelector("#container")

export const fetchletters = () => {
    return fetch(`${API}/letters`)
        .then(response => response.json())
        .then(
            (serviceletters) => {
                // Store the external state in application state
                applicationState.letters = serviceletters
            }
        )
}

export const getLetters = () => {
    return applicationState.letters.map(letter => ({...letter}))
}

export const sendLetters = (userserviceletter) => {
    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(userserviceletter)
    }


    return fetch(`${API}/letters`, fetchOptions)
    .then(response => response.json())
    .then(() => {
        mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
    })
}

export const deleteLetters = (id) => {
    return fetch(`${API}/letters/${id}`, { method: "DELETE" })
        .then(
            () => {
                mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
            }
        )
}

export const fetchSenders = () => {
    return fetch(`${API}/senders`)
        .then(response => response.json())
        .then(
            (data) => {
                applicationState.senders = data
            }
        )
}

export const getSenders = () => {
    return applicationState.senders.map(sender => ({...sender}))
}

export const fetchpenPals = () => {
    return fetch(`${API}/penPals`)
        .then(response => response.json())
        .then(
            (data) => {
                applicationState.penPals = data
            }
        )
}

export const getpenPals = () => {
    return applicationState.penPals.map(penPal => ({...penPal}))
}

export const fetchtopics = () => {
    return fetch(`${API}/topics`)
        .then(response => response.json())
        .then(
            (data) => {
                applicationState.topics = data
            }
        )
}

export const gettopics = () => {
    return applicationState.topics.map(topic => ({...topic}))
}

// export const fetchCompletions = () => {
//     return fetch(`${API}/completions`)
//         .then(response => response.json())
//         .then(
//             (data) => {
//                 applicationState.completions = data
//             }
//         )
// }

export const saveLetters = (userserviceletter) => {
    //userserviceletter.date_completed = Date.now()
    const letters = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(userserviceletter)
    }
    return getLetters()
}