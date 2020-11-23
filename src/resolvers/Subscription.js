export const Subscription = {
  user: {
    subscribe(parent, args, ctx, info) {
      return ctx.subscription.asyncIterator("user-channel");
    },
  },
};
