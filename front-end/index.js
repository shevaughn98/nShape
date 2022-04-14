const dumbellBtn = document.querySelector('#dumbbell-btn');
// const barsBtn = document.querySelector('#bars-btn');
const workoutList = document.querySelector('#workout-container');
const wrapper = document.querySelector('#wrapper');

dumbellBtn.addEventListener('click', handleClick);
// barsBtn.addEventListener('click', handleClick);

function handleClick(e) {
    // console.log(e.target)
   workoutList.style.display = 'grid';
   wrapper.style.display = 'none';
}

arms.addEventListener('click', displayWorkoutList);
arms.addEventListener('click', displayWorkoutList);
abs.addEventListener('click', displayWorkoutList);
fullbody.addEventListener('click', displayWorkoutList);
legs.addEventListener('click', displayWorkoutList);

let armsListTracker = 0;
let armsNameTracker = 0;

function displayWorkoutList(event) {
    const value = event.target.value
    
    fetch(`http://localhost:8085/workouts/${value}`)
    .then(res => res.json())
    .then(data => {
       selectedWorkout(value)

        data.forEach(data => {
            displaySelectedWorkoutInfo(data);
        })
    })
}

function selectedWorkout(type) {

    if (armsNameTracker !== 1) {
    // Workout Heading
    const selectedWorkout = document.createElement('h1');
    selectedWorkout.style.textAlign = 'center';
    // Horizontal Rouler
    const horizontalRuler = document.createElement('hr')

    selectedWorkout.innerText = type;
    modalContent.append(selectedWorkout);
    modalContent.appendChild(horizontalRuler)
    armsNameTracker += 1
    } else {
        return
    }
}

function displaySelectedWorkoutInfo(data) {
    const {name, reps, repsrepetition, video} = data;
    if (armsListTracker !== 4) {
  
    const listItem = document.createElement('li');
    listItem.style.listStyleType = 'none';
    // Workout's Name
    const workoutHeading = document.createElement('h3');
    workoutHeading.innerText = name;
    // Reps
    const workoutReps = document.createElement('h4');
    workoutReps.innerText = `${reps} reps of ${repsrepetition}`
    // Video
    const workoutVideoLink = document.createElement('a');
    workoutVideoLink.href = video;
    workoutVideoLink.target = "_blank"
    workoutVideoLink.innerText = `How to perform ${name}`
    // Ruler
    const horizontalRuler = document.createElement('hr')
    horizontalRuler.style.marginTop = '10px';
    horizontalRuler.style.border = '2px solid black';
    horizontalRuler.style.borderRadius = '5px';
    

    listItem.appendChild(workoutHeading)
    listItem.appendChild(workoutReps)
    listItem.appendChild(workoutVideoLink)
    listItem.appendChild(horizontalRuler)
    
    modalContent.appendChild(listItem)
    armsListTracker += 1
    } else {
        return
    }

}

module.exports = {
    selectedWorkout,
    displaySelectedWorkoutInfo
}