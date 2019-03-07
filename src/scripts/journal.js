const articleDOM = document.querySelector(".entryLog")

const makeJournalEntryComponent = (journalEntry) => {
    // Create your own HTML structure for a journal entry
    return `
        <h4>${journalEntry.concepts}</h4>
        <p>${journalEntry.entry}</p>
        <p>${journalEntry.entry_date}</p>
    `
}



fetch("http://localhost:3000/entries")
.then(response => response.json())
.then(parsedResponse => {
    for(let element of parsedResponse){
        articleDOM.innerHTML += makeJournalEntryComponent(element)
    }
    console.log(parsedResponse)
})