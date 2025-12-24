SmartKey Bio 🌿

Interactive Digital Key for Biodiversity Identification

SmartKey Bio is a modern, interactive web application designed to simplify biodiversity identification by combining biological science concepts with contemporary web technology.
This project focuses on clarity, usability, and visual engagement, making biological learning more accessible for students and the public.

✨ Key Features

🌱 Interactive User Interface built with React & Tailwind CSS

🎨 Modern UI/UX with animations powered by Framer Motion

🧬 Educational Focus on biodiversity and biological classification

🖼️ Optimized Media Handling (images & videos served efficiently from public assets)

⚡ Fast Performance using Vite as the build tool

🌐 Deployed on Vercel with automatic CI/CD from GitHub

🛠️ Tech Stack

Frontend Framework: React

Styling: Tailwind CSS

Animations: Framer Motion

Build Tool: Vite

Deployment: Vercel

Version Control: Git & GitHub

📂 Project Structure
smartkey-bio/
├─ public/
│  ├─ team/            # Team member images
│  ├─ assets/          # Images, videos, sounds
│  └─ vite.svg
├─ src/
│  ├─ components/      # Reusable UI components
│  ├─ pages/           # Application pages (About, Home, etc.)
│  ├─ data/            # Static data used in the app
│  ├─ App.jsx
│  └─ main.jsx
├─ index.html
├─ package.json
├─ tailwind.config.js
├─ vite.config.js
└─ README.md

🚀 Getting Started (Local Development)
1️⃣ Clone the repository
git clone https://github.com/Zhafranath/smartkey-bio.git
cd smartkey-bio

2️⃣ Install dependencies
npm install

3️⃣ Run development server
npm run dev


The app will be available at:

http://localhost:5173

🏗️ Build for Production
npm run build


Preview the production build locally:

npm run preview

🌍 Deployment

This project is deployed using Vercel.

Automatic deployment on every push to the main branch

Static assets are served from the public/ directory

Optimized for fast global delivery via CDN

Live Demo:
👉 https://smart-key-bio.vercel.app

👥 Team

Elifa Billien Revita — Member 1

Karima Zuleika Putri Noor — Tech Member

Muhamad Budiwan, S.Si., M.Pd., Gr. — Project Supervisor

📌 Notes & Best Practices

Static assets in public/ are accessed using absolute paths (e.g. /team/elifa.png)

No backend or database is used — all data is static and bundled with the project

Designed primarily for educational and demonstrational purposes

📄 License

This project is created for educational use.
Feel free to explore, learn from, and adapt the code for non-commercial purposes.
