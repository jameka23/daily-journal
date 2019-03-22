const API = {
    getJournalEntries () {
        return fetch("http://localhost:8088/entries")
        .then(response => response.json())
    },
    postJournalEntries () {
        return fetch("http://localhost:8088/entries",{
            method: "POST",
            body: ""
        })
    }
}