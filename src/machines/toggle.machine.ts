import { createMachine } from "xstate";
import { incrementCount } from "./actions";

interface ToggleContext {
  count: number;
}

type ToggleEvent = { type: "TOGGLE" } | { type: "RESET" };

export const toggleMachine = createMachine(
  {
    id: "toggle",
    preserveActionOrder: true,
    initial: "off",

    schema: {
      context: {} as ToggleContext,
      events: {} as ToggleEvent,
    },
    tsTypes: {} as import("./toggle.machine.typegen").Typegen0,

    context: {
      count: 0,
    },

    states: {
      off: {
        on: {
          TOGGLE: {
            actions: ["incrementCount"],
            target: "on",
          },
        },
      },
      on: {
        on: {
          TOGGLE: "off",
        },
      },
    },
  },
  {
    actions: {
      // @ts-expect-error XState Typegen
      incrementCount,
    },
  }
);
