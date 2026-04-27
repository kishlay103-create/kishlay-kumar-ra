# Kishlay Kumar, SEBI Registered Research Analyst

Official website for **Kishlay Kumar**, SEBI Registered Research Analyst (Reg. No. **INH000022826**).

Built as a multi-page static site, modern fintech aesthetic in forest green + cream, fully SEBI-compliant, WCAG 2.1 AA accessible.

## Pages

- `index.html`, Home (hero, credentials, approach, formats, process, compliance band)
- `about.html`, Registration details + philosophy + timeline
- `services.html`, Research formats, methodology, fee structure, engagement
- `compliance.html`, Investor Charter, 4-level grievance escalation, complaints data, disclosures, KYC notice, accessibility
- `contact.html`, Direct channels + grievance routing

## Tech

Plain HTML + CSS + a tiny JS file. No build step. The Home page also loads a Tweaks panel (React + Babel via CDN) that lets the owner change the "Get in touch" CTA color from the browser.

## Hosting on GitHub Pages

1. Push the contents of this folder to the **root** of your repository (`kishlay103-create/kishlay-kumar-ra`) on the `main` branch.
2. In the repo, go to **Settings → Pages**.
3. Under **Source**, choose **Deploy from a branch**.
4. Branch: `main`, Folder: `/ (root)`. Save.
5. The site will be live at **https://kishlay103-create.github.io/kishlay-kumar-ra/** within a minute or two.

## Files in this folder

```
index.html
about.html
services.html
compliance.html
contact.html
styles.css
script.js
tweaks-panel.jsx   (only used by the Tweaks toggle on Home)
README.md
```

## Updating compliance data

The complaints-data tables on `compliance.html` are placeholders showing zeros for the current month and the trailing months. SEBI requires these be updated within 7 days of month-end and the annual figures within 30 days of FY close. Edit the table rows in `compliance.html` directly.

## Disclaimer

Investment in securities market is subject to market risks. Read all the related documents carefully before investing. Registration granted by SEBI and certification from NISM in no way guarantee performance of the intermediary or provide any assurance of returns to investors.
