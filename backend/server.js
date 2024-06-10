const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

// Use routes
const routes = require('./routes/index');
const convertRouter = require('./routes/convert'); // Add this line

app.use('/api', routes);
app.use('/api/convert', convertRouter); // Add this line to include the convert route

app.get('/', (req, res) => {
    res.send('SGML Viewer Backend');
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
