# Portfolio Project Documentation

## 1. Introduction
This project is a personal portfolio website for K. M. Fathum Mubin Sachcha. It is designed to showcase skills, projects, and professional experience using modern web technologies. The site serves as an interactive online resume and a central hub to explore his work.

## 2. Tech Stack
The application is built using the following core technologies:
* **Frontend Framework:** React 19 with TypeScript
* **Build Tool:** Vite
* **Styling:** Tailwind CSS
* **Animations:** Framer Motion, GSAP
* **Icons:** Lucide React, FontAwesome
* **3D & Canvas:** Three.js, React Three Fiber, Canvas Confetti
* **Data Fetching:** Axios, GitHub Contributions API
* **Routing:** React Router DOM

## 3. Project Structure
The project follows a standard React/Vite structure:
* `src/components/`: Contains all the modular UI components.
  * `Navbar.tsx`: Sticky navigation bar with smooth scrolling to sections.
  * `Hero.tsx`: The landing section featuring a dynamic typing effect, social links, and an animated profile picture.
  * `About.tsx`: An interactive "About Me" section featuring swipeable cards that reveal personal and educational details.
  * `Skills.tsx`: Showcases technical skills categorized by domains.
  * `Projects.tsx`: Displays featured projects (e.g., Pet Shop, Pet Shelter, Sneakers Shop) with links to live demos and GitHub repositories.
  * `CodingActivity.tsx`: Integrates with the GitHub API to display real-time contribution graphs and coding streaks.
  * `Contact.tsx`: Provides contact information and social media links.
  * `CanvasBackground.tsx`: Provides an interactive background layer.
* `src/index.css`: Global styles and Tailwind configuration.
* `src/App.tsx` & `main.tsx`: Entry points for the React application.

## 4. Key Features
* **Fully Responsive Design:** Adapts smoothly across mobile, tablet, and desktop viewports.
* **Interactive Animations:** Uses Framer Motion for smooth section transitions, scroll-based reveals, and interactive elements.
* **Swipeable About Cards:** A unique approach to presenting personal information using draggable, physical-feeling cards.
* **Live GitHub Stats:** Real-time fetching of GitHub contributions to display current and highest streaks using `react-github-calendar` and custom logic.
* **Modern UI:** Aesthetic glassmorphism effects, gradient glows, and modern UI tokens.

## 5. Setup & Installation
To run this project locally:

1. **Clone the repository**
2. **Install dependencies:**
   \`\`\`bash
   npm install
   \`\`\`
3. **Run the development server:**
   \`\`\`bash
   npm run dev
   \`\`\`
4. **Build for production:**
   \`\`\`bash
   npm run build
   \`\`\`

## 6. Future Enhancements
* Continuously update the `Projects.tsx` with newer work.
* Maintain the `package.json` dependencies to ensure security and performance optimization.
* Explore adding a backend for direct messaging or a contact form processing pipeline.

## 7. Conclusion
This portfolio reflects a strong grasp of modern frontend development, UI/UX principles, and interactive design. It leverages the latest React features and animation libraries to create an engaging and professional user experience.
