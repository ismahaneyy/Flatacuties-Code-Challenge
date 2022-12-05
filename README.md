# Flatacuties-Code-Challenge
- we are required to create an app called Flatgram were we can vote for the cutest animal.

## Description
- This is a code challenge meant to test on skills acquired in the second week of this Phase.

## Prerequisites
- In order for you to use the content on this repo ensure you have the following:

    - A computer that runs on either of the following; (Linux, Mac OS and Windows)

    - nodejs 9.0+

    - node v14.17.4 and above

    - npm 6.14.14 and above

    - Vue 2.6.11

- Status:

    - maintained, and is currently in development
- Version:

    - v0.1.0
## Setup instructions
- To use this repository on your machine requires some simple steps:

    - Open a terminal / command line interface on your computer

- Clone the repo by using the following to create a copy on your local machine:

    - git clone git@github.com:ismahaneyy/Flataculties-Code-Challenge.git

- Change directory to the repo folder:

    - cd Flatacuties-Code-Challenge

- Open it in Visual Studio Code

    - code .

- run this command to get backend started:
    - json-server--watch db.json

- test server by copy-pasting this URL in postman or browser
    - "http://localhost:3000/characters"

## Core Deliverables
- As a user, I can:

- See a list of all animal names. You will need to make a GET request to the following endpoint to retrieve        the character data
- GET /characters

- Example Response:

   {

     "id": 1,

     "name": "Mr. Cute",

     "image": "https://thumbs.gfycat.com/EquatorialIckyCat-max-1mb.gif",

     "votes": 0

   },

   {

     "id": 2,

     "name": "Mx. Monkey",

     "image": "https://thumbs.gfycat.com/FatalInnocentAmericanshorthair-max-1mb.gif",

     "votes": 0   }, ….]
- Click on an animal’s name to see its details i.e image and number of votes. Note, you should only be displaying  the details of one animal at a time. You can either use the character information from your first request or make a new request to this endpoint to get the character's details 
GET /characters/:1

- Example Response: 
{

     "id": 1,

     "name": "Mr. Cute",

     "image": "https://thumbs.gfycat.com/EquatorialIckyCat-max-1mb.gif",

     "votes": 0

   },
 

- When going live, you can press any animal's name then enter the votes then press add vote and there is also a reset button that resets the votes to zero.

## Author
Ismahan Abdirizak

## License
MIT
