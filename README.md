<h1>Proposal</h1>
 
<h3>Background</h3>
 
This is a face recognition app that checks for two key movements, a person’s open mouth and a person’s closed eyes. The app will recognize which of the two specific facial actions you take and display an animation for when your mouth is open or eyes are closed. This game would use technologies like Face-api.js/Cloudmersive, Javascript, Canvas, Node.js, HTML, CSS. The facial movement detection is a variation of algorithms of pixel values of video frames to determine movement in a certain area.
 
<h3>Functionality & MVPs</h3>
 
In FACE-MAN, the app will:
 
1. Ask user to access camera, then show user
2. If no user is in the detection area, then no user animation will play
3. Make face recognition for mouth, display animation when mouth is open
4. Make face recognition for eyes, display animation when eyes are closed
 
In addition, this project will include:
 
1. An About modal describing how to interact with the app
2. A production README
 
<h3>Wireframes</h3>
 
![Image of Yaktocat](https://media.discordapp.net/attachments/597985513701376013/869229086076203078/FACE-MAN_Revision_Wireframes.png?width=894&height=670)
 
* Nav links include links to this project's Github repo, my LinkedIn, How to Play and About modal.
* Main Title is on the top right of the navigation bar.
* Top right under the navigation bar, we can change color schemes if I find time to implement this.
* Detection Area is where the motion detection is and reads player’s facial movement
 
<h3>Technologies, Libraries, & APIs</h3>
 
This project will be implemented with the following technologies:
 
Face-api.js or Cloudmersive to observe a user’s facial actions
The Canvas API to render animations for successful actions
Webpack and Babel to bundle and transpile the source JavaScript code
npm to manage project dependencies
May Use Web Audio API
Node.js
HTML
CSS to style
Maybe More?
 
<h3>Implementation Timeline</h3>
 
* Monday: Setup project, including getting webpack up and running. Have the home page require camera access for running the site. When it is accessible, you can now see the start button and click to start the app, routing you to the face recognition screen. Learn how to use either Face-api.js or Cloudmersive. Page should show the user.
 
* Tuesday: Make the detection dynamic so it can tell if there is a user or not. When there is no user, an “no user available for recognition” animation will be played. Animation will likely use the Canvas API. I will spend some time getting comfortable with the Canvas API for animations.
 
* Wednesday: Use Face-api.js or Cloudmersive to detect open mouth and closed eyes facial action. Have it linked to an animation (Canvas) which plays when the mouth is open or eyes are closed.
 
* Thursday: Buffer time for anything I didn't finish on schedule, this also a debugging allotted time. Work on some CSS and Nav Links/Main Title (Maybe different color schemes if I get to it).
 
* Friday: Deploy to GitHub pages and Heroku. If there is time, rewrite this proposal as a production README.
