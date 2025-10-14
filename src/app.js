import express from 'express';
import { fileURLToPath } from 'url';
import path from 'path';
import cors from 'cors';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();
app.use(cors());
const PORT = 3000;

// Ruta para servir el index.html que está fuera de /src
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'index.html'));
});

app.get('/favicon.ico', (req, res) => {
    res.type('image/x-icon');
    res.status(200).end();
});

// Ruta de ejemplo de API
app.get('/api/saludo', (req, res) => {
    res.json({ mensaje: 'Hola desde la API!' });
});

// Variable para almacenar el contador
let clickCount = 0;

// Endpoint para obtener el contador
app.get('/api/clicks', (req, res) => {
    res.json({ count: clickCount });
});

// Endpoint para actualizar el contador
app.post('/api/clicks', (req, res) => {
    clickCount++;
    res.json({ success: true, count: clickCount });
});

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
export default app;