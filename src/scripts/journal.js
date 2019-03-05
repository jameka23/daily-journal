/*
    Define the keys and value for a JavaScript object that
    represents a journal entry about what you learned today
*/
let journal_entries = [
    {
        entry_date: "March 1, 2019",
        concepts: "Men and Women in Tech",
        entry: "Today I learned that men in fact do not know what they are talking about. ",
        mood: "Happy"
    },

    {
        entry_date: "February 28, 2019",
        concepts: "Functions and Objects",
        entry: "I learned more about JavaScript and their functions. I had recently looked at functions and things change all the time. We also talked about the big arrow functions. I'm feeling more comfortable with it. ",
        mood: "Happy"
    },

    {
        entry_date: "February 27, 2019",
        concepts: "Presentations",
        entry: "We presented our projects today and that was fun yet a disaster because we didn't finish our project.",
        mood: "Sad"
    },

    {
        entry_date: "February 26, 2019",
        concepts: "Manipulating the DOm",
        entry: "Today we learned about manipulating the DOM and how we would be making a lot of home page with javascript instead of html.",
        mood: "Sad"
    }
];

// add the journal entries into the array
// journal_entries.push(objectsJournalEntry1);

// journal_entries.push(objectsJournalEntry2);

// journal_entries.push(objectsJournalEntry3);

// journal_entries.push(objectsJournalEntry4);
console.table(journal_entries);


/*
    Purpose: To create, and return, a string template that
    represents a single journal entry object as HTML

    Arguments: journalEntry (object)

*/
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