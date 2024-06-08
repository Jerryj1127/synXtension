// background.js

import { sendActionToContent, handleButtonClick } from './common.mjs';

const urlTest = 'https://synxtension.onrender.com/get';


function getFromServer() {
    chrome.storage.local.get('isMasterMode', data => {
        const isMasterMode = data.isMasterMode ?? false;
        if (isMasterMode) { 
            fetch(urlTest)
            .then(response => response.ok ? response.text() : console.log(`Unexpected response status: ${response.status}`))
            .then(data => {
                    if (data && data !== "None" && data !== "This service has been suspended by its owner.") {
                        const action_ = data.trim();
                        console.log("remote action: ", action_);
                        sendActionToContent({ action: action_ });
                    }
                })
            .catch(error => console.log("Error:", error));
        }
    });
}

setInterval(getFromServer, 500);


chrome.commands.onCommand.addListener(command => {
    console.log("shortcut: ", command);
    const actions = {
        "playVideo": "play",
        "pauseVideo": "pause",
        "toggleVideo": "toggle",
        "forward": "forward",
        "backward": "backward",
        "vol+": "vol+",
        "vol-": "vol-"
    };
    if (actions[command]) {
        handleButtonClick(actions[command]);
    }
});
