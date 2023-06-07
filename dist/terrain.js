const chunk = {
    size: 16,
    depth: 40,
};
const numberChunks = 1;
const ctx = window.canvas.getContext("2d");
const chunks = Array.from({ length: numberChunks }, () => {
    return Array.from({ length: chunk.size }, () => {
        return Array.from({ length: chunk.depth }, () => {
            return Math.random() < 0.5;
        });
    });
});
export function render() {
    const chunkMap = chunks.map((c, chunkIndex) => {
        return c.map((column) => {
            return column.map((block, blockIndex) => {
                if (block) {
                    return {
                        position: {
                            x: chunkIndex * chunk.size,
                            y: blockIndex * chunk.size,
                        },
                        width: chunk.size,
                        height: chunk.size,
                    };
                }
            });
        });
    });
    chunkMap.forEach((c) => {
        c.forEach((column) => {
            column.forEach((block) => {
                if (block) {
                    ctx.fillStyle = "#000";
                    ctx.strokeRect(block.position.x * block.width, block.position.y, block.width, block.height);
                }
            });
        });
    });
}
