import { walkingCharacterSprite, idleCharacterSprite, } from "./assets/character/index.js";
export const PLAYER_SIZE = { x: 50, y: 75 };
const GRAVITY = -50;
const ctx = window.canvas.getContext("2d");
export const Player = {
    /* Position of the player on the canvas */
    x: window.canvas.width / 2 - PLAYER_SIZE.x / 2,
    y: window.canvas.height / 2 - PLAYER_SIZE.y / 2,
    position: {
        x: 0,
        y: 0,
    },
    status: {
        facing: "right",
        walking: false,
        touching: {
            terrain: false,
        },
    },
    velocity: {
        x: 0,
        y: 0,
    },
    /* Player size */
    width: PLAYER_SIZE.x,
    height: PLAYER_SIZE.y,
    /* add +y velocity when not falling */
    jump: () => {
        if (Player.velocity.y === 0) {
            Player.velocity.y += 5;
        }
    },
    /* tells the character model how to render the sprite */
    move: (x, y) => {
        x > 0 ? (Player.status.facing = "right") : (Player.status.facing = "left");
        Player.status.walking = true;
        Player.x += x;
        Player.y += y;
    },
    /* player logic */
    render: () => {
        gravity();
        sprite();
        window.debug && displayPosition(ctx);
        window.debug &&
            ctx.strokeRect(Player.x, Player.y, Player.width, Player.height);
    },
};
function displayPosition(ctx) {
    ctx.fillStyle = "black";
    ctx.font = "24px APL385 Unicode";
    ctx.fillText(`(${Player.position.x}, ${Player.position.y})`, 25, 40);
}
function gravity() {
    if (Player.velocity.y > GRAVITY) {
        Player.velocity.y += GRAVITY / 600;
    }
    if (Player.y < window.canvas.height - Player.height) {
        Player.y -= Player.velocity.y;
    }
    else if (Player.velocity.y > 0) {
        Player.y -= Player.velocity.y;
    }
    else {
        Player.velocity.y = 0;
    }
}
function sprite() {
    if (!Player.status.walking) {
        ctx.drawImage(idleCharacterSprite(), Player.x - PLAYER_SIZE.x / 2, Player.y - PLAYER_SIZE.y / 3);
    }
    else {
        ctx.drawImage(walkingCharacterSprite(), Player.x - PLAYER_SIZE.x / 2, Player.y - PLAYER_SIZE.y / 3);
    }
}
