import express from 'express';
import path from 'path';


const app = express();

app.use(express.static(path.resolve(__dirname, 'client')));

// app.post('/api/messages', (req, res) => {
//     res.send('Успех');
// })

// app.get('/api/messages', (req, res) => {
//     res.send
// })

app.listen(3000, ()=> {
    console.log('Сервер успешно запущен');
})