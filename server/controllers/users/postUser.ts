// Internal dependencies
import User from '../../models/userModel';
import { Context } from 'koa';


const postAuser = async (ctx: Context)  => {
  try {
    const user = ctx.request.body;
    const storedUser = await User.create({
      name: user.name,
      email: user.email,
      _id: user._id,
    });
    // tslint:disable-next-line:no-console
    console.log(`This user was posted: ${storedUser}`);
    ctx.status = 201;
    ctx.body = storedUser;
  } catch (e) {
    ctx.status = 500;
    ctx.body = e;
    // tslint:disable-next-line:no-console
    console.log(`Error in postAuser function from controllers postUser: ${e}`);
  }
};

export default postAuser;
