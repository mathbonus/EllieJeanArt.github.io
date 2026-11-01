# my memory closet (wireframe)

EJS + Express for local dev, compiled to static HTML for GitHub Pages.

    npm install
    npm start                      # live dev server on :3000
    BASE=/repo-name/ npm run build # static site into ./dist

## Publish
1. Push this folder to a GitHub repo (branch `main`).
2. Repo → Settings → Pages → Source: **GitHub Actions**.
3. Every push to `main` builds and deploys. Site: `https://<user>.github.io/<repo>/`
   (a repo named `<user>.github.io` deploys at the root).

Real pin images: drop files in `public/img/` and set `img: '/img/file.jpg'` in `data/memories.js`.
