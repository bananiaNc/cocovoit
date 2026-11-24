import dotenv from 'dotenv';
dotenv.config();

import EXPRESS from 'express';
const APP = EXPRESS();
const PORT = process.env.PORT;

APP.get('/api/trajets', (req, res) => {
    res.send()
})

APP.listen(PORT, () => {
    console.log(`Serveur disponible : http://localhost:${PORT}`);
})
