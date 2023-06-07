import "./events.js";

import { Player } from "./player.js";
import { jumpScript, movementScript } from "./events.js";

import backdrop from "./assets/backdrop/index.js";

const ctx = window.canvas.getContext("2d") as CanvasRenderingContext2D;

function background() {
  ctx.clearRect(0, 0, window.canvas.width, window.canvas.height);
  ctx.drawImage(backdrop, 0, 0, window.canvas.width, window.canvas.height);
}

const Game = {
  render: () => {
    background();
    Player.render();
    requestAnimationFrame(() => Game.render());
  },
};

export function initialize() {
  movementScript();
  jumpScript();

  Game.render();
}
