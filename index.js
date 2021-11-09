import express from 'express';
import bodyParser from 'body-parser';
import { sequelize } from './utils/database.js';

import usersRoutes from './routes/users.js';

const app = express();
const PORT = 5000;

app.use(bodyParser.json());

app.use('/users', usersRoutes);

// testing db connection (actually working from home with mysql)
try {
    console.log('lol')
    await sequelize.authenticate()
    console.log('Connection has been established...')
} catch (error) {
    console.log(error)
}

app.get('/', (request, response) => {
    response.send('Hello from Homepage.')
});


app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`));