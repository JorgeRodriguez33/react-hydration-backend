const express = require("express");

// Usuarios simulados
const users = [
  { username: "user", password: "pass" },
  { username: "user1", password: "pass1" },
  { username: "user2", password: "pass2" },
];

const login = async (req, response = express.response) => {
  const { username, password } = req.body;

  const user = users.find(
    (u) => u.username === username && u.password === password
  );
  if (user) {
    response.status(200).send({ message: "Login exitoso" });
  } else {
    response.status(401).send({ message: "Credenciales incorrectas" });
  }
};

module.exports = { login };
