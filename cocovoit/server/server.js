import dotenv from 'dotenv';
dotenv.config();

import EXPRESS from 'express';
const APP = EXPRESS();
const PORT = process.env.PORT;

APP.listen(PORT, () => {
    console.log(`Serveur disponible : http://localhost:${PORT}`);
})
