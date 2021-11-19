---
title: WaterWatch (TreeHacks 2021)
demo: https://www.youtube.com/watch?v=yOAbfYdX8DY&t=1s
description: Watch your water consumption on your wrist.
date: 2021-03-09T12:06:32.723Z
thumbnail: https://challengepost-s3-challengepost.netdna-ssl.com/photos/production/software_photos/001/396/335/datas/gallery.jpg
---
**WaterWatch** is an app on the *Apple Watch* that allows the user to press buttons on actions that uses water and sends that data to a database. This data can be seen on a web app and shows a bucket of how much water you should use on daily basis. Depending on how much is used, the bucket will show what is left and will allow the user to 'water a tree'. This tree can grow depending on how much water is fed to it. The goal of the user is to keep their water consumption at a sustainable level and allow enough water in their bucket to feed the tree and let it grow.

#### How we built it

We built an Apple Watch App that connects to a Firebase database, which is accessed by a ReactJS app. We built the App with XCode and Swift for WearOS, and the web app is built using React and hosted over Firebase.