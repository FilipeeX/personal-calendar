// LOADER

function beginLoader() {
    
    let loader = document.getElementById("loader");
    let loadedContent = document.getElementById("loaded");

    loadedContent.style.display = "none";
    loader.style.display = "block";
}

function exitLoader() {

    let loader = document.getElementById("loader");
    let loadedContent = document.getElementById("loaded");

    loader.style.display = "none";
    loadedContent.style.display = "block";
}


// UTIL

function toList(htmlCollection) {
    let res = [];
    for (elem in htmlCollection) {
        res.push(elem);
    }
    return res;
}


// SIDEPANEL

let sidePanelExtended = false;


function extendSidePanel() {

    if (sidePanelExtended) {
        return;
    }

    const sidePanel = document.getElementById("sidepanel");
    const intervalId = setInterval(sidePanelExtendFrame);

    let frameState = -80;
    function sidePanelExtendFrame() {

        sidePanel.style.left = frameState + "px";
        frameState += 5;

        if (frameState == 0) {
            clearInterval(intervalId);
            sidePanelExtended = true;
        }
    }
}


function retractSidePanel() {

    if (!sidePanelExtended) {
        return;
    }

    const sidePanel = document.getElementById("sidepanel");
    const intervalId = setInterval(sidePanelExtendFrame);

    let frameState = 0;
    function sidePanelExtendFrame() {

        sidePanel.style.left = frameState + "px";
        frameState -= 5;

        if (frameState == -80) {
            clearInterval(intervalId);
            sidePanelExtended = false;
        }
    }
}