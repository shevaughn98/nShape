const armsButton = document.querySelector(".arms");
const absButton = document.querySelector(".abs");
const fullBodyButton = document.querySelector(".fullbody");
const legsButton = document.querySelector(".legs");


const armModalContent = document.querySelector(`#modal-content-1`)
const absModalContent = document.querySelector(`#modal-content-2`)
const fullBodyModalContent = document.querySelector(`#modal-content-3`)
const legsModalContent = document.querySelector(`#modal-content-4`)

armsButton.addEventListener("click", displayWorkoutList)
absButton.addEventListener("click", displayWorkoutList)
fullBodyButton.addEventListener("click", displayWorkoutList)
legsButton.addEventListener("click", displayWorkoutList)

let armsListTracker = 0;
let armsNameTracker = 0;

let absListTracker = 0;
let absNameTracker = 0;

let fullBodyListTracker = 0;
let fullBodyNameTracker = 0;

let legsListTracker = 0;
let legsNameTracker = 0;

function displayWorkoutList(event) {
    const value = event.target.value
    console.log(value)

    fetch(`http://localhost:8085/workouts/${value}`)
        .then(res => res.json())
        .then(data => {

            if (value === "arms") {
                selectedWorkoutArms(value)

                data.forEach(data => {
                    displaySelectedWorkoutInfoArms(data);
                })
            }
            if (value === "abs") {
                selectedWorkoutAbs(value)

                data.forEach(data => {
                    displaySelectedWorkoutInfoAbs(data);
                })
            }
            if (value === "fullbody") {
                selectedWorkoutFullBody(value)

                data.forEach(data => {
                    displaySelectedWorkoutInfoFullBody(data);
                })
            }
            if (value === "legs") {
                selectedWorkoutLegs(value)

                data.forEach(data => {
                    displaySelectedWorkoutInfoLegs(data);
                })
            }
        })
}



// Arms
// 
// 
// 
// 
function selectedWorkoutArms(type) {

    if (armsNameTracker !== 1) {
        // Workout Heading
        const selectedWorkout = document.createElement('h1');
        selectedWorkout.style.textAlign = 'center';
        // Horizontal Rouler
        const horizontalRuler = document.createElement('hr')

        selectedWorkout.innerText = type;
        armModalContent.append(selectedWorkout);
        armModalContent.appendChild(horizontalRuler)
        armsNameTracker += 1
    } else {
        return
    }
}

function displaySelectedWorkoutInfoArms(data) {
    const { name, reps, repsrepetition, video } = data;
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

        armModalContent.appendChild(listItem)
        armsListTracker += 1
    } else {
        return
    }

}

// Abs
// 
// 
// 
// 
// 

function selectedWorkoutAbs(type) {

    if (absNameTracker !== 1) {
        // Workout Heading
        const selectedWorkout = document.createElement('h1');
        selectedWorkout.style.textAlign = 'center';
        // Horizontal Rouler
        const horizontalRuler = document.createElement('hr')

        selectedWorkout.innerText = type;
        absModalContent.append(selectedWorkout);
        absModalContent.appendChild(horizontalRuler)
        absNameTracker += 1
    } else {
        return
    }
}

function displaySelectedWorkoutInfoAbs(data) {
    const { name, reps, repsrepetition, video } = data;
    if (absListTracker !== 4) {

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

        absModalContent.appendChild(listItem)
        absListTracker += 1
    } else {
        return
    }

}

// Full Body 
// 
// 
// 
// 

function selectedWorkoutFullBody(type) {

    if (fullBodyNameTracker !== 1) {
        // Workout Heading
        const selectedWorkout = document.createElement('h1');
        selectedWorkout.style.textAlign = 'center';
        // Horizontal Rouler
        const horizontalRuler = document.createElement('hr')

        selectedWorkout.innerText = type;
        fullBodyModalContent.append(selectedWorkout);
        fullBodyModalContent.appendChild(horizontalRuler)
        fullBodyNameTracker += 1
    } else {
        return
    }
}

function displaySelectedWorkoutInfoFullBody(data) {
    const { name, reps, repsrepetition, video } = data;
    if (fullBodyListTracker !== 4) {

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

        fullBodyModalContent.appendChild(listItem)
        fullBodyListTracker += 1
    } else {
        return
    }

}

// Legs
// 
// 
// 
// 

function selectedWorkoutLegs(type) {

    if (legsNameTracker !== 1) {
    // Workout Heading
    const selectedWorkout = document.createElement('h1');
    selectedWorkout.style.textAlign = 'center';
    // Horizontal Rouler
    const horizontalRuler = document.createElement('hr')

    selectedWorkout.innerText = type;
    legsModalContent.append(selectedWorkout);
    legsModalContent.appendChild(horizontalRuler)
    legsNameTracker += 1
    } else {
        return
    }
}

function displaySelectedWorkoutInfoLegs(data) {
    const {name, reps, repsrepetition, video} = data;
    if (legsListTracker !== 4) {

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

    legsModalContent.appendChild(listItem)
    legsListTracker += 1
    } else {
        return
    }

}



















// Modal 1
const modal1 = document.querySelector("#modal1");
const trigger1 = document.querySelector("#trigger1");
const closeButton1 = document.querySelector("#close-button1");

function toggleModal1() {
    modal1.classList.toggle("show-modal");
}

function windowOnClick1(event) {
    if (event.target === modal1) {
        toggleModal1();
    }
}

trigger1.addEventListener("click", toggleModal1);
closeButton1.addEventListener("click", toggleModal1);
window.addEventListener("click", windowOnClick1);

// Modal 2
const modal2 = document.querySelector("#modal2");
const trigger2 = document.querySelector("#trigger2");
const closeButton2 = document.querySelector("#close-button2");

function toggleModal2() {
    modal2.classList.toggle("show-modal");
}

function windowOnClick2(event) {
    if (event.target === modal2) {
        toggleModal2();
    }
}

trigger2.addEventListener("click", toggleModal2);
closeButton2.addEventListener("click", toggleModal2);
window.addEventListener("click", windowOnClick2);

// Modal 3
const modal3 = document.querySelector("#modal3");
const trigger3 = document.querySelector("#trigger3");
const closeButton3 = document.querySelector("#close-button3");

function toggleModal3() {
    modal3.classList.toggle("show-modal");
}

function windowOnClick3(event) {
    if (event.target === modal3) {
        toggleModal3();
    }
}

trigger3.addEventListener("click", toggleModal3);
closeButton3.addEventListener("click", toggleModal3);
window.addEventListener("click", windowOnClick3);

// Modal 4
const modal4 = document.querySelector("#modal4");
const trigger4 = document.querySelector("#trigger4");
const closeButton4 = document.querySelector("#close-button4");

function toggleModal4() {
    modal4.classList.toggle("show-modal");
}

function windowOnClick4(event) {
    if (event.target === modal4) {
        toggleModal4();
    }
}

trigger4.addEventListener("click", toggleModal4);
closeButton4.addEventListener("click", toggleModal4);
window.addEventListener("click", windowOnClick4);

