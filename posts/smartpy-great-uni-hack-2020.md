---
title: SmartPy (Great Uni Hack 2020)
demo: https://www.youtube.com/watch?v=0jAazC94Dh4
description: An app that produces automated test flashcards for any text input.
date: 2020-11-12T11:58:18.288Z
thumbnail: https://d112y698adiu2z.cloudfront.net/photos/production/software_photos/001/298/998/datas/gallery.jpg
---
SmartPy takes any text input paragraph and uses NLP to find the keywords in the text. It then checks the frequency of these words and lists the most important ones together with their definitions. It then compiles these into "Q" cards where students can test their knowledge on the given paragraph. They can hover over the cards to reveal their definitions and test themselves. The idea is that people paste pages from their textbook or their notes into the box, and then we can create tests for each individual page. This will give them a great way to regularly test themselves on content they have learned.

### How we built it

We first started using NLP libraries in basic python to find the keywords in text. While doing this we worked on creating a Django server and building the front end of the site. We then found an API for getting definitions of the keywords. Once we had the parts ready we integrated it all together and made it look pretty!

Check out the devpost entry: <https://devpost.com/software/smartpy>