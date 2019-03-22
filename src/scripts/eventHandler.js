const saveButtonHandler = () => {
    console.log("save button pressed!");
    const userEntry = document.querySelector("#journalEntry").value;
    const userMood = document.querySelector("#mood").value;
    const userEntryDate = document.querySelector("#journalDate").value;
    const userConcept = document.querySelector("#concepts").value;

    const entry = newJournalEntry(userConcept, userEntry, userEntryDate, userMood);

    API.postJournalEntries(entry)
    
}       
// .then(clearElement(articleDOM))
// .then(response => response.json())