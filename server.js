import express from "express";
import {json} from "body-parser";
import request from "request";
import v1 from "./routes/v1"
import v2 from "./routes/v2"

const app = express();

app.use(json());
app.use('/',v2);
app.use('/v1/',v1);
app.use('/v2/',v2);

app.listen(3000, () => console.log('Listening on port 3000'));