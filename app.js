import express from "express";
import axios from "axios";
import { fileURLToPath } from 'url';
import routes from './routes';

const __filename = fileURLToPath(import.meta,url);
const __dirname = path.dirname(__filename);

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is runnig on port ${PORT}`);
})