const makeJournalEntryComponent = (journalEntry) => {
    // Create your own HTML structure for a journal entry
    return `
        <h1>${journalEntry.concepts}</h1>
        <p>${journalEntry.entry}</p>
        <p>${journalEntry.entry_date}</p>
        <p>${journalEntry.mood}</p>
    `
}

// Invoke the factory function, passing along the form field values
const newJournalEntry = (journalConcepts, journalEntry, journalDate, journalMood) => {
    return {
        "entry_date": journalConcepts,
        "concepts": journalEntry,
        "entry": journalDate,
        "mood": journalMood
    }
}

const clearElement = domElement => {
    while(domElement.firstChild){
        return domElement.removeChild(domElement.firstChild)
    }
}