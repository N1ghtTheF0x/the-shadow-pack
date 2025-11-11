import { IVec2 } from "../../utilities/math.js"
import Textures from "../../textures.js"
import Atlas from "../../atlas.js"

const BASE_POS: IVec2 = {
    x: 0,
    y: 0
}
const STATUS_EFFECT_BAR_POS: IVec2 = {
    x: 0,
    y: 166
}

function createPre16Inventory(filepath: string): Atlas
{
    return new Atlas(filepath,256,256)
    .addImage(Textures.Gui.INVENTORY,BASE_POS)
    .addImage(Textures.Gui.STATUS_EFFECT_BAR,STATUS_EFFECT_BAR_POS)
}

export default createPre16Inventory