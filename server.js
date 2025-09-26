const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.json({
        status: 200,
        message: 'API is working'
    })
})

app.listen(3001, () => {
    console.log('Server is running on port 3001');
})