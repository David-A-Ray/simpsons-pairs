[![alt text](/assets/images/##########.png "Click to open site")](https://phil-griffith.github.io/###########/)

![alt text](/assets/images/##########.jpg "Responsive demo")

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
[Wireframes](/assets/wireframes/#######.md)

- #### Typography
The ‘Caveat Brush’ font was used throughout the game, as it is a very close resemblance to the font used in the Simpsons TV show.

- #### Colours
  - Yellow (Simpsons characters shade) – Main menu & a lighter shade of yellow is also used for all modals.
  - Blue – Main menu buttons, includes white text to represent Homer Simpson’s Blue trousers and white shirt.
  - Orange – Game Score, Mistakes counter & Timer (Bart Simpson’s Orange T-Shirt).
  - Light Green – New game difficulty select & cards (Marge’s dress).
  - Light Grey & Green – High Scores Exit Button (typical School exit door light).
  - Dark Grey – High Scores Clear Scores button. Used to resemble a typical black board eraser.

- #### backgrounds
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
