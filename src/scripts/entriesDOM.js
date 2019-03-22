const articleDOM = document.querySelector(".entryLog")

const functionThatRendersData = (parsedEntry) => {
    parsedEntry.forEach(entry => {
        articleDOM.innerHTML += makeJournalEntryComponent(entry)
    })
}