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

    tasks.push(input.value);

    let section = document.createElement('section');
    section.classList.add('task-section');
    let delBtn = document.createElement('button');
    let delBtnText = document.createTextNode('X');
    delBtn.appendChild(delBtnText);
    delBtn.style.backgroundColor = "red";
    delBtn.style.marginLeft = "2px";

    let inputCheckBox = document.createElement('input');
    inputCheckBox.setAttribute('type', 'checkbox');
    inputCheckBox.setAttribute('name', 'check');
    inputCheckBox.style.marginLeft = "2px";

    let paragrah = document.createElement('label');
    paragrah.setAttribute('for', 'check');
    let text = document.createTextNode(input.value);
    paragrah.appendChild(text);

    section.appendChild(delBtn);
    section.appendChild(inputCheckBox);
    section.appendChild(paragrah);

    listTask.style.display = 'flex';
    listTask.style.flexDirection = 'column';
    listTask.style.justifyContent = 'space-evenly';
    listTask.appendChild(section);
    

    console.log(section);

}
let btnAdd = document.querySelector('button');
btnAdd.addEventListener('click', (event) => {
    addTask();
    event.preventDefault();
});

// TODO : faire la fonction pour supprimer ma liste

// TODO : faire la fonction pour supprimer une tâche

// TODO : faire la fonction pour achevé une tâche