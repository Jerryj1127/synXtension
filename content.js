// content.js

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    const video = document.querySelector("video");
    if (!video) return;

    switch (request.action) {
        case "play":
            video.play();
            break;
        case "pause":
            video.pause();
            break;
        case "forward":
            video.currentTime += 5;
            break;
        case "backward":
            video.currentTime -= 5;
            break;
        case "toggle":
            video.paused ? video.play() : video.pause();
            break;
        case "mute":
            video.muted = !video.muted;
            break;
        case "vol+":
            video.volume = Math.min(video.volume + 0.1, 1);
            break;
        case "vol-":
            video.volume = Math.max(video.volume - 0.1, 0);
            break;
    }
});
