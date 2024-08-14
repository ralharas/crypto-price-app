import express from "express";
import axios from "axios";

const router = express.Router();

router.get('/', async (req, res) => {
    try{
        const response = await axios.get('https://api.binance.com/api/v3/ticker/price');
        const prices = response.data;
        res.render('index', {prices});
    }
        catch(error) {
            console.error(error);
            res.status(500).send('Something went wrong, please reach out to support for further assistance');
        }
});

export default router;
