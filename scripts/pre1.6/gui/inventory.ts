import { writeFileSync } from "node:fs"
import { createCanvas } from "../../utilities/canvas.js"
import { IVec2 } from "../../utilities/math.js"
import Textures from "../../textures.js"

const WIDTH = 256, HEIGHT = 256

const BASE_POS: IVec2 = {
    x: 0,
    y: 0
}
const STATUS_EFFECT_BAR_POS: IVec2 = {
    x: 0,
    y: 166
}

function createPre16Inventory(filepath: string): void
{
    const ctx = createCanvas(WIDTH,HEIGHT)

    ctx.drawImage(Textures.Gui.INVENTORY,BASE_POS.x,BASE_POS.y)
    ctx.drawImage(Textures.Gui.STATUS_EFFECT_BAR,STATUS_EFFECT_BAR_POS.x,STATUS_EFFECT_BAR_POS.y)

    writeFileSync(filepath,ctx.canvas.toBuffer())
}

export default createPre16Inventory