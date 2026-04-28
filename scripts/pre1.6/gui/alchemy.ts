import Atlas from "../../atlas.js";
import Textures from "../../textures.js";
import { IVec2 } from "../../utilities/math.js";

const BASE_POS: IVec2 = {
    x: 0,y: 0
}
const PROGRESS_POS: IVec2 = {
    x: 176,y: 0
}
const BUBBLE_POS: IVec2 = {
    x: 185,y: 0
}

function createPre16Alchemy(filepath: string): Atlas
{
    return new Atlas(filepath,256,256)
        .addImage(Textures.Gui.Alchemy.BASE,BASE_POS)
        .addImage(Textures.Gui.Alchemy.PROGRESS,PROGRESS_POS)
        .addImage(Textures.Gui.Alchemy.BUBBLE,BUBBLE_POS)
}

export default createPre16Alchemy