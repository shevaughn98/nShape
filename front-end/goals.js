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
    // Destructing the api data into individual varibales 
    const { goals_id, title, description } = data;

    // Rendering Goal to the website
    const listItem = document.createElement('li');
    listItem.id = goals_id;
    listItem.innerText = `${title}`
    // Adding a function to the goal
    listItem.onclick = editGoal(description)
    goalsList.append(listItem)
}

// Creating New Goals
const addButton = document.querySelector('#addBtn')
const titleInputBox = document.querySelector('#myTitleInput')
const descriptionInputBox = document.querySelector('#myDescInput')


addButton.addEventListener('click', createNewGoal)

function createNewGoal(event) {
    // Getting the value of the input field
    const newTitle = titleInputBox.value;
    const newDescription = descriptionInputBox.value;
   
    // If either the title or description is missing
    // the user will be notfied with an alert
    if (newTitle === "" || newDescription === "") {
        alert("Please enter title or description")
        return
    }

    fetch('http://localhost:8085/goals', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        // Gets the input data, converts into JSON, and sends into the server
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