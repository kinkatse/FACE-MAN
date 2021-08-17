<h1>Proposal</h1>
 
<h3>Background</h3>
 
This is a face recognition app that checks for two key movements, a person’s open mouth and a person’s closed eyes. The app will recognize which of the two specific facial actions you take and display an animation for when your mouth is open or eyes are closed. This game would use technologies like MediaDevices, TensorFlow, Javascript, Canvas, Node.js, HTML, CSS. The video stream is a loop of video frames captured through the live feed of your camera. The facial movement detection will use algorithms utilizing TensorFlow's ability to acertain points of interest on the face and react to any large movements of the mouth or eyes.
 
<h3>Functionality & MVPs</h3>
 
In FACE-MAN, the app will:
 
1. Ask user to access camera, then stream video feed to user
2. Make filters including a hitbox, a scanmask and some other creative filters
3. Make face recognition for mouth, display animation when mouth is open
4. Make face recognition for eyes, display animation when eyes are closed
 
In addition, this project will include:
 
1. An About Me drop down describing who I am and what technologies I used
2. A How to Use drop down describing how to interact with the app
3. A production README
 
<h3>Wireframes</h3>
 
![Image of Wireframe](https://cdn.discordapp.com/attachments/597985513701376013/877251764527710259/FACE-MAN_Revision_Wireframes_2_png.png)
 
* Nav links include links to this project's Github repo, my LinkedIn
* Nest to Nav Links are How to Use and About Me.
* Main Title is on the top right of the navigation bar.
* Center of page is the live video feed from your camera.
* Above the live video feed is where you can select/deselect filters.
* Face Filter represents your face and will read the player’s facial movement to determine mouth or eyes animation.
 
<h3>Technologies, Libraries, & APIs</h3>
 
This project will be implemented with the following technologies:
 
MediaDevices is needed to get user’s video data
TensorFlow will be used to observe a user’s facial actions
The P5/Canvas API to render visuals, filter, animations for successful actions
Webpack and Babel to bundle and transpile the source JavaScript code
npm to manage project dependencies
Node.js
HTML
CSS to style
 
<h3>Implementation Timeline</h3>
 
* Monday: Learn how to use either TensorFlow and other libraries. Get browser to require camera access for running the site. Browser should show user. Make the detection dynamic so it can tell if there is a user or not. Detect open mouth and closed eyes facial action.
 
* Tuesday: Set up webpack. Create a home page with a start button which then allows you to utilize the app. Make facial recognition restrictions so there cannot be more than one face or the face cannot be too far. Work on some CSS to make the browser look more presentable.
 
* Wednesday: Animation will likely use the Canvas API. I will spend some time getting comfortable with the Canvas API for animations. Have facial actions linked to an animation (Canvas) which plays when the mouth is open or eyes are closed. When there is no user, an “no user available for recognition” animation will be played. Get filter option to be available.
 
* Thursday: Buffer time for anything I didn't finish on schedule, this also a debugging allotted time. Work on some CSS and Nav Links/Main Title (Maybe different color schemes if I get to it). If I have time, I can try to incorporate one or two game mechanics between pellets, collision boxes, obstacles, game over, score, leaderboards, mapping facial action detection to controls, etc.
 
* Friday: Deploy to GitHub pages and Heroku. If there is time, rewrite this proposal as a production README.
 
<h3>Bonus</h3>
 
Making it the game I originally thought of where you use the face detection as controls in a game and dodge obstacles or eat pellets.
