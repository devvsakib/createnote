const inputNote = document.querySelector('#inputNote');
funcy();
inputNote.addEventListener('click', () => {
    let addNote = document.getElementById('addNote');
    let localData = localStorage.getItem('noteSame');
    if (localData == null) {
        allnote = [];
    }
    else {
        allnote = JSON.parse(localData);
    }
    allnote.push(addNote.value);
    localStorage.setItem('noteSame', JSON.stringify(allnote));
    addNote.value = "";
    funcy();
});

function funcy() {
    let localData = localStorage.getItem('noteSame');
    if (localData == null) {
        allnote = [];
    }
    else {
        allnote = JSON.parse(localData);
    }
    let html = '';
    allnote.forEach(function (e, index) {
        html += `
        <div class="card my-2 col-sm-2 mx-3" style="">
        <div class="card-body">
        <h5 class="card-title">Note ${index + 1}</h5>
        <p class="card-text">${e}</p>
        <button id="${index}" onclick="deleteNote(this.id)" class="btn btn-outline-danger">Delete</button>
        </div>
        </div>
        `
    });
    let pushNote = document.getElementById('pushNote');
    if (allnote.length != 0) {
        pushNote.innerHTML = html;
    }
    else {

        pushNote.innerHTML = `No Notes Here`;
    }
}

function deleteNote(index) {
    let localData = localStorage.getItem('noteSame');
    if (localData == null) {
        allnote = [];
    }
    else {
        allnote = JSON.parse(localData);
    }
    allnote.splice(index, 1);
    localStorage.setItem('noteSame', JSON.stringify(allnote));
    funcy();
};

let txtSearch = document.getElementById('txtSearch');

txtSearch.addEventListener('input', () => {
    let getinputTxt = txtSearch.value.toLowerCase();
    Array.from(document.getElementsByClassName("card")).forEach(element => {
        let getTxt = element.getElementsByTagName("p")[0].innerText;
        if (getTxt.includes(getinputTxt)) {

            element.style.display = "block";

        }
        else {
            element.style.display = "none";
        }
    });

});