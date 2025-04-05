const express = require("express");
const path = require("path");

const app = express();
app.use(express.json());
app.use(express.static(path.join(__dirname, "../public"))); // Servir archivos estáticos

// Usuarios simulados
const users = [
  { username: "user", password: "password" },
];



// Ruta para manejar login
app.post("/login", (req, res) => {
  const { username, password } = req.body;
  const user = users.find(
    (u) => u.username === username && u.password === password
  );
  if (user) {
    res.status(200).send({ message: "Login exitoso" });
  } else {
    res.status(401).send({ message: "Credenciales incorrectas" });
  }
});

// Ruta para servir el HTML estático
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../public", "index.html"));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor corriendo en http://localhost:${PORT}`));