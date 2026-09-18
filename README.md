# Rich 💸

A static, slightly funny site featuring the world's top 20 fortunes (including Asian representation with $50B+ net worth), based on approximate data from [Forbes Real-Time Billionaires](https://www.forbes.com/real-time-billionaires/).

## Run locally

Open `index.html` in your browser, or spin up a simple server:

```bash
python -m http.server 5173
```

and visit `http://localhost:5173`.

## Structure

- `index.html` — main ranking page
- `about.html` — "My Story" page
- `assets/style.css` — shared styles
- `assets/about.css` — styles specific to `about.html`
- `assets/data.js` — ranking data (name, net worth, country, quip)
- `assets/script.js` — renders the ranking from `data.js`
- `assets/about.js` — copy-to-clipboard logic for the BTC address
