import supertest from 'supertest';
import request from 'supertest';
import done from 'supertest';
const app = require('./index');

const req = supertest(app.callback());

describe('Testing routes',   () => {

    it("Testing '/wannagos' route", async () => {
        return req.get('/wannagos').expect(201);
    });
    
    it("Testing '/' route", async () => {
        return await req.get('/').expect(200);
    });

    it("Testing /wannago/:id route", async () => {
        return await req.get('/wannago/63386721bf280c2d9b89f898').expect(201);
    });

    it("Testing /wannago/:what/:when route", async () => {
        return await req.get('/wannago/dsfgfd/2022-11-01T10:51').expect(201);
    });

    it("Testing /wannagos/owner/:owner route", async () => {
        return await req.get('/wannagos/owner/hgj').expect(201);
    });

    /*
    it("Testing /user/:id route", async () => {
        return req.get('/').expect(200);
    })
    */

});




/*
MOCK SAMPLE DATA: 
---------------------





mock data:

event ID :  id=63386721bf280c2d9b89f898
event ID :  id=63394cc6f6e4e5cf082acda1



object IDs (events):
633b1fe5476221d02bc66bb1 
633b221b476221d02bc66c10



{
        _id: new ObjectId("63394fc3f6e4e5cf082acdb5"),
        what: 'dsgds',
        where: 'sdfgfds',
        when: '2022-10-25T10:45',
        ownerName: 'fgsfd',
        openedTimes: 0,
        rejectCounter: 0,
        goingCounter: 0,
        suggestionBoxCounter: 0,
        suggestion_box: [],
        __v: 0,
        guestLink: 'http://localhost:3001/wannago/guest-link/id=63394fc3f6e4e5cf082acdb5'
      },{
        _id: new ObjectId("63395057f6e4e5cf082acdba"),
        what: 'fghjgh',
        where: 'fghjfgh',
        when: '2022-11-02T10:48',
        ownerName: 'hgj',
        openedTimes: 0,
        rejectCounter: 0,
        goingCounter: 0,
        suggestionBoxCounter: 0,
        suggestion_box: [],
        __v: 0,
        guestLink: 'http://localhost:3001/wannago/guest-link/id=63395057f6e4e5cf082acdba'
      },{
        _id: new ObjectId("633950faf6e4e5cf082acdd7"),
        what: 'dsfgfd',
        where: 'sdfgfds',
        when: '2022-11-01T10:51',
        ownerName: 'gdfgs',
        openedTimes: 0,
        rejectCounter: 0,
        goingCounter: 0,
        suggestionBoxCounter: 0,
        suggestion_box: [],
        __v: 0,
        guestLink: 'http://localhost:3001/wannago/guest-link/id=633950faf6e4e5cf082acdd7'
      },












router.get('/wannagos', GetWannaGoController.getWannaGos);
router.get('/wannago/:id', GetWannaGoController.getWannaGoById);
router.get('/wannagos/owner/:owner', GetWannaGoController.getAllWannaGosOfUser);
router.get('/wannago/:what/:when', GetWannaGoController.getWannaGoByParams);
router.get('/user/:id', getUserById);



*/