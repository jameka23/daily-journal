const articleDOM = document.querySelector(".entryLog")

const makeJournalEntryComponent = (journalEntry) => {
    // Create your own HTML structure for a journal entry
    return `
        <h4>${journalEntry.concepts}</h4>
        <p>${journalEntry.entry}</p>
        <p>${journalEntry.entry_date}</p>
    `
}

for(let i = 0; i < journal_entries.length; i++){
    articleDOM.innerHTML += makeJournalEntryComponent(journal_entries[i])
}

// fetch("localhost:8088/entries.json"){

// }