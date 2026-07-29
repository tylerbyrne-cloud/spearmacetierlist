# Spear Mace Tier List

This project is a static Spear Mace player tier list site designed for GitHub Pages deployment.

## What is included
- `index.html`
- `styles.css`
- `script.js`
- `CNAME` for the custom domain `spearmacetiers.com`
- `.github/workflows/deploy-pages.yml` for automatic GitHub Pages deployment
- `.gitignore` to keep system and editor files out of the repo
- `.gitattributes` to normalize line endings and text files

## Uploading to GitHub
1. Create a new GitHub repository.
2. Add all files from this folder to the repository.
3. Commit and push to the `main` or `master` branch.
4. GitHub Actions will automatically deploy the site using `.github/workflows/deploy-pages.yml`.

## GitHub Pages
- The workflow is set to deploy on every push to `main` or `master`.
- If you keep `CNAME` in the repo, the site will publish to `spearmacetiers.com`.

## Notes
- Keep `index.html`, `styles.css`, and `script.js` together at the repository root.
- Use the `.gitignore` file to avoid uploading local system or editor files.
