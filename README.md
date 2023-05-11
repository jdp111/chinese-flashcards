# ChineseLearn
Access site at https://chinese-flashcards-production.up.railway.app/

This project was created using react JS web framework, and accesses an [API](https://github.com/jdp111/hsk-database) to save user information and store a Chinese dictionary.
No sensitive information is stored on this site, and passwords are encrypted for your security. 

### Purpose
I created this app as a way to help people learn chinese vocabulary in a more efficient way.
It is hard to get motivated to learn a new language, and I hope this app will help people who are struggling to learn on their own
Users can save flashcards and start review sessions at their own pace, and the app will take care of the rest.

### Spaced repetition algorithm
Spaced repetition is a proven learning technique that optimizes the learning process by spacing out the intervals between reviewing information. By using this method, the app can help users retain Chinese vocabulary more effectively.

When users add flashcards to their deck and review them in a quiz, the app will show the cards next in line according to the algorithm.

Spaced repetition works like this:
1. the user will see cards in the "unlearned" pile first, and mark whether they know the card or not
2. if the user knows the card, it will be added to a review pile
3. cards that are continually marked "correct" by the user will show up less frequently in following sessions until the user has reviewed the word 5 times
4. when the user marks a word correct the fifth time, the card is added to the user's "learned" pile
5. If at any time a flashcard is marked "incorrect", the card will be pushed back to the "unlearned" pile to start a new review of the word

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
