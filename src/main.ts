import "./style.css";
import { interpret } from "xstate";
import { toggleMachine } from "./machines/toggle.machine";

const buttonEl = document.querySelector<HTMLButtonElement>("#toggle-button")!;
const countEl = document.querySelector<HTMLSpanElement>("#toggle-count")!;

document.addEventListener("DOMContentLoaded", function () {
  const toggleService = interpret(toggleMachine);
  toggleService.start();

  buttonEl.addEventListener("click", () => {
    toggleService.send("TOGGLE");

    buttonEl.innerText = toggleService.state.matches("off") ? "Off" : "On";
    countEl.innerText = toggleService.getSnapshot().context.count.toString();
  });
});
