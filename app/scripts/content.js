console.log("content.js loaded");

var contentClicks = 0,
    docBody = document.getElementsByTagName('body');

chrome.runtime.onMessage.addListener(function(msg) {
    if (typeof msg === 'object') {
        console.log("content.js: message received: ", msg);
    } else {
        console.log("content.js: message received: " + msg);
    }
});

function clickBody() {
    console.log('content.js: clickBody: sending message...');
    chrome.runtime.sendMessage({
        from: 'content.js',
        clicks: ++contentClicks,
        responseRequired: true
    }, function (response) {
        console.log('content.js: clickBody: message sent.');
        if (response) {
            console.log('content.js: clickBody: response:', response);
        } else {
            console.log('content.js: clickBody: No response received.');
        }
    });
}

if (docBody && docBody.length) {
    docBody[0].onclick = clickBody;
}
