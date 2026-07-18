# Tania St Vil — Portfolio

A personal portfolio website (light, neumorphic style) built with plain **HTML, CSS, and JavaScript** — no build step, no dependencies. Inspired by the "Inbio" portfolio layout (white version).

## Run locally

Just open `index.html` in your browser, or serve it:

```bash
# Python (already on your Mac)
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Structure

```
Tania-Portfolio/
├── index.html                 # all page content/sections
├── assets/
│   ├── css/style.css          # theme + layout (edit --color-primary to change accent)
│   ├── js/main.js             # menu, tabs, scroll-spy, animations
│   ├── images/
│   │   ├── avatar.png         # hero photo
│   │   ├── favicon.svg
│   │   └── logos/             # experience & education card logos
│   └── Tania-St-Vil-Resume.pdf
└── README.md
```

## Sections

Home · About · Experience · Education · Skills · Projects · Blog · Interests & Hobbies · Contact

## What to fill in (search the code for `TODO`)

- [ ] **Project links** — replace the `href="#"` placeholders (Live Demo / GitHub / Visit) in the Projects section.
- [ ] **Blog posts** — the three cards are placeholders (`Your … post title`, `Month DD, YYYY`, `Category`). Edit each `<article class="blog-card">`, and optionally add a cover image inside the thumbnail link.
- [ ] **Interests & Hobbies** — replace the six placeholder cards (`Hobby one` … `Hobby six`) with your real interests, icons, and text.
- [ ] **GitHub username** — footer link points to `github.com/thany-8`; confirm/replace.
- [ ] **Skill percentages** — the numbers in the Skills tab are placeholders; adjust to taste.
- [ ] **Experience locations** — "Remote" is a placeholder for FlyRank / CodePath / ColorStack.

Done: ✅ light neumorphic theme · ✅ hero photo (`avatar.png`) · ✅ experience & education logos.

## Change the accent color

Edit these two lines at the top of `assets/css/style.css`:

```css
--color-primary: #ff014f;
--color-subtitle: #f9004d;
```

## Deploy for free

**Netlify (drag & drop):** go to https://app.netlify.com/drop and drag the `Tania-Portfolio` folder in.

**GitHub Pages:**
```bash
git init && git add . && git commit -m "Initial portfolio"
gh repo create Tania-Portfolio --public --source=. --push
# then in the repo: Settings → Pages → Deploy from branch → main / root
```
