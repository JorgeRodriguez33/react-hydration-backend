const express = require('express');
const cors = require('cors');
const app = express();
let tasks = [{
  id: 1,
  name: 'Learn Express',
  completed: false
}, {
  id: 2,
  name: 'Learn React',
  completed: false
}];
app.use(cors());
app.use(express.json());

// Obtener todas las tareas
app.get('/api/tasks', (req, res) => {
  res.json(tasks);
});

// Agregar una nueva tarea
app.post('/api/tasks', (req, res) => {
  const newTask = {
    id: tasks.length + 1,
    name: req.body.name,
    completed: false
  };
  tasks.push(newTask);
  res.json(newTask);
});

// Servir el archivo HTML estático inicial
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/../views/layout.html');
});

// Iniciar el servidor en el puerto 3000
app.listen(3000, () => {
  console.log('Backend corriendo en http://localhost:3000');
});