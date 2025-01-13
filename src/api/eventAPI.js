const express = require('express');

const app = express();

app.use(express.json())

// //app.use(express.static(path.resolve(__dirname, 'client')));

app.post('/api/messages', (req, res) => {
    const {data} = req.body;
    if (!data) {
        return res.status(400).json({ success: false, error: 'Имя и сообщение обязательны' });
      }
    
      res.status(200).json({ success: true, data: {data} });
});

// // app.get('/api/messages', (req, res) => {
// //     res.send
// // })

app.listen(3000, ()=> {
    console.log('Сервер успешно запущен');
})