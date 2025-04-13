const path = require("path");
const express = require("express");

const fs = require("fs"); // Importar el módulo fs


const cors = require('cors'); 

const app = express();

app.use(cors());



app.use(express.static(path.join(__dirname, "public"))); // Servir archivos estáticos

app.use(express.json());


/* const initialPlaces = [
  { label: "Plaza Independencia", coordinates: [-34.9055, -56.1860] },
  { label: "Teatro Solís", coordinates: [-34.9078, -56.1994] },
  { label: "Mercado del Puerto", coordinates: [-34.9076, -56.2118] },
]; */


// Ruta para servir el HTML estático
/* app.get("/", (req, res) => {

  res.sendFile(path.join(__dirname, "public", "index.html"));
}); */
// Ruta para servir el archivo `index.html` optimizado
app.get("/", (req, res) => {
  const filePath = path.join(__dirname, "public", "index.html");

  // Lee el archivo de manera síncrona o asíncrona
  fs.readFile(filePath, "utf-8", (err, data) => {
      if (err) {
          console.error("Error al leer el archivo:", err);
          return res.status(500).send("Error al cargar el archivo.");
      }

      // Minifica el contenido del archivo eliminando saltos de línea y espacios extra
      const minifiedHtml = data.replace(/\s+/g, " ").trim();

      // Envía el contenido minificado al cliente
      res.send(minifiedHtml);
  });
});

app.use("/api/auth",require("./routes/auth"));
app.use("/api/markers",require("./routes/markers"));

/* app.get("/getMarkers", (req, res) => {
  res.status(200).send(initialPlaces); // Devuelve la lista de marcadores
}); */




/* app.use("/api/events",require("./routes/events")); */

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor corriendo en http://localhost:${PORT}`));