# Copilot Instructions for portfolio-site

This project is a simple static portfolio site for academic/research use, designed to be hosted on GitHub Pages. It uses only HTML, CSS, and JavaScript (no frameworks or build tools).

## Project Structure
- `index.html`: Main entry point. Contains all page sections (profile, research, teaching, projects, etc.).
- `style.css`: All site styling. Organized by page section.
- `script.js`: Handles any interactive behavior (minimal, mostly for UI polish).
- `assets/`: Place for images, PDFs, or other static files.

## Key Workflows
- **Local Preview:**
  - Run: `python3 -m http.server 5173`
  - Open: [http://localhost:5173](http://localhost:5173)
- **Deployment:**
  - Pushing to `main` or `master` triggers GitHub Actions workflow in `.github/workflows/pages.yml` to deploy to GitHub Pages.
  - No manual build step required.

## Customization Patterns
- Update `index.html` for all content changes (name, email, links, project cards, etc.).
- Add new images or files to `assets/` and reference them with relative paths.
- For new sections, follow the semantic HTML structure used in `index.html`.
- Keep all styling in `style.css` (avoid inline styles).
- Use only vanilla JS in `script.js` (no external dependencies).

## Conventions
- No package manager, bundler, or transpiler is used or required.
- No tests or CI beyond GitHub Pages deployment.
- All code should remain framework-free and easy to read for non-developers.
- Keep accessibility and mobile responsiveness in mind (see existing HTML/CSS for patterns).

## Integration Points
- Site is published via GitHub Pages using the workflow in `.github/workflows/pages.yml`.
- No external APIs or dynamic backends are used.

## Examples
- To add a new project card: copy an existing card block in `index.html` and update its content.
- To add a new image: place it in `assets/` and reference as `assets/your-image.png` in HTML.

For more, see [README.md](../../README.md).
