import express from 'express';
import path from 'path';


const app = express();

//app.use(express.static(path.resolve(__dirname, '')))

app.listen(3000, ()=> {
    console.log('Сервер успешно запущен');
})