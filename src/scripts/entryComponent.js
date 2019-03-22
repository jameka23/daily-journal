const makeJournalEntryComponent = (journalEntry) => {
    // Create your own HTML structure for a journal entry
    return `
        <h4>${journalEntry.concepts}</h4>
        <p>${journalEntry.entry}</p>
        <p>${journalEntry.entry_date}</p>
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