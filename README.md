# 🎓 SIMPIC Delegate Portal System (SIMPIC DPS)

A secure, lightweight, and user-friendly **Delegate Portal System** built for the  
**15th Anniversary of SIMPIC (SIMPIC 2026)**.

This portal lets each delegate open their **personalized delegate page** using a unique **Delegate ID** — with **no login**, **no account**, and **no backend database** required.

---

## 🌍 About SIMPIC

**SIMPIC (Siriraj International Medical Microbiology, Parasitology, and Immunology Competition)**  
is an international academic competition organized by the  
**Faculty of Medicine Siriraj Hospital, Mahidol University**.

The **15th Anniversary (SIMPIC 2026)** is a milestone year, introducing digital systems to enhance delegate experience, accessibility, and operational efficiency.

---

## ✨ Key Features

- 🔐 **Delegate ID–based access** (e.g., `SIMPIC-XXXX-001`)
- 📄 **Personalized delegate profile page**
  - Profile (name, nickname, university, country, birthday, package)
  - Stay (hotel, check-in/out)
  - Excursion (route + stops)
- 📎 **Static JSON-based verification** (simple, fast, deployable anywhere)
- 🔗 **Sharable personal access link** with “Copy Link”
- ⚡ **Fast & lightweight** (Vite + React)
- 🎨 **SIMPIC 2026 UI** (dark gradient + glassmorphism)

---

## 🧱 Tech Stack

- **Frontend:** React (Vite)
- **Routing:** React Router
- **Styling:** Custom CSS (glassmorphism)
- **Data Source:** Static JSON
- **Deployment:** Vercel / Netlify / GitHub Pages / any static hosting

---

## 📁 Project Structure

src/
├── components/ # Reusable UI components
├── pages/ # Page-level components (Home, Delegate Profile)
├── data/ # Delegate JSON data
│ └── delegates.json
├── App.jsx # Main app + routes
├── main.jsx # Entry point
└── styles.css # Global styles


---

## 🧭 How It Works

1. Delegate receives a **Delegate ID** from SIMPIC (email / badge / QR).
2. Delegate opens the portal landing page.
3. Delegate enters the **Delegate ID**.
4. The portal validates the ID using a static JSON file.
5. If valid → redirect to the delegate’s **personal profile page**.
6. Delegate can copy/share their personal link if needed.

---

## Delegate ID Format

Example format:

SIMPIC-EXAMPLE-001


✅ IDs must exactly match the JSON records (including hyphens, case, and spacing).

---

🚀 Getting Started (Local Development)
1) Install dependencies
npm install
2) Run dev server
npm run dev
Open:

http://localhost:5173
3) Build for production
npm run build
npm run preview
