export const Post = {
  author(parent, args, ctx, info) {
    return ctx.db.users.find((a) => (a.id = parent.author));
  },
};
