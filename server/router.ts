// const KoaRouter = require('@koa/router');
import Router from '@koa/router'
const router = new Router();

// WannGo Controller Functions
import GetWannaGoController from './controllers/wannaGoControllers/getWannaGos';
import PutWannaGoController from './controllers/wannaGoControllers/putWannaGos';


import  postAwannaGo  from './controllers/wannaGoControllers/postWannaGos';
import deleteWannaGo  from './controllers/wannaGoControllers/deleteWannaGos';

// User Controller Functions
import postAuser from './controllers/users/postUser';
import getUserById from './controllers/users/getUser';

import { Context } from 'koa';
router.get('/', (ctx: Context) => {
    ctx.status=200;
});

// GETS
router.get('/wannagos', GetWannaGoController.getWannaGos);
router.get('/wannago/:id', GetWannaGoController.getWannaGoById);
router.get('/wannagos/owner/:owner', GetWannaGoController.getAllWannaGosOfUser);
router.get('/wannago/:what/:when', GetWannaGoController.getWannaGoByParams);
router.get('/user/:id', getUserById);

// POSTS
router.post('/wannago', postAwannaGo);
 router.post('/user', postAuser);

// PUT
router.put('/wannago/ppl_going', PutWannaGoController.putPplGoing);
router.put('/wannago/suggestionMsg', PutWannaGoController.putSuggestionMsg);
router.put('/wannago/owner', PutWannaGoController.putOwnerToWannaGo);
router.put('/wannago/openedTimes', PutWannaGoController.putOpenedTimes);
router.put('/wannago/rejectCounter', PutWannaGoController.putRejectCounter);
router.put('/wannago/goingCounter', PutWannaGoController.putGoingCounter);
router.put('/wannago/suggestionBoxCounter', PutWannaGoController.putSuggestionBoxCounter);
router.put('/wannago/guestLink', PutWannaGoController.putGuestLink);

// DELETE
router.delete('/wannago/delete', deleteWannaGo);

export default router;


















