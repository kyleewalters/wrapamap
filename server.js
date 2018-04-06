import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import {json} from "body-parser";
import request from "request";
import v1 from "./routes/v1"
import v2 from "./routes/v2"

const app = express();

app.use(morgan('combined'));
app.use(json());
app.use(helmet());
app.use('/',v2);
app.use('/v1/',v1);
app.use('/v2/',v2);

app.listen(3000, () => console.log('Listening on port 3000'));