📚 MediQueue — Smart Tutor Booking Platform

🎓 A modern, full-stack platform bridging the gap between students and expert educators with real-time session booking and dynamic slot management.

📌 Table of Contents
📖 About the Project
🎯 Project Overview
✨ Key Features
💻 Tech Stack
📦 Dependencies
⚙️ Installation & Setup
📂 Folder Structure
👥 Contributions
🤝 How to Contribute
📄 License
📬 Contact

📖 About the Project
MediQueue simplifies the process of finding and reserving academic tutors. Traditional listing services often suffer from double-booking and static data; MediQueue solves this by integrating atomic slot tracking, dual-collection database lookups, and date-range availability matching—all wrapped in a sleek, dark-themed UI.

🎯 Project Overview
MediQueue allows students to browse verified educators, filter profiles dynamically, manage personal bookings, and list new tutor offerings securely.

🌟 Key Highlights
⏱️ Real-Time Consistency: Automated inventory updates prevent overbooking.
🔒 Secure Authentication: Integrated Google OAuth 2.0 and JWT verification via remote JWKS.
🔄 Dynamic Data Merging: Dual-collection queries seamlessly fall back across static and user-generated tutor pools.

✨ Key Features
⚡ Atomic Slot Reservation: Uses MongoDB $inc operators (-1 on booking, +1 on cancellation) to manage session limits safely across concurrent requests.
🔍 Multi-Criteria Filter Engine: Handles simultaneous case-insensitive name matching ($regex), date-range checking (sessionStartDate / sessionEndDate), and fee sorting (asc / desc).
🗂️ Dual-Collection Unified Lookup: Dynamically searches primary tutor profiles (tutor-list) and secondary user-submitted profiles (add-tutor) in a single workflow.
🛡️ JWKS & OAuth 2.0 Security: Protected routes enforce JWT validation powered by jose-cjs alongside Google Sign-In support.
📊 Tutor Dashboard & Management: Authenticated users can post, update, and manage their own tutoring listings and student bookings.

💻 Tech Stack
Frontend: React.js · Vite · Tailwind CSS 🎨
Backend: Node.js · Express.js · MongoDB (Native Driver) ⚙️
Authentication: Google OAuth 2.0 · JWT (jose-cjs) 🔑
Deployment & Tools: Vercel · Git · GitHub · VS Code 🛠️

📦 DependenciesJSON{
  "express": "^4.21.2",
  "mongodb": "^6.12.0",
  "cors": "^2.8.5",
  "dotenv": "^16.4.7",
  "jose-cjs": "^4.32.0"
}

⚙️ Installation & Setup1. 
1.📥 Clone the Repository
git clone https://github.com/Nerd29/find-tutor-website.git
cd find-tutor-website
npm install

2. 🔐 Configure Environment Variables
  PORT=8000
  MONGODB_URI=mongodb+srv://find-tutor:kohRYfeEcDaC7yTK@cluster0.qn5psde.mongodb.net/?appName=Cluster0
  CLIENT_URL=https://find-tutor-website-khaki.vercel.app

3.🚀 Run the Development Server
    npm run start
    
📂 Folder Structure
find-tutor-website/
│
├── 📁 client/
│   ├── 📁 src/
│   │   ├── 📁 components/   # 🧩 UI Components (Cards, Navbar, Modals)
│   │   ├── 📁 pages/        # 📄 Tutors, Featured, Login, Dashboard
│   │   ├── 📁 hooks/        # 🪝 Custom React hooks
│   │   └── 📁 utils/        # 🛠️ API fetch helpers & auth handlers
│   └── 📄 package.json
│
├── 📁 server/
│   ├── 📄 index.js          # 🌐 Express app, MongoDB connection & routes
│   └── 📄 package.json
│
└── 📄 README.md

🤝 How to Contribute
🍴 Fork the Project
🌿 Create your Feature Branch (git checkout -b feature/AmazingFeature)
💾 Commit your Changes (git commit -m 'Add some AmazingFeature')
📤 Push to the Branch (git push origin feature/AmazingFeature)
🔀 Open a Pull Request



📬 Contact
  📧 Email: majumderturja59@gmail.com
  🐙 GitHub: @Nerd29



