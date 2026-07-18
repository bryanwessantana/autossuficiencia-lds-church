# 🏛️ Self-Reliance Portal — Curitiba Portão Stake

<p align="left">
  <img src="https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white" alt="Next.js" />
  <img src="https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white" alt="MongoDB" />
  <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React" />
  <img src="https://img.shields.io/badge/Deployment-Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white" alt="Vercel" />
</p>

The **Self-Reliance Portal** is a digital catalog platform engineered to connect community entrepreneurs, local businesses, and consumers. Built as a strategic tool for the Curitiba Portão Stake Self-Reliance Council, the application provides visibility to local vendors, offering the community direct access to trusted suppliers while fostering a robust internal economic network.

The system features a hybrid data architecture designed for ultra-low maintenance and high-performance rendering, scaling from static local data structures to real-time serverless database transactions.

🌐 **[Live Demo on Vercel](https://autossuficiencia-lds-church.vercel.app)**

---

## ✨ Key Features

* **📇 Dynamic Exhibitor Catalog:** High-performance visual grid with custom branding, logos, and business descriptions.
* **🔍 Intelligent Filtering:** Fast text-based query system filtering through dynamic categories (Food, Services, Fashion, etc.).
* **➕ Optimized Pagination:** A seamless "Load More" rendering logic to maintain optimal core web vitals under heavy data sets.
* **🟢 Direct-to-WhatsApp Integration:** Actionable CTAs wired with custom click-to-chat dynamic deep links to facilitate immediate business conversion.
* **🎟️ Real-Time Raffles:** An internal serverless architecture syncing live event raffle systems on-the-fly.

---

## 🚀 Tech Stack & Hybrid Architecture

* **Frontend Framework:** Next.js (Pages/App Architecture) & React.js
* **Styling Engine:** Styled JSX (Component-scoped encapsulation)
* **Database & Persistence:**
  * **Static Layer:** Local asynchronous `JSON` parsing for local vendor structures.
  * **Dynamic Layer:** MongoDB Atlas integrated via Next.js Serverless API Routes for real-time raffle mutations.
* **Iconography:** Lucide Icons

---

## 📂 Project Blueprint & Configuration

When updating the portal structure or populating new event vendors, focus on these key structural pathways:
* `src/data/empresas.json` — Central data matrix containing all exhibitor payloads.
* `public/images/` — Image repository for global UI assets.
* `public/logos/` — Asset directory housing custom business logos for booth displays.

---

## 💻 Getting Started

### Prerequisites
* Node.js runtime environment (v18+ or v20+) installed.
* A MongoDB Atlas connection string (configured in environment variables for raffle components).

### Installation & Execution
Clone this repository to your local machine:
```bash
git clone https://github.com/bryanwessantana/autossuficiencia-lds-church.git
```

Navigate into the project directory:
```bash
cd autossuficiencia-lds-church
```

Install project dependencies:
```bash
npm install
```

Start the local server environment:
```bash
npm run dev
```

---

## 🔮 Future Enhancements
* [ ] Migrate from local JSON data management to a full MongoDB CRUD dashboard for automated self-service vendor registration.
* [ ] Implement an automated image optimization pipeline using Next.js native <Image /> component for static logo paths.
* [ ] Integrate multi-language localization (i18n) supporting Portuguese and English profiles.

---

## 📄 License & Rights
Copyright © 2026 Autossuficiência Brasil. All rights reserved.
