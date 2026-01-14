## Quick reuse guide

This page is now driven by `config.js`. Edit that one file to change copy, video, QR target, and the info panel tabs.

### Steps to customize for a new property
- Update `config.js` → `landing.propertyName`, `brand`, `brandSuffix`.
- Point `video.src` (and optionally `poster`) to your new background MP4/poster.
- Set `qr.url` to the website you want the QR and modal to open.
- Adjust `infoButtonLabel`, `buildNumber`, `copyright` as needed.
- Edit or replace `tabs` entries: each item has `id`, `label`, and `contentHtml` (HTML string). Add/remove items to change the vertical tabs and panel content.

### Notes
- Keep your assets (video, poster, logo) in the same folder or update the paths in `config.js`.
- The page reads `config.js` at load time only; reload after edits.
