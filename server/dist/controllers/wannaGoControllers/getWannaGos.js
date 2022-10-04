"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Internal dependencies
const wannaGoModel_1 = __importDefault(require("../../models/wannaGoModel"));
const getWannaGos = (ctx) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const wannaGos = yield wannaGoModel_1.default.find({});
        ctx.status = 201;
        ctx.body = wannaGos;
        // tslint:disable-next-line:no-console
        // console.log(`These wannaGos were retrieved: ${wannaGos}`);
    }
    catch (e) {
        ctx.status = 500;
        // tslint:disable-next-line:no-console
        // console.log(`Error in getWannaGos function from controllers: ${e}`);
    }
});
const getAllWannaGosOfUser = (ctx) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // tslint:disable-next-line:no-console
        const wannaGos = yield wannaGoModel_1.default.find({ owner: ctx.params.owner });
        ctx.status = 201;
        ctx.body = wannaGos;
        // tslint:disable-next-line:no-console
        // console.log(`The owner: ${ctx.params.owner} owns these wannaGos: ${wannaGos}`);
    }
    catch (e) {
        ctx.status = 500;
        // tslint:disable-next-line:no-console
        // console.log(`Error in getWannaGos function from controllers: ${e}`);
    }
});
const getWannaGoByParams = (ctx) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        ctx.status = 201;
        const wannaGo = yield wannaGoModel_1.default.findOne({
            what: `${ctx.params.what}`,
            when: `${ctx.params.when}`,
        });
        // tslint:disable-next-line:no-console
        // console.log(`This wannaGo was retrieved ${wannaGo}`);
        ctx.body = wannaGo;
    }
    catch (e) {
        ctx.status = 500;
        // tslint:disable-next-line:no-console
        // console.log(`Error in getawannaGo function from controllers: ${e}`);
    }
});
const getWannaGoById = (ctx) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        ctx.status = 201;
        // tslint:disable-next-line:no-console
        // console.log(ctx.params.id);
        const wannaGo = yield wannaGoModel_1.default.findById(ctx.params.id);
        // tslint:disable-next-line:no-console
        // console.log(`This wannaGo was retrieved ${wannaGo}`);
        ctx.body = wannaGo;
    }
    catch (e) {
        ctx.status = 500;
        // tslint:disable-next-line:no-console
        // console.log(`Error in getawannaGo function from controllers: ${e}`);
    }
});
exports.default = {
    getWannaGos,
    getWannaGoByParams,
    getWannaGoById,
    getAllWannaGosOfUser,
};
//# sourceMappingURL=getWannaGos.js.map