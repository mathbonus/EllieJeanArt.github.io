# my memory closet

An EJS + Express portfolio index, compiled to static HTML for GitHub Pages. It links to all four sections of the Pinterest board (112 pins total); pin images remain hosted on Pinterest.

    npm install
    npm start                      # live dev server on :3000
    BASE=/repo-name/ npm run build # static site into ./dist

## Publish
1. Push this folder to a GitHub repo (branch `main`).
2. Repo → Settings → Pages → Source: **GitHub Actions**.
3. Every push to `main` builds and deploys. Site: `https://<user>.github.io/<repo>/`
   (a repo named `<user>.github.io` deploys at the root).

Section titles, counts, and links are maintained in `data/sections.js`.

The home page includes the Pinterest profile image and a photo rail with
representative images from each collection. Photos are hosted by Pinterest;
the rail randomly centers a new image every 10 seconds, blurring the surrounding
images. The image URLs and captions are maintained in `data/sections.js`.
