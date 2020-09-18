import express      from "express";
import cors         from "cors";
import authenticate from './src/authenticate.js';
import translate    from "./src/translate.js";


const app = express();

app.use(cors());
app.use(express.json());
app.use(authenticate);

app.get("/", (req, res, next) => {
    res.status(200).send("Hello!").end();
});

app.post("/translate", async (req, res, next) => {

    let q = req.body;

    if (!(q && q.text && q.target)) {
        res
        .status(401)
        .send("Missing parameters: " + JSON.stringify(q));
    } 

    res.status(200).json(await translate(q));
});

/* Error Handler */
app.use((err, req, res, next) => {
    res.status(500);
    res.json({ message: err.message });
});

// Start the server
const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
});
