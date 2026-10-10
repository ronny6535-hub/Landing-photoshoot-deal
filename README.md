# Ronny's Photography & Video: landing page

A single-page, mobile-first landing page for the $150 photoshoot offer. Plain HTML, CSS and JavaScript. No framework and no build step, so it deploys exactly as it is.

## Files

| File | What it is |
| --- | --- |
| `index.html` | The page (copy, SEO tags, schema, Pixel placeholder) |
| `styles.css` | All styling |
| `script.js` | Scroll animation, lightbox, Pixel event, reviews on/off flag |
| `logo.png` | Logo (also used for the favicon and link previews) |
| `qr.png` | QR code to https://card.ronnysphotography.com, shown on desktop only |
| `ronnys-photography-and-video.vcf` | The "Save contact" download |
| `images/gallery-01.jpg` to `gallery-08.jpg` | The portfolio photos |
| `CNAME` | Only used by GitHub Pages (safe to leave for other hosts) |

## Deploy

Pick one. Each one serves the folder as it is. No build command is needed and the publish directory is the root of this folder.

### Netlify
1. Go to app.netlify.com, choose Add new site, then Deploy manually.
2. Drag this whole folder onto the page.
3. Under Domain management, add `card.ronnysphotography.com`.

### Vercel
1. Run `npx vercel` inside this folder (or import the folder from a Git repository).
2. Accept the defaults. Framework preset: Other. Output directory: leave blank.
3. Under Settings, then Domains, add `card.ronnysphotography.com`.

### Cloudflare Pages
1. In the Cloudflare dashboard go to Workers and Pages, then Create, then Pages, then Upload assets.
2. Upload this folder and deploy.
3. Open the project, then Custom domains, and add `card.ronnysphotography.com`.

### GitHub Pages
1. Put these files in the root of a repository (the `CNAME` file is already included).
2. In the repository go to Settings, then Pages, set Source to Deploy from a branch, choose `main` and `/ (root)`.
3. Enter `card.ronnysphotography.com` as the custom domain and tick Enforce HTTPS once it is available.

## Point card.ronnysphotography.com at the site

At the place you manage the DNS for `ronnysphotography.com`, add a **CNAME** record:

| Type | Host / Name | Value / Target |
| --- | --- | --- |
| CNAME | `card` | the target your host shows you (see below) |

Typical targets:
- Netlify: `your-site-name.netlify.app`
- Vercel: `cname.vercel-dns.com`
- Cloudflare Pages: `your-project.pages.dev`
- GitHub Pages: `your-username.github.io`

Remove any old `A`, `AAAA` or other `CNAME` record for `card` first, because a name can only have one CNAME. DNS can take from a few minutes to a few hours to update. The host will issue the HTTPS certificate automatically once the record is found.

## Things you still need to fill in

1. More gallery photos if you want them (see the comment above the gallery in `index.html`).
2. More real reviews if you have them (copy a `review` block in `index.html`). Four reviews are in already. Set `SHOW_TESTIMONIALS = false` in `script.js` to hide the section.
3. Your Meta Pixel code and ID in the `<head>` of `index.html`.
4. Check the Facebook and Instagram links in the footer (and in the schema block).
5. A better link-preview image if you want one (replace the `og:image` and `twitter:image` URLs).

## Tracking

Every call or text button has `data-track="contact"`. When the Meta Pixel is installed, tapping one fires the standard `Contact` event. To test, install the Meta Pixel Helper extension in Chrome and tap a button.

## Reusing the QR code

`qr.png` points to `https://card.ronnysphotography.com`. If the address ever changes, generate a new QR code and replace the file.
