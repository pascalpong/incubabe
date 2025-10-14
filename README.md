## Incubabe SketchUp → AR Viewer

This repo contains a single-page Next.js (App Router) experience that turns a SketchUp export into an AR preview you can deploy on Vercel for free.

The page uses the [`<model-viewer>`](https://modelviewer.dev/) web component, which handles WebXR (Android) and Quick Look (iOS) out of the box.

## Prepare your assets

1. Export your SketchUp model as **glTF (`.glb`)**. If textures are external, embed them when exporting so they travel with the file.
2. Create an **USDZ** version for iOS. SketchUp Pro can export USDZ or you can convert the `.glb` with Apple’s Reality Converter.
3. Place both files in `public/models` and name them:
   - `public/models/incubabe.glb`
   - `public/models/incubabe.usdz`
4. If you prefer different filenames, update the constants in `src/app/page.tsx`.

That’s it—the page will automatically display the model in 3D on desktop with an “View in your space” AR button on mobile.

## Develop locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to test. If you’re working on macOS you can open the page with Safari on an iPhone/iPad (same network) to verify Quick Look.

## Deploy for free on Vercel

1. Push this repo to GitHub.
2. Import it in [Vercel](https://vercel.com/new) and select the default Next.js preset.
3. Once deployed, mobile users can tap the AR button to load the model instantly—no native app required.

No server-side costs are involved; the only hosting is your static `.glb`/`.usdz` files served from Vercel’s CDN.
