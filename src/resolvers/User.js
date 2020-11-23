export const User = {
  posts(parent, args, ctx, info) {
    console.log("Getting users");
    return ctx.db.posts.filter((a) => a.author === parent.id);
  },
};
