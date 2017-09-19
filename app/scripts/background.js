console.log("background.js loaded");

chrome.extension.onMessage.addListener(function(msg, sender, callback) {
    if (typeof msg === 'object') {
        console.log("background.js: message received: ", msg);
    } else {
        console.log("background.js: message received: " + msg);
    }

    if (msg.clicks) {
        setLocalStorage('Extension_clicks', msg.clicks);
    }

    console.log('background.js: sending response');
    callback({
        from: 'background.js',
        msg: 'From background.js: Hi ' + msg.from + '! Got your message.'
    });
});

function getLocalStorage(field) {
    return localStorage.getItem(field);
}

function setLocalStorage(field, value) {
    localStorage.setItem(field, value);
}
