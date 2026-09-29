# DevTools Hub — Free Online Developer Tools

A modern, high-performance, and privacy-friendly web application providing free online utilities for software developers and designers. Built with **React 18**, **Vite**, **React Router DOM**, and **Vanilla CSS**.

All computations run **100% locally in your browser** — no data or code snippets are ever transmitted to external servers.

---

## 🚀 Quick Start & Run Commands

Follow these steps to run the application on your computer:

### 1. Install Dependencies
Open your terminal inside `C:\Users\Admin\Desktop\new` and run:
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```
Open your browser at `http://localhost:3000` to interact with DevTools Hub.

### 3. Build for Production
```bash
npm run build
```

### 4. Preview Production Build
```bash
npm run preview
```

---

## 🛠️ Included Developer Tools & Routes

| Route | Tool Name | Description |
| :--- | :--- | :--- |
| `/` | **Home Page** | Landing hero, popular tools grid, features & privacy guarantee |
| `/tools` | **Tools Directory** | Filterable grid with search bar and category pills |
| `/tools/json-formatter` | **JSON Formatter** | Prettify (2 spaces), minify, validate, & download `.json` files |
| `/tools/json-validator` | **JSON Validator** | Check syntax validity with detailed line error messages |
| `/tools/base64` | **Base64 Encoder/Decoder** | Encode text to Base64 or decode Base64 back to plain text |
| `/tools/url-encoder` | **URL Encoder** | Percent-encode special characters into URL-safe strings |
| `/tools/url-decoder` | **URL Decoder** | Decode percent-encoded URI parameters |
| `/tools/uuid-generator` | **UUID Generator** | Generate version 4 UUIDs individually or in bulk (1-50) |
| `/tools/timestamp` | **Timestamp Converter** | Convert Unix epoch seconds/ms to human dates and vice versa |
| `/tools/text-case` | **Text Case Converter** | Transform text between UPPER, lower, camelCase, snake_case, etc. |
| `/tools/color-converter` | **Color Converter** | Live visual palette converter between HEX, RGB, and HSL |
| `/tools/password-generator` | **Password Generator** | Generate cryptographically secure passwords with strength meter |
| `/about` | **About Page** | Mission, privacy first policy, and architecture breakdown |
| `/contact` | **Contact Page** | Client-side contact feedback form |
| `/privacy` | **Privacy Policy** | 100% client-side data security guarantee |
| `/terms` | **Terms of Service** | Usage terms and disclaimer |

---

## 📝 Important Customization Places

Before deploying to Vercel and indexing on Google Search Console, update placeholder URLs:

1. **`index.html`**: Replace `https://YOUR_PROJECT.vercel.app` with your live Vercel domain in `<meta property="og:url">`, `<meta name="twitter:url">`, and `<link rel="canonical">`.
2. **`public/robots.txt`**: Update `Sitemap: https://YOUR_PROJECT.vercel.app/sitemap.xml`.
3. **`public/sitemap.xml`**: Replace `https://YOUR_PROJECT.vercel.app` with your live domain across all `<loc>` tags.
4. **`src/components/Seo.jsx`**: Update the `baseUrl` constant on line 9.

---

## 🌐 Step-by-Step GitHub → Vercel Deployment

1. **Initialize Git & Push to GitHub**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit of DevTools Hub"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPOSITORY.git
   git push -u origin main
   ```

2. **Deploy on Vercel**:
   - Sign in to [Vercel.com](https://vercel.com) using your GitHub account.
   - Click **Add New...** → **Project**.
   - Import your GitHub repository (`DevTools Hub`).
   - Framework preset will automatically detect **Vite**. Click **Deploy**.
   - Your live website URL will be ready in ~30 seconds (e.g., `https://devtools-hub.vercel.app`).

3. **Google Search Console Indexing**:
   - Go to [Google Search Console](https://search.google.com/search-console).
   - Add your live Vercel domain URL.
   - Select **HTML Tag** method and copy the meta verification code into `<head>` of `index.html`.
   - Push update to GitHub.
   - Submit `sitemap.xml` under the **Sitemaps** tab in Google Search Console.

---

## 📄 Author & License

Developed & Maintained with ❤️ by **Sushil K. Kawde**.

Made for software developers. Free to use and customize.
