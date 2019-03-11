const API = {
    url: "http://localhost:8088/entries",
    getJournalEntries () {
        return fetch(this.url)
        .then(response => response.json())
    },
    postJournalEntries (newEntryObj) {
        return fetch(this.url, {
            method: "POST",
            body: JSON.stringify(newEntryObj),
            headers: {
                "Content-Type": "application/json",
                // "Content-Type": "application/x-www-form-urlencoded",
            }
            .then(response => response.json)
        })

    }
}