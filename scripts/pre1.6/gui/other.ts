import { writeFileSync } from "node:fs"
import { createCanvas } from "../../utilities/canvas.js"
import { IVec2 } from "../../utilities/math.js"
import Textures from "../../textures.js"

export function createPre16GUI(filepath: string): void
{
    const WIDTH = 256, HEIGHT = 256
    const HOTBAR_POS: IVec2 = {
        x: 0,
        y: 0
    }
    const HOTBAR_SELECT_POS: IVec2 = {
        x: 0,
        y: 22,
    }
    const BUTTONS_POS: [IVec2,IVec2,IVec2] = [
        {
            x: 0,
            y: 46
        },
        {
            x: 0,
            y: 66
        },
        {
            x: 0,
            y: 86
        }
    ]
    const CROSSHAIR_POS: IVec2 = {
        x: 243,
        y: 3
    }

    const ctx = createCanvas(WIDTH,HEIGHT)

    ctx.drawImage(Textures.Gui.HOTBAR,HOTBAR_POS.x,HOTBAR_POS.y)
    ctx.drawImage(Textures.Gui.HOTBAR_SELECT,HOTBAR_SELECT_POS.x,HOTBAR_SELECT_POS.y)

    ctx.drawImage(Textures.Gui.BUTTON_DISABLED,BUTTONS_POS[0].x,BUTTONS_POS[0].y)
    ctx.drawImage(Textures.Gui.BUTTON,BUTTONS_POS[1].x,BUTTONS_POS[1].y)
    ctx.drawImage(Textures.Gui.BUTTON_ACTIVE,BUTTONS_POS[2].x,BUTTONS_POS[2].y)

    ctx.drawImage(Textures.Gui.CROSSHAIR,CROSSHAIR_POS.x,CROSSHAIR_POS.y)

    writeFileSync(filepath,ctx.canvas.toBuffer())
}