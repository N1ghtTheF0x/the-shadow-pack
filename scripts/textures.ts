import { loadImage } from "canvas"
import { resolve } from "node:path"

const TEXTURES_FOLDERPATH = resolve(process.cwd(),"textures")
const TEXTURES_GUI_FOLDERPATH = resolve(TEXTURES_FOLDERPATH,"gui")

//#region

const pack = await loadImage(resolve(TEXTURES_FOLDERPATH,"pack.png"))

const guiInventory = await loadImage(resolve(TEXTURES_GUI_FOLDERPATH,"inventory.png"))
const guiStatusEffectBar = await loadImage(resolve(TEXTURES_GUI_FOLDERPATH,"status_effect_bar.png"))

//#endregion

namespace Textures
{
    export const PACK = pack
    export namespace Gui
    {
        export const INVENTORY = guiInventory
        export const STATUS_EFFECT_BAR = guiStatusEffectBar
    }
}

export default Textures