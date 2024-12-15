import express from 'express';
import router from './router/router.js';
import chalk from 'chalk';
import { morganLogger } from './middlewares/morganLogger.js';
import { badPathHandler } from './middlewares/badPathHandler.js';
import { ErrorHandler } from './middlewares/errorHandler.js';
import { conn } from './services/db.services.js';



const app = express();
const PORT = 8080;

app.use(express.json({ limit: '5mb' }));


app.use(morganLogger);

app.use(router);


app.use(badPathHandler);


app.use(ErrorHandler);

// Start the server
app.listen(PORT, async () => {
    console.log(chalk.blue(`Server is running on port ${PORT}`));
    await conn();
});

