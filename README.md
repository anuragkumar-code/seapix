# Seapix (PhotoVault)

A modern, beautiful web application for creating, organizing, and sharing digital photo albums. Seapix provides a seamless experience for users to register, log in, and manage their personal photo collections with an intuitive dashboard and elegant UI.

---

## Features

- **Landing Page:**  
  Engaging landing page with a hero section, feature highlights, and clear calls to action.

- **Authentication:**  
  - Modal-based registration and login flows.
  - Smooth transitions between login and registration.
  - (Currently UI only; backend integration required for real authentication.)

- **User Dashboard:**  
  - View all albums created by the user.
  - Responsive grid layout for albums.
  - Edit, share, or delete albums (UI only).

- **Album Management:**  
  - Create new albums with title, description, tags, and cover image.
  - View album details and all contained photos.
  - Upload new photos to albums (UI only).
  - Lightbox for viewing photos in detail.

- **Modern UI/UX:**  
  - Built with React, TypeScript, and Tailwind CSS.
  - Uses Radix UI and Lucide icons for accessibility and style.
  - Responsive and mobile-friendly design.

---

## Tech Stack

- **Frontend:** React 18, TypeScript, Vite
- **Styling:** Tailwind CSS, Radix UI, Lucide Icons
- **State/Data:** React Query (for future API integration), React Context/State
- **Routing:** React Router DOM
- **Utilities:** yet-another-react-lightbox, date-fns, and more

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- [npm](https://www.npmjs.com/) or [bun](https://bun.sh/) or [yarn](https://yarnpkg.com/)

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/anuragkumar-code/seapix.git
   cd seapix
   ```

2. **Install dependencies:**
   ```bash
   npm install
   # or
   bun install
   # or
   yarn install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   # or
   bun run dev
   # or
   yarn dev
   ```

4. **Open your browser:**  
   Visit [http://localhost:8080](http://localhost:8080) to view the app.

---

## Project Structure

```
src/
  components/      # Reusable UI components (modals, header, footer, etc.)
  pages/           # Main pages (Landing, Dashboard, Album Detail, etc.)
  hooks/           # Custom React hooks
  lib/             # Utility functions
  assets/          # Static assets (images, etc.)
  App.tsx          # Main app and routing
  main.tsx         # App entry point
```

---

## Usage

- **Landing Page:**  
  Explore the app, open registration or login modals from the header or hero section.

- **Authentication:**  
  Use the modals to register or log in (currently only UI, no backend).

- **Dashboard:**  
  View your albums, create new ones, or click an album to see its photos.

- **Album Detail:**  
  View all photos in an album, open them in a lightbox, or upload new photos (UI only).

---

## Customization & Development

- **Aliases:**  
  The project uses `@` as an alias for the `src/` directory (see `vite.config.ts` and `tsconfig.json`).

- **Styling:**  
  Tailwind CSS is fully configured. You can customize the theme in `tailwind.config.ts`.

- **Mock Data:**  
  The dashboard and album pages use mock data. Integrate your backend or API for real data.

- **TypeScript:**  
  The project is fully typed for safety and scalability.

---

## Scripts

- `npm run dev` — Start the development server
- `npm run build` — Build for production
- `npm run preview` — Preview the production build
- `npm run lint` — Lint the codebase

---

## Contributing

Contributions are welcome! Please open issues or submit pull requests for improvements, bug fixes, or new features.

---

## License

This project is licensed under the MIT License.

---

## Acknowledgements

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Radix UI](https://www.radix-ui.com/)
- [Lucide Icons](https://lucide.dev/)
- [yet-another-react-lightbox](https://yet-another-react-lightbox.com/)

---

Feel free to further customize this README to match your branding or add more details as your project evolves!
