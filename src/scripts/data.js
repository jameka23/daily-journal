const API = {
    getJournalEntries () {
        return fetch("http://localhost:8088/entries")
        .then(response => response.json())
        // .then(parsedResponse => {
        //     console.log(parsedResponse)
        //     return parsedResponse
        // })
    }
}