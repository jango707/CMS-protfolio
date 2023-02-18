---
title: FioNa Chat my Bank (HackTheBurgh 2020)
demo: https://www.youtube.com/watch?v=xLjs5sES27E
description: A chatbot, that brings financial advice closer to the inexperienced user.
date: 2020-03-04T10:59:58.291Z
thumbnail: https://d112y698adiu2z.cloudfront.net/photos/production/software_photos/000/950/191/datas/gallery.jpg
---
#### Inspiration

We were inspired by the the lack of people that have access to financial information and the fact that with an increasingly cashless society people don't know where ATM's are anymore!

#### What it does

For this reason we have build a facebook chatbot that interfaces with the openBanking API to gather financial data about accessable current accounts and ATM. We then use user input to try and match a person to an appropriate account. We also find people the nearest ATM and the most common provider of ATM's in a city.

#### How we built it

We are using Googles DialogueFlow to parse user input. This interfaces with a backend that uses Flask in python that's made publicly available. This backend then interfaces with the OpenBanking API to process and serve relevant data to the DialogueFlow which we can then use to have personalized interactions with the user.