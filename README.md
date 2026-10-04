# NeuraliftX Marketing Website (Frontend)

A modern, fast, and SEO-optimized standalone frontend website for **NeuraliftX**, built with **React**, **Vite**, **Tailwind CSS**, and **Framer Motion**.

---

## 🌟 Included Pages

| Page | Path | Description |
| :--- | :--- | :--- |
| **Home / Landing** | `/` | Complete hero, feature showcase, stats, and call-to-actions |
| **About Us** | `/about` | Mission, story, values, and leadership team |
| **Technology** | `/technology` | Platform architecture, AI integration, and capabilities |
| **Media** | `/media` | Press releases, news coverage, and multimedia assets |
| **Contact Us** | `/contact` | Inquiry form and direct contact information |

---

## 🚀 Quick Start (Local Development)

### 1. Install Dependencies
```bash
npm install
```

### 2. Configure Environment Variables
Copy `.env.example` to `.env`:
```bash
# Windows PowerShell
copy .env.example .env
```

Edit `.env`:
```env
# URL of your main NeuraliftX application where users log in or register
VITE_APP_URL=https://app.neuraliftx.in

# URL of your backend API (used for contact inquiries)
VITE_API_URL=https://api.neuraliftx.in
```

### 3. Run Development Server
```bash
npm run dev
```
Open your browser at [http://localhost:3000](http://localhost:3000).

---

## 🌐 How to Deploy to Vercel

### Method 1: Deploy with Vercel Web Dashboard (Recommended)

1. **Push your code to GitHub / GitLab / Bitbucket**:
   - Create a new repository (e.g. `neuraliftx-website`).
   - Push the contents of the `neuraliftx-website` folder to that repository:
     ```bash
     cd neuraliftx-website
     git init
     git add .
     git commit -m "Initial commit for NeuraliftX website"
     git branch -M main
     git remote add origin https://github.com/your-username/neuraliftx-website.git
     git push -u origin main
     ```

2. **Import into Vercel**:
   - Go to [vercel.com](https://vercel.com) and log in.
   - Click **"Add New..."** ➔ **"Project"**.
   - Select your repository and click **"Import"**.

3. **Configure Project Settings**:
   - **Framework Preset**: `Vite` (automatically detected).
   - **Root Directory**: Leave as `./` (or select `neuraliftx-website` if the repo contains a parent directory).
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`

4. **Add Environment Variables**:
   Under the **Environment Variables** section, add:
   - `VITE_APP_URL` = `https://app.neuraliftx.in` (or your actual app URL)
   - `VITE_API_URL` = `https://api.neuraliftx.in`

5. **Deploy**:
   - Click **"Deploy"**.
   - In ~30 seconds, your site will be live at `https://your-project.vercel.app`!
   - You can connect your custom domain (e.g., `neuraliftx.in` or `www.neuraliftx.in`) under **Project Settings ➔ Domains**.

---

### Method 2: Deploy with Vercel CLI (Instant from Terminal)

1. Open PowerShell or Terminal inside `d:\EDU\neuraliftx-website`.
2. Run:
   ```bash
   npx vercel
   ```
3. Follow the interactive prompts:
   - *Set up and deploy?* ➔ `Y`
   - *Which scope?* ➔ Select your Vercel account
   - *Link to existing project?* ➔ `N`
   - *What's your project's name?* ➔ `neuraliftx-website`
   - *In which directory is your code located?* ➔ `./`
   - *Want to modify settings?* ➔ `N`
4. For production deployment:
   ```bash
   npx vercel --prod
   ```

---

## 🛠 Project Structure

```
neuraliftx-website/
├── .env.example             # Example environment variables
├── .env                     # Local environment variables
├── index.html               # Main HTML template with fonts and Tailwind
├── package.json             # NPM dependencies and scripts
├── vercel.json              # Vercel SPA routing configuration (prevents 404s)
├── vite.config.js           # Vite build configuration
└── src/
    ├── AboutUsPage.jsx      # About Us page
    ├── App.jsx              # Main routing & scroll handling
    ├── ContactPage.jsx      # Contact page with submission form
    ├── LandingPage.css      # Core styles, themes, and animations
    ├── LandingPage.jsx      # Main homepage
    ├── MediaPage.jsx        # Media / Press page
    ├── TechnologyPage.jsx   # Technology showcase page
    ├── main.jsx             # React DOM entry point
    ├── components/
    │   ├── LanguageSelector.jsx # Multi-language switcher
    │   ├── OrganicNavbar.jsx    # Sticky navigation bar with active route highlighting
    │   └── SEO.jsx              # Dynamic meta tags & SEO helper
    └── hooks/
        └── useOrganicPage.js    # Scroll-reveal animations hook
```

---

## ⚡ Important Features Included
- **Client-Side Routing with `vercel.json`**: Ensures direct visits to `/about`, `/technology`, etc., do not return 404 errors on Vercel.
- **Scroll To Top**: Automatically resets scroll position when navigating between pages.
- **External Redirection**: "Log in" and "Join Individual" buttons route seamlessly to your main web app based on `VITE_APP_URL`.
