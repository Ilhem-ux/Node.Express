const express = require('express');
const app = express();
const PORT = 3000;
app.use(express.json());
app.set('view engine', 'ejs');
app.get('/', (req, res) => { res.render('index', { user: 'Student' }); });
let tasks = [
    { id: 1, title: 'Apprendre Express', done: false },
    { id: 2, title: 'Créer une application de démonstration', done: false },
 ];
 app.get('/tasks', (req, res) => { res.render('tasks', { tasks }); });
 // GET toutes les tâches
app.get('/api/tasks', (req, res) => res.json(tasks));
// Envoi d'une nouvelle tâche POST :
app.post('/api/tasks', (req, res) => { const newTask = { id: tasks.length + 1, title:
req.body.title, done: false };
tasks.push(newTask);
res.status(201).json(newTask);
});
app.listen(PORT, () => console.log(`Serveur en cours d'exécution sur http://localhost:${PORT}`));