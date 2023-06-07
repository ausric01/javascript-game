import { Player } from "../../player.js";

/* WALKING ANIMATION */
const walkingSpriteSheet = new Image();
walkingSpriteSheet.src = "./src/assets/character/walk.png";

const walkingSpriteSheetDimensions = {
  width: 672,
  height: 96,
};
const walkingSprites = 7;

/* IDLE ANIMATION */
const idleSpriteSheet = new Image();
idleSpriteSheet.src = "./src/assets/character/idle.png";

const idleSpriteSheetDimensions = {
  width: 480,
  height: 96,
};
const idleSprites = 5;

let animationTick = 1;
function getAnimationFrame() {
  animationTick++;
  if (animationTick > 5000) animationTick = 1;

  return (Math.floor(animationTick / 20) % 5) + 1;
}

/* Clip the sprite from the stylesheet */
export function walkingCharacterSprite() {
  /* Create a canvas element with the image as full width */
  const canvas = document.createElement("canvas");
  canvas.width = walkingSpriteSheetDimensions.width / walkingSprites;
  canvas.height = walkingSpriteSheetDimensions.height;
  const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;

  if (Player.status.facing === "left") {
    ctx.scale(-1, 1);
    ctx.translate(-walkingSpriteSheetDimensions.width / walkingSprites, 0);
  }

  /* Draw the image on the new canvas */
  ctx.drawImage(
    walkingSpriteSheet,
    ((getAnimationFrame() - 1) * walkingSpriteSheetDimensions.width) /
      walkingSprites,
    0,
    walkingSpriteSheetDimensions.width / walkingSprites,
    walkingSpriteSheetDimensions.height,
    0,
    0,
    walkingSpriteSheetDimensions.width / walkingSprites,
    walkingSpriteSheetDimensions.height
  );

  return canvas;
}

export function idleCharacterSprite() {
  /* Create a canvas element with the image as full width */
  const canvas = document.createElement("canvas");
  canvas.width = idleSpriteSheetDimensions.width / idleSprites;
  canvas.height = idleSpriteSheetDimensions.height;
  const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;

  if (Player.status.facing === "left") {
    ctx.scale(-1, 1);
    ctx.translate(-idleSpriteSheetDimensions.width / idleSprites, 0);
  }

  /* Draw the image on the new canvas */
  ctx.drawImage(
    idleSpriteSheet,
    ((getAnimationFrame() - 1) * idleSpriteSheetDimensions.width) / idleSprites,
    0,
    idleSpriteSheetDimensions.width / idleSprites,
    idleSpriteSheetDimensions.height,
    0,
    0,
    idleSpriteSheetDimensions.width / idleSprites,
    idleSpriteSheetDimensions.height
  );

  return canvas;
}
