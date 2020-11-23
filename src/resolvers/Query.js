export const Query = {
  users(parent, args, ctx, info) {
    return ctx.db.users;
  },
  posts(parent, args, ctx, info) {
    return ctx.db.posts;
  },
};
