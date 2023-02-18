---
title: Vaccination API (Hack Kosice 2020)
demo: https://www.youtube.com/watch?v=tlS9eef9g_w&t=47s
description: An API to give descriptions and recommendations of vaccines based
  on different countries.
date: 2020-09-17T09:51:59.708Z
thumbnail: https://d112y698adiu2z.cloudfront.net/photos/production/software_photos/001/208/985/datas/gallery.jpg
---
#### Inspiration

We were inspired by the lack of collective information regarding the vaccination requirements for each country and the detailed description for each of these vaccinations.

#### What it does

The Vaccination API gets a vaccine information by requiring its name and returns its description, possible side effects, duration, administration, medical consideration (optional), whether it is required in an early age (optional). Also it gets the country requirements by the three lettered country code and returns the vaccinations required by the government, the vaccinations recommended by the government and a travel advise.

#### How we built it

To create this web app we are running the MERN stack, meaning MongoDB, Express, React and NodeJS. We initially built the whole app in NodeJS but then decided that we needed to have a way to show what we had created so the React app is being build and then hosted statically by express. All of this is being hosted on Heroku which hosts the front and backend on the same IP and port. We are also using MongoDB atlas so that our data is backed up and secure.

Centers for Disease Control and Prevention, Vaccines by Diaseases, <https://www.cdc.gov/vaccines/vpd/vaccines-diseases.html> has been used for the information regarding each vaccination. Travel recommendation data has been used from this site: <https://travelhealthpro.org.uk/country/>