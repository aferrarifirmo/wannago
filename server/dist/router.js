"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// const KoaRouter = require('@koa/router');
const router_1 = __importDefault(require("@koa/router"));
const router = new router_1.default();
// WannGo Controller Functions
const getWannaGos_1 = __importDefault(require("./controllers/wannaGoControllers/getWannaGos"));
const putWannaGos_1 = __importDefault(require("./controllers/wannaGoControllers/putWannaGos"));
const postWannaGos_1 = __importDefault(require("./controllers/wannaGoControllers/postWannaGos"));
const deleteWannaGos_1 = __importDefault(require("./controllers/wannaGoControllers/deleteWannaGos"));
// User Controller Functions
const postUser_1 = __importDefault(require("./controllers/users/postUser"));
const getUser_1 = __importDefault(require("./controllers/users/getUser"));
router.get('/', (ctx) => {
    ctx.status = 200;
});
// GETS
router.get('/wannagos', getWannaGos_1.default.getWannaGos);
router.get('/wannago/:id', getWannaGos_1.default.getWannaGoById);
router.get('/wannagos/owner/:owner', getWannaGos_1.default.getAllWannaGosOfUser);
router.get('/wannago/:what/:when', getWannaGos_1.default.getWannaGoByParams);
router.get('/user/:id', getUser_1.default);
// POSTS
router.post('/wannago', postWannaGos_1.default);
router.post('/user', postUser_1.default);
// PUT
router.put('/wannago/ppl_going', putWannaGos_1.default.putPplGoing);
router.put('/wannago/suggestionMsg', putWannaGos_1.default.putSuggestionMsg);
router.put('/wannago/owner', putWannaGos_1.default.putOwnerToWannaGo);
router.put('/wannago/openedTimes', putWannaGos_1.default.putOpenedTimes);
router.put('/wannago/rejectCounter', putWannaGos_1.default.putRejectCounter);
router.put('/wannago/goingCounter', putWannaGos_1.default.putGoingCounter);
router.put('/wannago/suggestionBoxCounter', putWannaGos_1.default.putSuggestionBoxCounter);
router.put('/wannago/guestLink', putWannaGos_1.default.putGuestLink);
// DELETE
router.delete('/wannago/delete', deleteWannaGos_1.default);
exports.default = router;
//# sourceMappingURL=router.js.map