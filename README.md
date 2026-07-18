# Tania St Vil — Portfolio

A personal portfolio website (dark, neumorphic style) built with plain **HTML, CSS, and JavaScript** — no build step, no dependencies. Inspired by the "Inbio" portfolio layout.

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
│   ├── images/                # favicon.svg + (add) avatar.jpg
│   └── Tania-St-Vil-Resume.pdf
└── README.md
```

## What to fill in (search the code for `TODO`)

- [ ] **Photo** — add `assets/images/avatar.jpg`, then in `index.html` replace the
      `.photo-placeholder` block in the Hero with `<img src="assets/images/avatar.jpg" alt="Tania St Vil" />`.
- [ ] **Project links** — replace the `href="#"` placeholders (Live Demo / GitHub / Visit).
- [ ] **GitHub username** — footer link currently points to `github.com/thany-8`; confirm/replace.
- [ ] **Company/school logos** — optional: drop image files in `assets/images/` and swap the
      text monograms (`FR`, `CP`, `CS`, `CM`, `SF`) in the experience/education cards for
      `<img src="assets/images/flyrank.png" alt="FlyRank.ai" />`.
- [ ] **Skill percentages** — the numbers in the Skills tab are placeholders; adjust to taste.
- [ ] **Experience locations** — "Remote" is a placeholder for FlyRank/CodePath/ColorStack.

## Change the accent color

Edit these two lines at the top of `assets/css/style.css`:

```css
--color-primary: #ff014f;
--color-subtitle: #ff014f;
```

## Deploy for free

**Netlify (drag & drop):** go to https://app.netlify.com/drop and drag the `Tania-Portfolio` folder in.

**GitHub Pages:**
```bash
git init && git add . && git commit -m "Initial portfolio"
gh repo create Tania-Portfolio --public --source=. --push
# then in the repo: Settings → Pages → Deploy from branch → main / root
```
