// beginLoader() // should be already done by default
setTimeout(exitLoader, 1500); // the loader animation takes 1.5s


// check if the article tag in the calendar-task is long enough for 2 lines, if it's not, then extra bottom margin is applied
// do this in a separate method somewhere
let messages = [...document.getElementsByClassName("calendar-task__message")];

for (let i = 0; i < messages.length; i++) {

    let message = messages[i];

    if (message.innerHTML.length <= 16) {
        message.style.marginBottom = "28px";
    }
};


const tasks = [...document.getElementsByClassName("calendar-task")];

const hoveredExcludingChildren = new Map();
const hoveredIncludingChildren = new Map();

document.addEventListener("mouseover", registerHover);
document.addEventListener("mouseout", registerOut);


function registerHover(event) {

    let target = event.target;

    hoveredExcludingChildren.set(target, true);

    let stepElem = target;
    
    while (stepElem.parentElement != null) {
        hoveredIncludingChildren.set(stepElem, true);
        stepElem = stepElem.parentElement;
    }
}

function registerOut(event) {

    let target = event.target;

    hoveredExcludingChildren.set(target, false);

    let stepElem = target;

    while (stepElem.parentElement != null) {
        hoveredIncludingChildren.set(stepElem, false);
        stepElem = stepElem.parentElement;
    }
}

setInterval(function(){
    checkTaskControls();
    checkSidepanel();
});

function checkTaskControls() {
    for (taskIndex in tasks) {

        let task = tasks[taskIndex];
        let controls = task.querySelector(".calendar-controls");

        if (hoveredIncludingChildren.get(task)) {
            controls.style.display = "block";
        } else {
            controls.style.display = "none";
        };

    };
};


// SIDE PANEL

function checkSidepanel() {

    let sidePanel = document.getElementById("sidepanel");

    if (hoveredIncludingChildren.get(sidePanel)) {
        sidePanel.style.left = "0px";
    } else {
        sidePanel.style.left = "-76px";
    };
    
}