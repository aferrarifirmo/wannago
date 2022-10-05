'use strict';

import Koa, { Context } from "koa";
import bodyParser from 'koa-bodyparser';
import morgan from 'koa-morgan';
import cors from '@koa/cors';
import router from './router';
import configs from './config';
// import { isModuleNamespaceObject } from "util/types";

const app = new Koa();

app.use(cors());
app.use(bodyParser());
app.use(morgan('dev'));
app.use(router.routes());

app.listen(configs.PORT, () =>
// tslint:disable-next-line:no-console
console.log(`Server running on ${configs.URL}${configs.PORT}`));

// module.exports = app.listen(3000);

module.exports = app;