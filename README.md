# <Munish Thakur's Portfolio/> 🚀

A modern, high-performance, and fully responsive 3D interactive developer portfolio built with the Next.js App Router and React Three Fiber. 

Designed to beautifully showcase full-stack engineering skills, professional experience, and an integrated secure contact system.

---

## ✨ Features

- **⚡ Next.js 15 App Router** – Ultra-fast server-side rendering and routing.
- **🎨 Tailwind CSS v4** – Modern, responsive design system with custom utility classes.
- **🖼️ 3D Model Integration** – Immersive hero section driven by `@react-three/fiber` and `@react-three/drei`.
- **🌙 Dark/Light Mode Theme** – Seamless system-aware theme toggling with `next-themes`.
- **📫 Secure Contact Form** – Custom Next.js API route leveraging `nodemailer` for SMTP secure email delivery.
- **📱 Responsive Mobile Layout** – Elegant `framer-motion` sliding navigation drawers for small devices.
- **📄 Instant PDF Resume Generation** – View and download a professionally formatted resume directly from the Navbar or Bio.

---

## 🛠️ Built With

- **Framework:** [Next.js](https://nextjs.org/) (React 19)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **State & Animations:** [Framer Motion](https://www.framer.com/motion/)
- **3D Graphics Engine:** [Three.js](https://threejs.org/) + React Three Fiber
- **Icons:** [Lucide React](https://lucide.dev/)
- **Backend Email Routing:** Nodemailer + Google App Passwords

---

## 🚀 Getting Started

If you want to run this application locally:

### 1. Clone the repository
\`\`\`bash
git clone <your-repo-link>
cd portfolio
\`\`\`

### 2. Install Dependencies
\`\`\`bash
npm install
\`\`\`

### 3. Configure Environment Variables
Create a \`.env.local\` file in the root of the project to enable the contact form API route:

\`\`\`env
EMAIL_USER=your_gmail_address@gmail.com
EMAIL_PASS=your_16_digit_app_password
EMAIL_RECEIVER=your_gmail_address@gmail.com
\`\`\`
*(**Note:** Ensure you generate a secure Google App Password for `EMAIL_PASS`, as standard passwords will be rejected by Google's SMTP servers).*

### 4. Run the Development Server
\`\`\`bash
npm run dev
\`\`\`
Open [http://localhost:3000](http://localhost:3000) with your browser to explore the portfolio!

---

## 📂 Project Structure Overview

- **/src/app** - Next.js Core Pages & API Routes (`/api/contact/route.ts`).
- **/src/components** - Reusable UI components (`hero.tsx`, `about.tsx`, `navbar.tsx`, etc.).
- **/public** - Static assets like the `resume.pdf`, profile images, and 3D `.glb/.gltf` canvas models.

---

## 💻 Author
**Munish Thakur** – Software Engineer
- 📧 Email: thakurmunish253@gmail.com

---
*Built with ❤️ utilizing Next.js & Three.js.*
