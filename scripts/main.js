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