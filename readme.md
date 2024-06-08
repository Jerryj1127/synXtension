
# synXtension

## Overview

synXtension is a browser extension designed to control video playback on supported websites from both local and remote machines. It provides a convenient interface for people watching together to interact with video controls such as play, pause, forward, backward, volume adjustment, and mute. Whether you’re having a fun night with friend or watching movies with your long-distance partner, synXtension ensures a synchronized viewing experience, making it perfect for virtual watch parties.

## Features

- **Video Playback Control**: Control video playback on another machine with buttons for play, pause, toggle, forward, backward, volume up, volume down, and mute.

- **Mode Toggle**: Alows one machine to become the Streamer which the other viewers can control through this extension.
    ``` 
    'Local' -> To be set on the machine that is streaming the video.
    'Cloud' -> To be set on the device who is viewing the stream.
    ```

- **Keyboard Shortcuts**: Utilize keyboard shortcuts for quick access to common actions such as toggle video, skip forward, increment volume, and decrement volume.

    ```
      CTRL + SHIFT + SPACE -> Toogle video playback
      CTRL + SHIFT + UP -> Increment volume 10%
      CTRL + SHIFT + DOWN -> Decrement volume 10%
      CTRL + SHIFT + Right -> skip 5 seconds 
    ```

    Due to Chrome's limitation, only 4 shortcuts are possible.
    Feel free to change the current ones in manifest, I have added handlers for each case. So any changes should work smooth. 



## Usage

1. Clone the repo.
2. Change the Config (like the website you want to visit or cutom server endpoints).
3. Open Chrome and navigate to extensions menu. Enable developer mode from right top of the page.
4. Select 'Load unpacked' and select the directory that you've cloned. 
5. Optionally, toggle between master mode and regular mode for different control behaviors.



## Tech Talk

**Client:** HTML, CSS and JS

**Server:** Flask + Gunicorn @ Python, hosted on Render

####  How does it work ? 
While in LOCAL mode, the extension scans for a change in an api endpoint and implementing it locally when there's one.

In CLOUD mode, every action (button click + keyboard shorcut) is send through to the server which is then relayed to the LOCAL mode.



## Limitations

As of now, only two people can use this for streaming together. Support for watch party (multiple users) will be added on later versions.  

## Roadmap

- Add support for major streaming platforms.

- Add multiuser support

- Implement 'rooms'

- Fix UI :(


## License

This project is licensed under the [GNU GPLv3 License](https://www.gnu.org/licenses/gpl-3.0.en.html#license-text).

## Support

For support, contact through [Telegram](https://t.me/popcornarmy) or join the [discussion channel](https://t.me/synXtension).
