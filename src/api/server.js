import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import Database from 'better-sqlite3';

const db = new Database('event.db');

const query = `
    CREATE TABLE feedback (
        message_id INTEGER PRIMARY KEY AUTOINCREMENT,
        name STRING,
        email STRING,
        phone STRING,
        letter STRING
    )
`

db.exec(query);

const port = 3000;
const app = express();

app.use(cors())
app.use(bodyParser.json());

app.post('/api/messages', (req, res) => {
    const data = req.body;
    if (!data) {
        return res.status(400).json({ success: false, error: 'Ошибка в процессе отправки запроса' });
      }
    
      res.status(200).json({ success: true, message: 'Запрос успешно обработан', data: {data} });
});

app.get('/', (_, res) => {
    res.send('Сервер успешно работает')
})

app.listen(port, ()=> {
    console.log(`Сервер успешно запущен, порт: ${port}`);
})