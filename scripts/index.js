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