
[![The Simpsons Pairs](/assets/images/simpsons_logo.png "Click to open site")](https://phil-griffith.github.io/simpsons-pairs/)

![Responsive Simpsons Pairs](/assets/images/responsive_pairs.png "Responsive Simpsons Pairs")

The Simpsons Pairs is a remake of the well-known Pairs game, that has been designed for a single player as opposed to the traditional pairs game, which is normally played by 2 or more players.

## UX

### User Stories

As a user I would like:
-	To play an interactive game that challenges my memory.
-	To have a time limit in the game to add more of a challenge.
-	To be able to change the difficulty of the game.
-	To record game results in order to track and improve my performance and compete with other players.
-	To be able to change some settings in the game, such as sounds.
-	Have access to instructions for the game if required.


&nbsp;

### Design
- #### Wireframes
  The website was initially designed using Balsamiq to create several wireframes (link below).
\
\
[Wireframes](/assets/wireframes/wireframes.md)

- #### Typography
  The ‘Caveat Brush’ font was used throughout the game, as it is a very close resemblance to the font used in the Simpsons TV show.

- #### Colours
  - Yellow (Simpsons characters shade) – Main menu & a lighter shade of yellow is also used for all modals.
  - Blue – Main menu buttons, includes white text to represent Homer Simpson’s Blue trousers and white shirt.
  - Orange – Game Score, Mistakes counter & Timer (Bart Simpson’s Orange T-Shirt).
  - Light Green – New game difficulty select & cards (Marge’s dress).
  - Light Grey & Green – High Scores Exit Button (typical School exit door light).
  - Dark Grey – High Scores Clear Scores button. Used to resemble a typical black board eraser.

- #### Backgrounds
  - Clouds - Home Page. This was used to simulate the opening credits of the Simpsons show, along with the animated text.
  - Bart Simpson writing on blackboard – High Scores page. Another scene from the opening credits is where Bart is writing lines on the school black. Instead he is writing out all of the High Scores.
  - Simpsons Kitchen table – Game page. The game background consists of the blue circle and chequered pattern representing the Simpsons kitchen table and floor.

- #### Code Rationale
  Due to modern browsers incorporating audio auto-play blocking by default, a decision was made to add a start button to the home page which when pressed, satisfies the interaction with screen requirement, and thus triggers the animations and music.

___

## Features

### Existing Features
-	Home page:
    - Animated text and main menu, and Simpsons theme tune music
    - Main menu with links to all site pages, settings menu and help modal.
    - Settings menu with controls to enable/disable Music, Sound effects and Persistent Storage (toggles between local storage and session storage).
- High Scores page:
  - A ‘Clear Scores’ button which will clear high score data from local and session storage.
  - An ‘Exit’ button that will take the user back to the Home page.
- Game page:
  - Game timer with ticking clock sound triggered at < 6 seconds.
  - Mistakes counter which is triggered every time the player fails to turn a matching pair when both cards have already been revealed. Each time a mistake is triggered the player receives time and points penalties.
  - Score counter.
  - Animated cards when flipped and when a matching pair is found.
  - Sound effects for a matching pair and when a mistake is made.
  - Game over modal which details score, mistakes, and remaining time bonus, and also provides a name entry option if there are less than 10 high scores or if the player has scored higher than 10th place.

  &nbsp;

### Features Left to Implement
- Additional card decks containing alternative characters and objects
- Option to change in-game background theme.

## Technologies Used

### Languages
- [HTML5](https://en.wikipedia.org/wiki/HTML5)
- [CSS3](https://en.wikipedia.org/wiki/Cascading_Style_Sheets)
- [JAVASCRIPT](https://en.wikipedia.org/wiki/JavaScript)

### Frameworks and Programs

- [Bootstrap 4.5.0](https://getbootstrap.com/docs/4.5/getting-started/introduction/)
  - Used for game modals, cards, and overall layout.
- [JQuery](https://jquery.com)
    - Used to enable interactive elements of the game.
- [Atom](https://atom.io/)
  - This site was built using the Atom IDE.
- [Balsamiq](https://balsamiq.com/)
  - Wireframes were created in Balsamiq.
- [GitHub:](https://github.com/)
  - The GitHub package within Atom was used to manage version control and Push content to the repository.
- [RealFaviconGenerator](https://realfavicongenerator.net/)
  - Used to create the favicon.
- [CSS Autoprefixer](https://autoprefixer.github.io/)
  - All CSS code was checked to ensure compatibility with multiple browsers.
- [Font Meme](https://fontmeme.com/fonts/simpsonfont-font/)
  - Used to create Simpsons font for animated game intro screen.
- [Animate.css](https://animate.style/)
  - Used for card animations.

  ___

## Testing

### Pre-Deployment
Throughout the development of this site, it was previewed locally as each new element was added, and also, the built-in browser developer tools for Chrome, Edge, Opera and Firefox were used to ensure that the layout was responsive for all screen sizes. In addition, console.log messages were added to all functions in order to test and track the output of all functions and identify which logical option was being triggered.  

![console output image 1](/assets/images/consolelog1.png "console output image 1")
![console output image 2](/assets/images/consolelog2.png "console output image 2")

With the console messages in place, multiple scenarios were tested to make sure that the game was working correctly.

&nbsp;

### Post-Deployment
To be added - Awaiting feedback

&nbsp;

### Issues found and fixed
- Animation timing
  - Initially there were multiple issues with the timings of the animations, such as the matching pairs animation was happening before the cards fully turned over, and the game over modal was also appearing too early. These issues were resolved with the ‘setTimeout’ function.
- Card selecting
  - The first issue noticed was that it was possible to produce a false pair match result by clicking the same card twice. Additional logic was added to catch this scenario.
  - The second issue noticed was that it was possible to select more than 2 cards per turn and effectively break the game. This was resolved by adding a click counter to ignore more than 2 card clicks per turn.


&nbsp;

### Final checks

The final checks included:

- #### Code Validation
  - [W3 HTML validator](https://validator.w3.org/#validate_by_input)
    - All HTML code was checked and any errors found were fixed.
  - [W3 CSS validator (jigsaw)](https://jigsaw.w3.org/css-validator/#validate_by_input)
    - CSS code was checked and no errors were found.
  - [JSLint](https://jslint.com/)
    - All JavaScript/JQuery code was checked to ensure all code complies   with ES6 standards.

- #### Feature testing
  The following items were checked and verified:
  - ##### Main menu links
    The Main Menu links were tested for hover effects to ensure that the colour changes to dark blue and that each link opens the correct page or modal.

    ![Main Menu image 1](/assets/images/mainmenu1.png "Main Menu image 1")

    &nbsp;
  - ##### Settings modal
    Each setting on the settings modal was tested in turn to ensure functionality across all browsers and devices. The apply and Cancel buttons were also tested to ensure that if the user has changed a setting, but then clicks cancel, the toggle switch is returned to its original location.

    ![Settings modal 1](/assets/images/settingsmodal1.png "Settings modal 1")

    &nbsp;
  - ##### New Game modal
    Hover effects were tested on the game difficulty buttons. And each button was checked to make sure the right game configuration was loaded.

    ![Game difficulty menu](/assets/images/gamedifficultymenu.png "Game difficulty menu")

    ###### Easy (12 cards)
    ![Easy game mode](/assets/images/easygame.png "Easy game mode")
    ###### Medium (20 cards)
    ![Medium game mode](/assets/images/mediumgame.png "Medium game mode")
    ###### Hard (28 cards)
    ![Hard game mode](/assets/images/hardgame.png "Hard game mode")

    Each game level was played to verify that the correct points and penalties were being given.
    Mistakes were made on purpose to ensure that the score and mistake counters were displaying correctly and that the sounds effects were played.

    &nbsp;    
    ![Mistakes and score counters](/assets/images/mistakes.png "Mistakes and score counters")    

    &nbsp;

  -	##### Game Over modals
    Each Game over scenario was tested to ensure that the correct modal displayed.
    ###### Game complete – New high score
    ![Game over - new high score modal](/assets/images/gamecompletehighscore.png "Game over - new high score modal")
    ###### Game Over – Out of time
    ![Game over - out of time](/assets/images/gameovertimesup.png "Game over - out of time")  
    ###### Game Over – No high score
    ![Game over - No high score](/assets/images/gameovernohighscore.png "Game over - No high score")

    &nbsp;
  -	##### High scores page
    Both the Exit and Clear Scores buttons were tested for hover effects.

    ![Exit button](/assets/images/exit.png "Exit button") ![Exit button hover](/assets/images/exit_hover.png "Exit button hover")

    ![Clear Scores button](/assets/images/clearscores.png "Clear Scores button") ![Clear Scores button hover](/assets/images/clearscores_hover.png "Clear Scores button hover")

    The Exit button was tested to ensure it loads the Home page when clicked and the clear scores functionality was tested.

    ###### High scores before
    ![High scores before](/assets/images/highscores_before.png "High scores before")

    ###### Click Clear Scores and then Yes to confirm    
    ![Clear scores confirm](/assets/images/clearscores_clicked.png "Clear scores confirm")

    ###### High scores after    
    ![Clear scores confirm](/assets/images/highscores_after.png "Clear scores confirm")

    &nbsp;
  - #### Responsive / Device testing
     The following devices were used to test the site:
       - 24" Monitor
       - 15.6" Laptop Display
       - 10" Galaxy Tab 4.0 (Portrait and Landscape)
       - 5.8" Samsung S8 (Portrait and Landscape)
       - 4.7" iPhone 8 (Portrait and Landscape)

       &nbsp;

   - #### User Stories check
     Does this website successfully fulfil the requirements laid out in the original User Stories?

     The user requirements:

     -	To play an interactive game that challenges my memory.

        Yes – The game challenges the memory by requiring the player to remember where cards are positioned.
     - To have a time limit in the game to add more of a challenge.

       Yes – A time limit was added with additional time penalties.
     - To be able to change the difficulty of the game.

       Yes – The player can choose between easy, medium, and hard difficulties.
     - To record game results in order to track and improve my performance and compete with other players.

       Yes – The high scores page allows the player to record up-to 10 high scores.
     - To be able to change some settings in the game, such as sounds.

       Yes – Music, sound effects and storage method can be changed vie the settings menu.
     - Have access to instructions for the game if required.

       Yes – The Help button on the Main menu provides instructions for the game.

       &nbsp;

   ___

   ## Deployment

   The site was deployed to GitHub pages by following the below steps:
   - Log in to the repository - https://github.com/phil-griffith/simpsons-pairs/
   - Click <b>Settings</b>
   - Scroll down to <b>GitHub Pages</b>
   - Set Source to <b>Branch:main</b>
   - Click <b>Save</b>

   &nbsp;

   ___

   ## Credits

   ### Media
   Some of the content for this website was taken from the following sources:
   - Home page background
     - [wallpaperflare.com](https://www.wallpaperflare.com/clouds-figure-background-simpsons-art-beginning-cartoon-wallpaper-uzhuk/download/2560x1440)
   - High scores page background
     - [wallpaperflare.com](https://www.wallpaperflare.com/bart-simpsons-the-simpsons-text-communication-yellow-indoors-wallpaper-mfoez/download/2560x1080)
   - The Simpsons character images
     - [Wikipedia](https://en.wikipedia.org/)   
   - Homer sound effects
     - [soundboard.com](https://www.soundboard.com/)
   - Ticking clock sound effect
     - [freesoundslibrary.com](https://www.freesoundslibrary.com/clock-ticking-sound/)   

   &nbsp;

   ### Code
   Some of the code for this website was taken from the following sources:
   - All Modals
     - https://getbootstrap.com/docs/4.5/components/modal/
   - Cards  
     - https://getbootstrap.com/docs/4.5/components/card/
   - Card flip effect
     - https://3dtransforms.desandro.com/card-flip
   - Card animations
     - https://3dtransforms.desandro.com/card-flip
   - Settings modal toggle switches
     - https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_switch



   &nbsp;


   ### Acknowledgements
   I would like to thank my Mentor Aaron Sinnott for all the advice that he has given me, and ..................
