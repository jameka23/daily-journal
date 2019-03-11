const makeJournalEntryComponent = (journalEntry) => {
    // Create your own HTML structure for a journal entry
    return `
        <h4>${journalEntry.concepts}</h4>
        <p>${journalEntry.entry}</p>
        <p>${journalEntry.entry_date}</p>
    `
}