const express = require("express");
const path = require("path");


const cors = require('cors'); 

const app = express();
app.use(express.json());
app.use(express.static(path.join(__dirname, "public"))); // Servir archivos estáticos

app.use(cors());

const initialPlaces = [
  { label: "Plaza Independencia", coordinates: [-34.9055, -56.1860] },
  { label: "Teatro Solís", coordinates: [-34.9078, -56.1994] },
  { label: "Mercado del Puerto", coordinates: [-34.9076, -56.2118] },
];

app.use("/api/auth",require("./routes/auth"));


// Ruta para manejar login
/* app.post("/login", (req, res) => {
  const { username, password } = req.body;S
  const user = users.find(
    (u) => u.username === username && u.password === password
  );
  if (user) {
    res.status(200).send({ message: "Login exitoso" });
  } else {
    res.status(401).send({ message: "Credenciales incorrectas" });
  }
}); */

// Ruta para servir el HTML estático
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.get("/getMarkers", (req, res) => {
  res.status(200).send(initialPlaces); // Devuelve la lista de marcadores
});




/* app.use("/api/events",require("./routes/events")); */

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor corriendo en http://localhost:${PORT}`));