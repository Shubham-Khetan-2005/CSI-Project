# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

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




Task 1 Home page 🏠

☢ UCIL Awareness Portal

An educational web portal built to raise awareness about the Uranium Corporation of India Limited (UCIL) operations in Jaduguda. This project highlights environmental impacts, legal rights of locals, and provides the latest updates regarding uranium mining.


📌 Features

- 🏠 Home Page – Introduction and quick access to all topics.  
- 📖 About – Explains the purpose and significance of this portal.  
- ⚖ Know Your Rights – Educates locals about their legal and environmental rights.  
- 📰 Latest Updates – Provides current news or incidents related to UCIL.  
- 🌿 Environmental Impact – Details the harmful effects of uranium mining on the region.

Task 2 Grievance Portal📃
Grievance Support Center
A responsive and interactive web application for submitting and tracking community and personal grievances. Built with React, styled using Tailwind CSS, and powered by Firebase Firestore for real-time data storage.


✨ Features
📬 Submit personal or community grievances
📊 View recent submissions and their details
💬 Interactive mascot (Chintu) provides field-specific guidance
⚡ Responsive UI using Tailwind CSS and Lucide icons
🔥 Firebase Firestore for storing and retrieving data


How to use Firebase Firestore
npm install firebase
Create a .env file in the root directory and add your Firebase credentials:
Create firebase.config.js like this:
export const firebaseConfig = {
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId
};



Task 3 🌍 Jadugora: A Scroll-Based Storytelling Project

This is a bilingual (Hindi & English) scroll-based storytelling React app that narrates the real story of Jadugora — a tribal region deeply affected by uranium mining. The project brings awareness to environmental, health, and social issues using smooth animations, visuals, and text.


 🚀 Features

- ✨ Smooth scroll-triggered animations using Framer Motion
- 🌐 Dual language support (Hindi & English)
- 📸 Images paired with meaningful story slides
- 🎨 Tailwind CSS for responsive and clean UI
- 💡 Sticky header with live language toggle
- ⚠️ Real stories of displacement, pollution, and protest



 🛠️ Tech Stack

- React.js
- Tailwind CSS
- Framer Motion
- JSX
- React App
- Firebase Firestore

