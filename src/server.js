import "dotenv/config"; //SERVE PARA IMPORTAR TUDO DO .env, (README.MD)
import express from 'express'; //esse import serve para calcular o quanto a apli custa em kbts
import UserController from './app/controllers/UserController';

const app = express();

app.use(express.json()); //para entender que a requisição está sendo enviada em formato json.

app.post ('/users', UserController.store);

app.listen(3333, () => {
    console.log('Server Running on localhost:3333');
});