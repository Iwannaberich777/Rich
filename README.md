# Rich 💸

Sitio estático y un poco gracioso con el top 20 de las fortunas más grandes del mundo (incluyendo representación asiática con más de $50.000 millones), basado en datos aproximados de [Forbes Real-Time Billionaires](https://www.forbes.com/real-time-billionaires/).

## Ver en local

Abre `index.html` en el navegador, o levanta un servidor simple:

```bash
python -m http.server 5173
```

y visita `http://localhost:5173`.

## Estructura

- `index.html` — estructura de la página
- `assets/style.css` — estilos
- `assets/data.js` — datos del ranking (nombre, fortuna, país, frase)
- `assets/script.js` — renderiza el ranking a partir de `data.js`
