document.addEventListener("DOMContentLoaded", loadNotes);

function getNotes() {
    return JSON.parse(localStorage.getItem("notes")) || [];
}

function saveNotes(notes) {
    localStorage.setItem("notes", JSON.stringify(notes));
}

function getCurrentTime() {
    return new Date().toLocaleString();
}

function addNote() {
    const text = document.getElementById("noteInput").value.trim();
    const category = document.getElementById("category").value;
    const priority = document.getElementById("priority").value;

    if (!text) return alert("Enter a note!");

    const notes = getNotes();

    notes.push({
        text,
        category,
        priority,
        date: getCurrentTime()
    });

    saveNotes(notes);
    document.getElementById("noteInput").value = "";
    loadNotes();
}

function loadNotes(filteredNotes = null) {
    const notesList = document.getElementById("notesList");
    notesList.innerHTML = "";

    const notes = filteredNotes || getNotes();

    notes.forEach((note, index) => {

        const li = document.createElement("li");
        li.classList.add(`priority-${note.priority}`);

        li.innerHTML = `
            <div class="note-header">
                <strong>${note.text}</strong>
                <small>${note.date}</small>
            </div>
            <div>Category: ${note.category}</div>
            <div>Priority: ${note.priority}</div>
            <div class="actions">
                <button onclick="editNote(${index})">Edit</button>
                <button onclick="deleteNote(${index})">Delete</button>
            </div>
        `;

        notesList.appendChild(li);
    });
}

function deleteNote(index) {
    const notes = getNotes();
    notes.splice(index, 1);
    saveNotes(notes);
    loadNotes();
}

function editNote(index) {
    const notes = getNotes();
    const li = document.getElementById("notesList").children[index];

    li.innerHTML = `
        <input type="text" id="editInput" value="${notes[index].text}">
        <button onclick="saveEdit(${index})">Save</button>
    `;
}

function saveEdit(index) {
    const newText = document.getElementById("editInput").value.trim();
    if (!newText) return alert("Cannot be empty");

    const notes = getNotes();
    notes[index].text = newText;
    notes[index].date = getCurrentTime();

    saveNotes(notes);
    loadNotes();
}

function clearAll() {
    if (confirm("Are you sure you want to delete all notes?")) {
        localStorage.removeItem("notes");
        loadNotes();
    }
}

function searchNotes() {
    const searchValue = document.getElementById("searchInput").value.toLowerCase();
    const notes = getNotes();

    const filtered = notes.filter(note =>
        note.text.toLowerCase().includes(searchValue)
    );

    loadNotes(filtered);
}

function toggleTheme() {
    document.body.classList.toggle("dark");
}
