'use strict';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const koa_1 = __importDefault(require("koa"));
const koa_bodyparser_1 = __importDefault(require("koa-bodyparser"));
const koa_morgan_1 = __importDefault(require("koa-morgan"));
const cors_1 = __importDefault(require("@koa/cors"));
const router_1 = __importDefault(require("./router"));
const config_1 = __importDefault(require("./config"));
// import { isModuleNamespaceObject } from "util/types";
const app = new koa_1.default();
app.use((0, cors_1.default)());
app.use((0, koa_bodyparser_1.default)());
app.use((0, koa_morgan_1.default)('dev'));
app.use(router_1.default.routes());
app.listen(config_1.default.PORT, () => 
// tslint:disable-next-line:no-console
console.log(`Server running on ${config_1.default.URL}${config_1.default.PORT}`));
// module.exports = app.listen(3000);
module.exports = app;
//# sourceMappingURL=index.js.map