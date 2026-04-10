# Sean Tyler | Executive Portfolio (React + Tailwind)

**🚨 MASTER REPOSITORY 🚨**

This repository contains the **Production Architecture** for `seantyler.me`. 

> [!NOTE]
> **Historical Context:** An earlier version of this site was built in vanilla HTML/CSS (`seantyler-profile`). That iteration served purely as a structural framework and rapid-prototyping sandbox. This localized React/Tailwind application is the finalized, high-performance, executive-level codebase.

## Tech Stack
- **Framework:** React + Vite
- **Styling:** Tailwind CSS (Deep Navy/Slate B2B SaaS aesthetic)
- **Icons:** Lucide React
- **Typography:** Inter (via Google Fonts)

## Local Development
To run this project locally, ensure you have Node.js installed, then execute:

```bash
# 1. Install all dependencies
npm install

# 2. Start the lightning-fast Vite development server
npm run dev
```

Visit the `localhost` URL provided in the terminal (usually `http://localhost:5173`) to view the application live.

## Deployment Strategy
This project is engineered to interface directly with Vercel for Continuous Deployment.
Any changes pushed to the primary branch will be automatically intercepted, built via `npm run build`, and deployed to global Edge servers.
