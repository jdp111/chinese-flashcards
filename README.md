# ChineseLearn
Access site at https://chinese-flashcards-production.up.railway.app/

This project was created using react JS web framework, and accesses an [API](https://github.com/jdp111/hsk-database) to save user information and store a Chinese dictionary.
No sensitive information is stored on this site, and passwords are encrypted for your security. 

## Purpose
I created this app as a way to help people learn chinese vocabulary in a more efficient way.
It is hard to get motivated to learn a new language, and I hope this app will help people who are struggling to learn on their own
Users can save flashcards and start review sessions at their own pace, and the app will take care of the rest.

## Features
### Login/Signup
A user only needs to choose a username and password, and they will be able to access all features of this app. This app will never prompt you for email, first name, last name or any other sensitive information. Your security is important to me.

### Add Cards
Users can add cards by searching for words individually or automatically adding from a user-specified reading level.
Reading levels are based on the Hanyu Shuiping Kaoshi (HSK) vocab list.
When a user chooses to auto add cards, up to one hundred (100) cards are pulled from the specified HSK level and added to the users "unlearned" card collection.

### Spaced repetition algorithm
Spaced repetition is a proven learning technique that optimizes the learning process by spacing out the intervals between reviewing information. By using this method, the app can help users retain Chinese vocabulary more effectively.

When users add flashcards to their deck and review them in a quiz, the app will show the cards next in line according to the algorithm.

Spaced repetition works like this:
1. the user will see cards in the "unlearned" pile first, and mark whether they know the card or not
2. if the user knows the card, it will be added to a review pile
3. cards that are continually marked "correct" by the user will show up less frequently in following sessions until the user has reviewed the word 5 times
4. when the user marks a word correct the fifth time, the card is added to the user's "learned" pile
5. If at any time a flashcard is marked "incorrect", the card will be pushed back to the "unlearned" pile to start a new review of the word

### Character search
 When a user has added cards to their collection, this feature will allow them to see how much of a chinese document they will be able to understand.
 The feature includes a text box. The user is prompted to copy and paste chinese text into the text box. The app then shows the chinese text with highlights where a word matches a word from the users deck. the cards feom the deck are also listed below the text for easy translation.
 
### View/Delete cards
A user can view cards in their collection that have yet to be studied in a list format. The english translation and pinyin are also shown, so if the user wants to review all their cards, they are available here. Users can also view learned cards in a separate section. Any card can be removed from a user's collection, whether already learned or not.

## HSK API
The API used for this app is my own creation. The chinese word database was scrubbed from https://www.digmandarin.com/.
The API can be accessed without a key for GET operations using this URL: https://hsk-database-production.up.railway.app/words.
Users can edit their own profile with a key given at login.

For more information about the API, visit the github repo: https://github.com/jdp111/hsk-database

### `npm start`

Runs the app in the development mode.\
#### This command will not connect the app to the database. You can clone the database code onto your machine and run "start-all" to run both database and the app
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.
