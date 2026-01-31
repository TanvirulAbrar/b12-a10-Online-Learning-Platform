# 📚 O-Learning — Online Learning Platform

## 📄 Project Description

O-Learning is a modern full-stack online learning platform where students can explore and enroll in courses, while instructors can create, update, and manage their own courses through a dedicated dashboard. The platform focuses on usability, clean UI, and a smooth learning experience with secure authentication and role-based features.

🌍 **Live Project:**  
🔗 https://bright-sawine-31e8bc.netlify.app/

## ✨ Core Features

- User Authentication (Email/Password & Google Login)
- Role-based access for Students & Instructors
- Course Management (Create, Update, Delete courses)
- User Dashboard:
  - My Added Courses
  - My Enrolled Courses
- Course filtering by category
- Private routes with persistent login (no logout on refresh)
- Image upload during course creation using IMGBB API
- Fully responsive UI with smooth animations
- Toast notifications for all success & error states

## 🛠️ Technologies Used

### Frontend

- React.js
- React Router DOM
- Firebase Authentication
- Tailwind CSS
- Axios / TanStack Query
- Framer Motion & AOS

### Backend

- Node.js
- Express.js
- MongoDB (Mongoose)

### Deployment

- Client: Netlify
- Server: Vercel

## 📦 Main Dependencies

- react
- react-router-dom
- firebase
- axios
- @tanstack/react-query
- framer-motion
- aos
- express
- mongoose
- cors
- dotenv

## 🚀 How to Run Locally

1. Clone the repository:

   ```bash
   git clone https://github.com/TanvirulAbrar/b12-a10-Online-Learning-Platform.git

   ```

2. Install dependencies:

   ```bash
   npm install

   ```

3. Create a .env file and add:

   Firebase config keys

   IMGBB API key

4. Start the development server:
   ```bash
   npm run dev
   ```

## 🖥️ Server Side – Run Locally

1. Clone the server repository

   ```bash
   git clone <SERVER_REPOSITORY_URL>

   ```

2. Install server dependencies
   ```bash
   npm install

   ```
3. Create environment variables
   -Create a .env file in the server root and add the following variables:
   - MONGODB_URI=your_mongodb_connection_string
   - FIREBASE_API_KEY=your_firebase_api_key
   - URI=MongoDB connection URI
   - IMGBB_API_KEY=your_imgbb_api_key
   - Adjust keys according to your project needs.

4. Start the server with nodemon (recommended for development)
   ```bash
   node index.js

   ```

Make sure you have nodemon installed globally or as a dev dependency.

5. copy paste the url to browser
   ```bash
   http://localhost:3000
   ```

You should see a success message or a JSON response from your API.

6. 🔗 Connect Frontend with Backend
   Make sure your frontend API URLs point to the local server during development, e.g.:
   ```bash
   http://localhost:3000/
   ```

## ⚠️ Notes

Use MongoDB Atlas or local MongoDB for your database.

Never commit your .env file to public repositories.

Ensure CORS is enabled on the backend for your frontend origin.

## 📸 Screenshot

Not added yet.
