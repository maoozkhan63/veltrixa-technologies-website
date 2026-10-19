# Veltrixa Technologies website

Premium, dependency-light static website for Veltrixa Technologies. It uses HTML, CSS, SVG, and vanilla JavaScript; no Python, backend, database, build step, or API keys are required.

## Local preview

Open `index.html` directly for a quick preview, or serve this folder with any static server. For example, from the project folder:

```text
npx serve .
```

Then open the local URL printed by the server. A static server is useful for checking relative links and the 404 page.

## Configuration

Edit the `CONFIG` object near the top of `assets/js/main.js` to change the email, phone number, WhatsApp setting/number, or Fiverr profile URL. WhatsApp is disabled by default and Fiverr remains hidden until a real URL is supplied. Contact details repeated in the HTML footer should also be updated if the business details change.

The inquiry form validates in the browser and prepares a `mailto:` draft. A static site cannot deliver or store form submissions by itself; the visitor must press Send in their email application. To use a form provider later, replace the submit handler with that provider's documented endpoint and never commit secret keys.

## GitHub Pages deployment

1. Create a new GitHub repository and upload this folder's contents to its default branch. Do not include unrelated RestaurantPro POS files or credentials.
2. In the repository, open **Settings → Pages**, select **Deploy from a branch**, choose the default branch and `/ (root)`, then save.
3. Wait for the Pages deployment, then open the exact URL GitHub reports. Project sites normally use `https://USERNAME.github.io/REPOSITORY/`.
4. Replace the `example.com` canonical URLs in each HTML file, `sitemap.xml`, and the commented Sitemap line in `robots.txt` with the verified public URL. Commit and republish.
5. For a custom domain later, add it in Pages settings, follow GitHub's DNS instructions, then replace the canonical URLs with the final HTTPS domain.

To roll back, use Git history to restore the previous commit and republish the Pages branch. Netlify is an alternative: drag the folder into Netlify Drop or connect the repository; its default static hosting also supports this site without a backend.

## Adding portfolio projects

Duplicate the feature/project card pattern in `portfolio.html`, add a new project section, and keep descriptions factual. Use only authorized real screenshots; label illustrative mockups clearly. Add a navigation link only if the project gets its own page.

## QA notes

The site includes responsive layouts for small phones through desktop, keyboard-visible focus states, semantic labels, reduced-motion support, relative internal paths for GitHub Pages subpaths, client-side form validation, and a configurable contact fallback. RestaurantPro is presented as an illustrative project preview; no live demo, customers, reviews, office address, or unsupported claims are invented.
