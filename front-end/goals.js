// Rendering Goals
fetch(`http://localhost:8085/goals`)
    .then(response => response.json())
    .then(data => {
        data.forEach(data => {
            renderListItem(data)
        })
    })

const goalsList = document.querySelector('#myUL')

function renderListItem(data) {
    const { goals_id, title, description } = data;

    const listItem = document.createElement('li');
    listItem.id = goals_id;
    listItem.innerText = `${title}`
    listItem.onclick = editGoal(description)
    // console.log(listItem)
    goalsList.append(listItem)
}

// Creating New Goals
const addButton = document.querySelector('#addBtn')
const titleInputBox = document.querySelector('#myTitleInput')
const descriptionInputBox = document.querySelector('#myDescInput')


addButton.addEventListener('click', createNewGoal)

function createNewGoal(event) {
    const newTitle = titleInputBox.value;
    const newDescription = descriptionInputBox.value;
   
    if (newTitle === "" || newDescription === "") {
        alert("Please enter title or description")
        return
    }

    fetch('http://localhost:8085/goals', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title: newTitle, description: newDescription })
    })
        .then(res => res.json())
        .then(data => {
            renderListItem(data)
        })
}

// Editing Goals



function editGoal(description) {
    console.log(description)
}



// Mark Goals as Completed
function markGoalAsCompleted() {
    
}