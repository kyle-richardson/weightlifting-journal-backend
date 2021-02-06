require('dotenv').config();

import { listen } from './server';

const PORT = process.env.PORT || 5000;

listen(PORT, () => {
    console.log(`=== Server Listening on port ${PORT} ===`);
});