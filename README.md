# Campus Event Hub
[![Languages](https://img.shields.io/github/languages/top/abbinendra/Campus-Event-Hub?style=flat)](https://github.com/abbinendra/Campus-Event-Hub)

Campus Event Hub is a modern, role-based web application built with React and custom CSS that empowers colleges to create and manage campus events while allowing students to browse, view details, and register through polished dashboards.


## Table of Contents
- [Why Campus Event Hub?](#why-campus-event-hub)
- [Key Features](#key-features)
- [Tech Stack](#tech-stack)
- [Architecture Overview](#architecture-overview)
- [Project Structure](#project-structure)
- [Screenshots](#screenshots)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Install & Run (Frontend)](#install--run-frontend)
- [Environment Variables](#environment-variables)
- [Testing](#testing)
- [Contributing](#contributing)
- [Roadmap](#roadmap)
- [Acknowledgements & Contact](#acknowledgements--contact)

---

## Why Campus Event Hub?
Campus Event Hub was designed to make campus event lifecycle management intuitive and fast. It separates concerns using role-based dashboards:
- Colleges / Organizers: create and manage events, view registrations, publish updates.
- Students / Attendees: discover events, view details, register, and manage RSVPs.

It focuses on usability, accessibility, and an attractive responsive UI so both admins and students have a delightful experience.

---

## Key Features
- Role-based access control (College organizers, Students)
- Create, edit, publish/unpublish events with rich details
- Event listing with search, filters, and categories
- Event detail pages with images, schedule, and registration
- Student registration and dashboard to view registered events
- Responsive UI for mobile and desktop
- Clean, modular React components and custom CSS
- Extensible architecture to integrate with backend APIs, notifications, and analytics

---

## Tech Stack
- Frontend: React (JavaScript), custom CSS, HTML
- Build tools: npm / yarn
- Backend: (optional) Node.js + Express, or any REST API — provide backend URL/env when available
- Database: (optional) MongoDB / PostgreSQL (if backend is implemented)
---

## Architecture Overview
1. React SPA handles routing, state, and UI.
2. Role-based UI shows different navigation and pages depending on authenticated role.
3. Frontend calls a REST/GraphQL backend for CRUD operations on events and user data.
4. Authentication (JWT / session-based) separates and protects routes for organizers and students.
5. Optional: push notifications or email confirmations for registrations.

---

## Project Structure
This section assumes a standard React app layout. Adjust to match your repo.

- public/
  - index.html
  - assets/ (images, logos)
- src/
  - components/ (reusable UI components)
  - pages/ (Home, EventDetails, OrganizerDashboard, StudentDashboard)
  - services/ (api client, auth)
  - styles/ (global & component CSS)
  - App.jsx
  - index.jsx
- README.md
- package.json

---

## Screenshots
Add attractive screenshots or an animated GIF here to showcase:
- Home / Event listing
- Event detail page
- Organizer dashboard (create/edit event)
- Student dashboard (registrations)


---

## Getting Started

### Prerequisites
- Node.js (>= 16.x recommended)
- npm (>= 8) or yarn

### Install & Run (Frontend)
1. Clone the repo:
   ```bash
   git clone https://github.com/abbinendra/Campus-Event-Hub.git
   cd Campus-Event-Hub
   ```
2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```
3. Start the development server:
   ```bash
   npm start
   # or
   yarn start
   ```
4. Open http://localhost:3000 in your browser.

### Build for Production
```bash
npm run build
# or
yarn build
```
The production-ready build will be in the `build/` directory (for Create React App) or `dist/` for other setups.

---


## Environment Variables
Create a `.env` (example) at project root:
```
REACT_APP_API_URL=https://api.yoursite.com
REACT_APP_GOOGLE_MAPS_KEY=your_key_here
REACT_APP_ENV=development
```
Note: Do not commit secrets to the repo. Use a secrets manager for production.

---

## Testing
- Add unit tests with Jest + React Testing Library
- Run tests:
  ```bash
  npm test
  # or
  yarn test
  ```

---


## Contributing
Contributions are welcome! To contribute:
1. Fork the repository
2. Create a feature branch: `git checkout -b feat/awesome-feature`
3. Commit your changes: `git commit -m "Add awesome feature"`
4. Push to your branch: `git push origin feat/awesome-feature`
5. Open a Pull Request describing your changes

Please add tests for new features and follow the existing coding style.

---

## Roadmap
Potential next steps:
- Full backend implementation (events, auth, registration)
- Email confirmations for registrations
- Calendar integration (Google Calendar / iCal)
- CSV export for organizer registrations
- Real-time updates (WebSockets) for live event status
- Mobile-first UI enhancements & accessibility audit

---

## Acknowledgements & Contact
Built with ❤️ using React and custom CSS.

If you'd like help:
- Open an issue on this repo
- Or contact: abhinendra0211@gmail.com

---
