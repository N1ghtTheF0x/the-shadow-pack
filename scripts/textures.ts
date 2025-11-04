import { loadImage } from "canvas"
import { resolve } from "node:path"

const TEXTURES_FOLDERPATH = resolve(process.cwd(),"textures")
const TEXTURES_GUI_FOLDERPATH = resolve(TEXTURES_FOLDERPATH,"gui")

//#region

const pack = await loadImage(resolve(TEXTURES_FOLDERPATH,"pack.png"))

const guiInventory = await loadImage(resolve(TEXTURES_GUI_FOLDERPATH,"inventory.png"))
const guiStatusEffectBar = await loadImage(resolve(TEXTURES_GUI_FOLDERPATH,"status_effect_bar.png"))
const guiHotbar = await loadImage(resolve(TEXTURES_GUI_FOLDERPATH,"hotbar.png"))
const guiHotbarSelect = await loadImage(resolve(TEXTURES_GUI_FOLDERPATH,"hotbar_select.png"))
const guiButton = await loadImage(resolve(TEXTURES_GUI_FOLDERPATH,"button.png"))
const guiButtonActive = await loadImage(resolve(TEXTURES_GUI_FOLDERPATH,"button_active.png"))
const guiButtonDisabled = await loadImage(resolve(TEXTURES_GUI_FOLDERPATH,"button_disabled.png"))
const guiCrosshair = await loadImage(resolve(TEXTURES_GUI_FOLDERPATH,"crosshair.png"))

//#endregion

namespace Textures
{
    export const PACK = pack
    export namespace Gui
    {
        export const INVENTORY = guiInventory
        export const STATUS_EFFECT_BAR = guiStatusEffectBar
        export const HOTBAR = guiHotbar
        export const HOTBAR_SELECT = guiHotbarSelect
        export const BUTTON = guiButton
        export const BUTTON_ACTIVE = guiButtonActive
        export const BUTTON_DISABLED = guiButtonDisabled
        export const CROSSHAIR = guiCrosshair
    }
}

export default Textures