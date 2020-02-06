const express = require('express');
const jsonQuery = require('json-query')
const app = express();
app.listen(3000, () => console.log('listening at 3000'));
app.use(express.static('public'));
app.use(express.json({
    limit: '1mb'
}));
