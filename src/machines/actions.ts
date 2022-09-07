import { assign } from "xstate";

export const incrementCount = assign((ctx) => ({
  // Object is of type 'unknown'.
  // @ts-expect-error XState Typegen
  count: ctx.count + 1,
}));
