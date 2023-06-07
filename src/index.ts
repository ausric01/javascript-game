import { initialize } from "./game.js";

import "./events.js";
import "./player.js";

declare global {
  interface Window {
    debug: boolean;
    canvas: HTMLCanvasElement;
  }
}

window.canvas = document.getElementById("canvas") as HTMLCanvasElement;
window.debug = true;

initialize();
