const express = require('express');
const app = express();
const port = 3001;

app.use(express.json());

app.get('/', (req, res) => {
    res.send('SGML Viewer Backend');
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
