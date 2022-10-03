// Internal dependencies
import WannaGo from '../../models/wannaGoModel';
import { Context } from 'koa';

const getWannaGos = async (ctx: Context) => {
  try {
    const wannaGos = await WannaGo.find({});
    ctx.status = 201;
    ctx.body = wannaGos;
    // tslint:disable-next-line:no-console
    // console.log(`These wannaGos were retrieved: ${wannaGos}`);
  } catch (e) {
    ctx.status = 500;
    // tslint:disable-next-line:no-console
    // console.log(`Error in getWannaGos function from controllers: ${e}`);
  }
};

const getAllWannaGosOfUser = async (ctx: Context) => {
  try {
    // tslint:disable-next-line:no-console
    const wannaGos = await WannaGo.find({ owner: ctx.params.owner});
    ctx.status = 201;
    ctx.body = wannaGos;
    // tslint:disable-next-line:no-console
    // console.log(`The owner: ${ctx.params.owner} owns these wannaGos: ${wannaGos}`);
  } catch (e) {
    ctx.status = 500;
    // tslint:disable-next-line:no-console
    // console.log(`Error in getWannaGos function from controllers: ${e}`);
  }
};

const getWannaGoByParams = async (ctx: Context) => {
  try {
    ctx.status = 201;
    const wannaGo = await WannaGo.findOne({
      what: `${ctx.params.what}`,
      when: `${ctx.params.when}`,
    });
    // tslint:disable-next-line:no-console
    // console.log(`This wannaGo was retrieved ${wannaGo}`);
    ctx.body = wannaGo;
  } catch (e) {
    ctx.status = 500;
    // tslint:disable-next-line:no-console
    // console.log(`Error in getawannaGo function from controllers: ${e}`);
  }
};

const getWannaGoById = async (ctx: Context) => {
  try {
    ctx.status = 201;
    // tslint:disable-next-line:no-console
    // console.log(ctx.params.id);
    const wannaGo = await WannaGo.findById(ctx.params.id);
    // tslint:disable-next-line:no-console
    // console.log(`This wannaGo was retrieved ${wannaGo}`);
    ctx.body = wannaGo;
  } catch (e) {
    ctx.status = 500;
    // tslint:disable-next-line:no-console
    // console.log(`Error in getawannaGo function from controllers: ${e}`);
  }
};

export default {
  getWannaGos,
  getWannaGoByParams,
  getWannaGoById,
  getAllWannaGosOfUser,
};




