const express = require('express');
const React = require('react');
const ReactDOMServer = require('react-dom/server');
const app = express();

function StaticMap() {
  return (
    <div>
      <div id="map" style="width: 100%; height: 500px;">Cargando mapa...</div>
      <link 
        rel="stylesheet" 
        href="https://unpkg.com/leaflet@1.9.3/dist/leaflet.css" 
        integrity="sha384-sA+W9HxBR3NNOz1FJhNSwB5OON6BNdE1EbtUvRRB1xwAsDT9P2kXWzz1p+bxv4qu" 
        crossOrigin=""
      />
    </div>
  );
}

app.get('/', (req, res) => {
  const html = ReactDOMServer.renderToString(<StaticMap />);
  res.send(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>Hidratación con OpenStreetMap</title>
      </head>
      <body>
        <div id="root">${html}</div>
        <script src="https://  .github.io/react-hydration-frontend/main.js"></script>
      </body>
    </html>
  `);
});

app.listen(3000, () => {
  console.log('Servidor corriendo en http://localhost:3000');
});