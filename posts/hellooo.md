---
title: RelaxLane (HackUPC Barcelona submission)
author: me
demo: https://devpost.com/software/relaxlane
description: A mobile multiplayer gaming app that tracks your heartbeat to
  determine the difficulty.
date: 2019-10-10T18:06:23.090Z
thumbnail: https://challengepost-s3-challengepost.netdna-ssl.com/photos/production/software_photos/000/859/581/datas/gallery.jpg
---
### Inspiration

We really wanted to make something that involved hardware that would interact with software for this hackathon since we wanted to learn more about this. We had a couple of ideas but this one seemed the most practical and appealing.

### What it does

It is a simple retro-themed multiplayer game that you can play online. The difficulty of the game depends on your heartbeat which we tracked using a Mi Band 2 provided to us by the hackathon organisers. The goal of the game is to remain as calm as possible. The calmer you are, the more rewards you get, and the more stressed out you are the fewer you get. We determine whether you are tired or not by finding your initial heartbeat (when you start the game) and then comparing it to your present heartbeat. This is done by collecting 5 data points on startup and then finding their average.

### How we built it

We built the backend server for connecting to a Mi Band 2 and then transmitting that data using a mix of JavaScript and Node.js. The two communicated between each other using XMLHTTPRequests. We built the game in C# using Unity.

### Challenges we ran into

To get the data from the fitness tracker to our game we were initially expecting to find an API provided by the manufacturers themselves. Unfortunately, this was not the case to be. We had to write the entire backend server simply to serve this purpose. This was a very complicated process but luckily the data we received was un-encrypted so after all of this our efforts did not go to waste. After this, the next challenge was sending the data from Node.js to our game in C#. We considered several options such as setting up a WebSocket to continuously transmit this data from one place to another. However, we implemented an option we consider to be better in terms of storage and processing. We made a simple JSON file on the local device and kept on updating the data in there. At any given point, that file only contained one data point -- the latest one. In C# then we simply opened and read the JSON file periodically to find the current heartbeat of the user.

### What we learned

We learned to work with hardware, about communication protocols, WebSockets, backend servers using Node.js, and how a multiplayer game works behind the scenes. Most important of all, we learned a lot about working under time pressure. Since this was all very new to us and we chose this project to test our limits, we had to make sure we were managing our time well between, research, development and production.