console.log("index.js loaded");

var clicksField = document.getElementById('clicks');

function getLocalStorage(field) {
    return localStorage.getItem(field);
}

function setLocalStorage(field, value) {
    localStorage.setItem(field, value);
}

function updateClicks() {
    var clicks = getLocalStorage('Extension_clicks'),
        clicksField = document.getElementById('clicks');

    if (clicksField) {
        clicksField.innerText = clicks;
    } else {
        alert('index.js: updateClicks: Something broke');
    }
}

updateClicks();
