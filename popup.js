console.log("Popup.js");

import { handleButtonClick } from './common.mjs';

document.addEventListener("DOMContentLoaded", function() {
    const modeToggleButton = document.getElementById("modeToggle");

    chrome.storage.local.get('isMasterMode', function(data) {
        const isMasterMode = data.isMasterMode ?? false;
        modeToggleButton.textContent = isMasterMode ? "Local" : "Cloud";
        modeToggleButton.classList.add("btn", "grey", "one", "modeToggle");
    });

    modeToggleButton.addEventListener("click", function() {
        chrome.storage.local.get('isMasterMode', function(data) {
            const isMasterMode = data.isMasterMode ?? false;
            const newMode = !isMasterMode;
            chrome.storage.local.set({ 'isMasterMode': newMode }, function() {
                modeToggleButton.textContent = newMode ? "Local" : "Cloud";
            });
        });
    });

    const actions = ["play", "pause", "forward", "backward", "toggle", "vol+", "vol-", "mute"];
    actions.forEach(action => {
        document.getElementById(action).addEventListener("click", function() {
            handleButtonClick(action);
        });
    });
});
