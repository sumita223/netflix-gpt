## Netflix GPT
A Netflix-inspired movie streaming platform featuring secure Firebase authentication, real-time TMDB movie carousels, and GPT-powered natural language movie search using OpenAI. Built with React, Redux, Tailwind CSS, and deployed on Vercel.

## Features
- Authentication
- Movie Browsing (powered by TMDB)
- GPT Movie Search
- GPT Integration search bar powered by OpenAI GPT-3.5/4
- Fetches movie suggestions from TMDB based on GPT output
- Multilingual Support (BONUS)
  
## Tech Stack
Frontend: React, Tailwind CSS, React Router
State Management: Redux Toolkit
Authentication: Firebase Auth
APIs: TMDB API, OpenAI API
Deployment: Vercel

##  Setup & Installation
bash
git clone https://github.com/your-username/netflix-gpt.git
-cd netflix-gpt
npm install

-Add .env File
env

- REACT_APP_TMDB_API_KEY=your_tmdb_api_key
- REACT_APP_OPENAI_API_KEY=your_openai_key

# Add all Firebase config variables
🚀 Start Dev Server
bash

npm start

## Deployment
Deployed on Vercel
🔗 View Live Site
https://netflix-gpt-6i8z.vercel.app/

## Learnings
- Working with Firebase Auth and secured routing
- Handling async Redux state and API data
- Prompt engineering with OpenAI
- UI performance optimization using memo, useRef, lazy loading
- Building reusable and scalable components
