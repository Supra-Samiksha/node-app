const express = require('express');

const app = express();

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('<h1>GitOps CI/CD Pipeline Fully Functional 🚀</h1>');
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});