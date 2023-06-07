import { Player } from "./player.js";

export function movementScript(keys: { [key: string]: boolean } = {}) {
  document.addEventListener("keydown", (event) => (keys[event.key] = true));
  document.addEventListener("keyup", (event) => {
    keys[event.key] = false;
    if (Object.keys(keys).every((key) => !keys[key]) && Player.status.walking) {
      Player.status.walking = false;
    }
  });

  if (keys["a"] || keys["ArrowLeft"]) {
    Player.move(-1, 0);
  }
  if (keys["d"] || keys["ArrowRight"]) {
    Player.move(1, 0);
  }

  requestAnimationFrame(() => movementScript(keys));
}

export function jumpScript() {
  window.addEventListener("keydown", (event) => {
    if (event.key === " ") {
      Player.jump();
    }
  });
}
