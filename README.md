# ☢ UCIL Awareness Portal

## Task 1 Home page 🏠

An educational web portal built to raise awareness about the Uranium Corporation of India Limited (UCIL) operations in Jaduguda. This project highlights environmental impacts, legal rights of locals, and provides the latest updates regarding uranium mining.


### 📌 Features

- 🏠 Home Page – Introduction and quick access to all topics.  
- 📖 About – Explains the purpose and significance of this portal.  
- ⚖ Know Your Rights – Educates locals about their legal and environmental rights.  
- 📰 Latest Updates – Provides current news or incidents related to UCIL.  
- 🌿 Environmental Impact – Details the harmful effects of uranium mining on the region.

## Task 2 Grievance Portal📃
Grievance Support Center
A responsive and interactive web application for submitting and tracking community and personal grievances. Built with React, styled using Tailwind CSS, and powered by Firebase Firestore for real-time data storage.


### ✨ Features
- 📬 Submit personal or community grievances
- 📊 View recent submissions and their details
- 💬 Interactive mascot (Chintu) provides field-specific guidance
- ⚡ Responsive UI using Tailwind CSS and Lucide icons
- 🔥 Firebase Firestore for storing and retrieving data


## Task 3 🌍 Jadugora: A Scroll-Based Storytelling Project

This is a bilingual (Hindi & English) scroll-based storytelling React app that narrates the real story of Jadugora — a tribal region deeply affected by uranium mining. The project brings awareness to environmental, health, and social issues using smooth animations, visuals, and text.


### 🚀 Features

- ✨ Smooth scroll-triggered animations using Framer Motion
- 🌐 Dual language support (Hindi & English)
- 📸 Images paired with meaningful story slides
- 🎨 Tailwind CSS for responsive and clean UI
- 💡 Sticky header with live language toggle
-  ⚠️ Real stories of displacement, pollution, and protest

## 🤝 Team

<b>Mentor:</b> Shubham Khetan

<b>Members:</b>
- Aman Choudhary
- Sparsh Rastogi
- Vaibhav Deval


## 🛠️ Tech Stack

- React.js
- Tailwind CSS
- Framer Motion
- JSX
- React App
- Firebase Firestore

</br>



## 🔗 Project Repository

[https://github.com/Shubham-Khetan-2005/CSI-Project](https://github.com/Shubham-Khetan-2005/CSI-Project)

---

# 🛠️ Setup Guide (React + Firebase)



### ✅ Prerequisites

Make sure you have these installed:

- Node.js
- npm (comes with Node.js)
- Git
- VS Code (recommended)

---

### 📦 Installation & Running Locally

1. **Clone the repository**

```bash
git clone https://github.com/Shubham-Khetan-2005/CSI-Project.git
cd CSI-Project
```

2. **Install Dependencies**

```bash
npm install
```

3. **How to use Firebase Firestore**

Create a google firebase account &rarr; Create a New Project &rarr; Create a Firestore Database

Create a `.env` file in the root directory and add your Firebase credentials

Create `firebase.config.js` like this:

```javascript
export const firebaseConfig = {
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId
};
```
4. **Run the App Locally**

```bash
npm run start
```

Open your browser and navigate to [http://localhost:3000](http://localhost:3000).

---


