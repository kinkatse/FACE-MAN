<h1> **Proposal** </h1>
_Kin Ka Tse_

<h3> **Background** </h3>

This is a motion detection game that runs like PAC-MAN except by using your face. This allows you to be interactive with the obstacles involved in the game. This game would use technologies like Javascript, Canvas, Node.js, HTML, CSS. The motion detection is a variation of algorithms of pixel values of video frames to determine movement in a certain area.

You would center your head in the area of detection and then press start to avoid obstacles (Ghosts) or eat pellets for points. The way to eat pellets would be to turn your head in the direction they come from. For simplicity and time, I would only make the pellets come from left or right. The Ghosts (if I have time to) will be obstacles to avoid which will require the player to move their head out of the motion detection area to dodge.

<h3> **Functionality & MVPs** </h3>

In FACE-MAN, the app will:

1. Detect motion in a given area
2. Make pellets 'edible' for points
3. Make ghosts as obstacles
4. Increase in difficulty as time passes

In addition, this project will include:

1. An About modal describing the rules of the game and how to play
2. A production README

<h3> **Wireframes** </h3>

![Image of Yaktocat](https://media.discordapp.net/attachments/597985513701376013/869198239096770570/FACE-MAN_Wireframes.png?width=894&height=670)

* Nav links include links to this project's Github repo, my LinkedIn, How to Play and About modal.
* Main Title is on the top right of the navigation bar.
* Score is top right under the navigation bar.
* Top right under the navigation bar, we can change color schemes if I find time to implement this.
* Detection Area is where the motion detection is and reads player’s facial movement
* Ghost Obstacle and Pellets are objects of the game to interact with

<h3> **Technologies, Libraries, & APIs** </h3>

This project will be implemented with the following technologies:

The Canvas API to render the game objects like Ghosts or Pellets
Webpack and Babel to bundle and transpile the source JavaScript code
npm to manage project dependencies
May Use Web Audio API
Node.js
HTML
CSS to style

<h3> **Implementation Timeline** </h3>

* Monday: Setup project, including getting webpack up and running. Have camera access required for running the site. Learn how to detect movement. Get canvas to show up on the screen, and spend time getting comfortable with the Canvas API.
* Tuesday: Connect movement detection with Canvas API for interaction with game objects. Implement pellets through Canvas and add score for each one that was successfully eaten. This will require a deeper understanding of motion mechanics and algorithms in order to figure out mouth movement as 'controls' for the game. This may also require some knowledge of collision detections.
* Wednesday: Buffer time for anything I didn't finish on schedule, this also a debugging allotted time. Work on some CSS and Nav Links/Main Title (Maybe different color schemes if I get to it).
* Thursday: Include ghost obstacles through Canvas which will stop the game and end it showing the score you got. Maybe add a high score leaderboard. Have it be a route to the end screen. On the end screen, have a route to replay or go to the home screen. Home screen will prompt for camera access and also have a start button to initiate the game. Then if I have time, I can try to implement a higher difficulty as time passes. If I have time even still, I want to have the home page have some cool animations to show off some Canvas API.
* Friday: Deploy to GitHub pages and Heroku. If there is time, rewrite this proposal as a production README.