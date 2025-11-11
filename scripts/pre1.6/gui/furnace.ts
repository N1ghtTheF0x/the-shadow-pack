import Textures from "../../textures.js"
import { IVec2 } from "../../utilities/math.js"
import Atlas from "../../atlas.js"

const BASE_POS: IVec2 = {
    x: 0,y: 0
}
const PROGRESS_POS: IVec2 = {
    x: 177,y: 14
}
const FIRE_POS: IVec2 = {
    x: 176,y: 0
}

function createPre16Furnace(filepath: string): Atlas
{
    return new Atlas(filepath,256,256)
    .addImage(Textures.Gui.Furnace.BASE,BASE_POS)
    .addImage(Textures.Gui.Furnace.PROGRESS,PROGRESS_POS)
    .addImage(Textures.Gui.Furnace.FIRE,FIRE_POS)
}

export default createPre16Furnace