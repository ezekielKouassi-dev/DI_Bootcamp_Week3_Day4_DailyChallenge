let div = document.querySelector('.container');
let listTask = document.querySelector('.listTasks');
let formSection = document.querySelector('.form-section');
listTask.style.width = formSection.offsetWidth + "px";
div.style.height = window.innerHeight + "px";

let input = document.querySelector('input');

const tasks = [];

function addTask() {
    if(input.value.length == 0) {
        alert('veuillez entrer une tâche!');
        return;
    }
    createTask();

}

function createTask()  {


    // supprimer les taches affiché à l'écran avant de charger une nouvelle liste
    let secs = document.querySelectorAll('section');
    secs.forEach(element => {
        element.remove();
    })

    // ajouter la nouvelle tache à la liste
    tasks.push(input.value);

    tasks.forEach(element => {

        let section = document.createElement('section');
        section.classList.add('task-section');
        let delBtn = document.createElement('button');
        let delBtnText = document.createTextNode('X');
        delBtn.appendChild(delBtnText);
        delBtn.style.backgroundColor = "red";
        delBtn.style.marginLeft = "2px";

        let hr = document.createElement('hr');

        let inputCheckBox = document.createElement('input');
        inputCheckBox.setAttribute('type', 'checkbox');
        inputCheckBox.setAttribute('name', 'check');
        inputCheckBox.style.marginLeft = "2px";

        let paragrah = document.createElement('label');
        paragrah.setAttribute('for', 'check');
        let text = document.createTextNode(element);
        paragrah.appendChild(text);

        section.appendChild(delBtn);
        section.appendChild(inputCheckBox);
        section.appendChild(paragrah);

        listTask.style.display = 'flex';
        listTask.style.flexDirection = 'column';
        listTask.style.justifyContent = 'space-evenly';
        listTask.appendChild(section);
    });

    return;

}
let btnAdd = document.querySelector('button');
btnAdd.addEventListener('click', (event) => {
    addTask();
    event.preventDefault();
});

// TODO : faire la fonction pour supprimer ma liste

// TODO : faire la fonction pour supprimer une tâche

// TODO : faire la fonction pour achevé une tâche