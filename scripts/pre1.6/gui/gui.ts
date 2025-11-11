import { IVec2 } from "../../utilities/math.js"
import Textures from "../../textures.js"
import Atlas from "../../atlas.js"

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
const BUTTON_LANG_POS: [IVec2,IVec2] = [
    {x: 0,y: 106},
    {x: 0,y: 126}
]

function createPre16GUI(filepath: string): Atlas
{
    return new Atlas(filepath,256,256)
    .addImage(Textures.Gui.HOTBAR,HOTBAR_POS)
    .addImage(Textures.Gui.HOTBAR_SELECT,HOTBAR_SELECT_POS)
    .addImage(Textures.Gui.BUTTON_DISABLED,BUTTONS_POS[0])
    .addImage(Textures.Gui.BUTTON,BUTTONS_POS[1])
    .addImage(Textures.Gui.BUTTON_ACTIVE,BUTTONS_POS[2])
    .addImage(Textures.Gui.BUTTON_LANG,BUTTON_LANG_POS[0])
    .addImage(Textures.Gui.BUTTON_LANG_ACTIVE,BUTTON_LANG_POS[1])
}

export default createPre16GUI