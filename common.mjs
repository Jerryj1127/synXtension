// common.mjs

export async function sendActionToContent(msg) {
    const urlPatterns = [
        'https://cinemakananam.onrender.com/stream/*',
        'file:///Users/jerry/*'
    ];

    let tabs = [];
    for (let pattern of urlPatterns) {
        const queryInfo = { url: pattern };
        tabs = await new Promise(resolve => {
            chrome.tabs.query(queryInfo, resolve);
        });
        if (tabs.length > 0) break;
    }

    if (tabs.length === 0) {
        console.error('No matching tabs found');
        return;
    }

    const tabId = tabs[0].id;
    for (let i = 0; i < 2; i++) {
        try {
            return await chrome.tabs.sendMessage(tabId, msg);
        } catch {
            await chrome.scripting.executeScript({
                target: { tabId },
                files: ['content.js'],
            });
        }
    }
}

function postToServer(action_) {
    const currentTime = Math.floor(Date.now() / 1000);
    const data = new URLSearchParams();
    data.append('action', action_);
    data.append('timestamp', currentTime);

    fetch('https://synxtension.onrender.com/set', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: data
    })
    .then(response => response.text())
    .then(data => console.log(data))
    .catch(error => console.error("Error sending message:", error));
}

export function handleButtonClick(action) {
    chrome.storage.local.get('isMasterMode', data => {
        const isMasterMode = data.isMasterMode ?? false;
        if (!isMasterMode) {
            postToServer(action);
        } else {
            sendActionToContent({ action });
        }
    });
}
