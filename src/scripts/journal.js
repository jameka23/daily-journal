/*
    Main application logic that uses the functions and objects
    defined in the other JavaScript files.

    Change the fake variable names below to what they should be
    to get the data and display it.
*/
// let apiEntries = API.getJournalEntries()
// console.log(apiEntries)
API.getJournalEntries().then(functionThatRendersData)

const saveButton = document.querySelector("#save--button");
saveButton.addEventListener("click", saveButtonHandler);