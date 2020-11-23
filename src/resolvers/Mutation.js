import { v4 as uuid } from "uuid";

export const Mutation = {
  createUser(parent, args, ctx, info) {
    const emailTaken = ctx.db.users.some((u) => u.email === args.email);
    console.log("email taken");
    if (emailTaken) {
      throw new Error("Email already exists");
    }

    const newUser = {
      id: uuid(),
      name: args.data.name,
      email: args.data.email,
      age: args.data.age || 0,
    };
    ctx.subscription.publish("user-channel", {
      user: { mutation: "CREATED", data: newUser },
    });
    ctx.db.users.push(newUser);
    return newUser;
  },
};
