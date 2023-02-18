---
title: Get Out (GUH 2021 submission)
demo: https://www.youtube.com/watch?v=rMMyuKlneEg
description: Know how long it takes to get out of the airport and to your rental car.
date: 2021-11-28T13:35:24.283Z
thumbnail: https://d112y698adiu2z.cloudfront.net/photos/production/software_thumbnail_photos/001/755/581/datas/medium.png
---
The website allows a customer who wants to rent a car to find out how long it will take to pass through security in the airport they are arriving at (with a mean squared error of 2.38) and how long it will take to get from the airport to the rental depot depending on the means of transportation they are going to use (with a mean squared error of 1.15). However, all of a sudden the Nuclear Fallout begins so an alert pops up on the screen and the user is being prompted with useful information on tips to survive: places to escape to and objects he could use for protection.

#### How we built it

We implemented a deep learning model for predicting the times in python using TensorFlow. Then we hosted the model on Google App Engine using a Flask server. The user interface was implemented in React and hosted on Netlify. Several API calls were made to convert the airport code into coordinates and city names. Additionally, we used external APIs to find closeby cities that we can recommend to the user.