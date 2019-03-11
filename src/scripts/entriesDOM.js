const functionThatRendersData = (parsedEntry) => {
    const articleDOM = document.querySelector(".entryLog")
    parsedEntry.forEach(entry => {
        articleDOM.innerHTML += makeJournalEntryComponent(entry)
    })
}