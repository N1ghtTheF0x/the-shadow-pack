import Atlas from "../../atlas.js"
import Textures from "../../textures.js"
import { IVec2 } from "../../utilities/math.js"

const SLOT_POS: [IVec2,IVec2] = [
    {x: 0,y: 0},
    {x: 0,y: 18}
]

const ARROW_UP_POS: IVec2 = {
    x: 22,y: 6
}
const ARROW_DONW_POS: IVec2 = {
    x: 40,y: 5
}

const STAT_POS: [IVec2,IVec2,IVec2,IVec2] = [
    {x: 18,y: 18},
    {x: 36,y: 18},
    {x: 54,y: 18},
    {x: 72,y: 18}
]

function createPre16Slot(filepath: string): Atlas
{
    return new Atlas(filepath,128,128)
    .addImage(Textures.Gui.SLOT,SLOT_POS[0])
    .addImage(Textures.Gui.SLOT_ACTIVE,SLOT_POS[1])
    .addImage(Textures.Gui.ARROW_UP,ARROW_UP_POS)
    .addImage(Textures.Gui.ARROW_DOWN,ARROW_DONW_POS)
    .addImage(Textures.Gui.STAT_CRAFTED,STAT_POS[0])
    .addImage(Textures.Gui.STAT_COUNT,STAT_POS[1])
    .addImage(Textures.Gui.STAT_PICKAXE,STAT_POS[2])
    .addImage(Textures.Gui.STAT_BREAK,STAT_POS[3])
}

export default createPre16Slot