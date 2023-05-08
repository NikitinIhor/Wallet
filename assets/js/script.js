const myNote = document.querySelector('.my-note');
const ad = document.querySelector('.ad');
const remove = document.querySelector('.remove');
const popup = document.querySelector('.popup');
const category = document.querySelector('#category');
const text = document.querySelector('.text');
const deleteNote = document.querySelector('.delete-note');
const saveNote = document.querySelector('.save-note');
const noteItems = document.querySelector('.note-items');
const noteItem = document.querySelector('.note-item');
const deleteBtn = document.querySelector('.delete');
const noteBody = document.querySelector('.note-body');
const error = document.querySelector('.error');

let noteID = 0
let categoryName

ad.addEventListener('click', () => {
    popup.classList.add('show')
})

deleteNote.addEventListener('click', () => {
    popup.classList.remove('show')
    error.textContent = ''
    text.value = ''
    category.selectedIndex = 0
})

const newNote = () => {
    const note = document.createElement('div')
    note.classList.add('note-item')
    note.setAttribute('id', noteID)
    note.innerHTML = `
    <div class="note-name">${categoryName}</div>
    <button class="delete" onclick='deleteNewNote(${noteID})'>X</button>
    <div class="note-body">
        ${text.value}
    </div>`

    noteItems.appendChild(note)
    noteID++
    categoryColor(note)
};

const categoryNumber = () => {
    categoryName = category.options[category.selectedIndex].text
};

const createNewNote = () => {
    if (category.options[category.selectedIndex].value == "0") {
        error.textContent = `you have to choose category`
    }
    if (text.value == '') {
        error.textContent = 'write a description'
    }
    if (category.options[category.selectedIndex].value !== "0" && text.value !== '') {
        newNote()
        popup.classList.remove('show')
        text.value = ''
        category.selectedIndex = 0
        error.textContent=''
    }
};

const categoryColor = (category) => {
    switch (categoryName) {
        case "shop":
            category.style.backgroundColor = 'rgb(237, 117, 117)'
            break;
        case "cinema":
            category.style.backgroundColor = 'rgb(191, 249, 191)'
            break;
        case "hobby":
            category.style.backgroundColor = 'rgb(171, 171, 246)'
            break;
    }
};
const deleteNewNote = (id) => {
    const noteToDelete = document.getElementById(id)
    noteItems.removeChild(noteToDelete)
};

remove.addEventListener('click', ()=>{
    noteItems.textContent = ''
})

saveNote.addEventListener('click', createNewNote)