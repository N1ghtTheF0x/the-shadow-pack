import Atlas from "../../atlas.js"
import Textures from "../../textures.js"
import { IVec2 } from "../../utilities/math.js"

const BORDER_POS: IVec2 = {
    x: 0,y: 0
}
const A_POS: IVec2 = {
    x: 0,y: 202
}
const A2_POS: IVec2 = {
    x: 26,y: 202
}
const TOAST_POS: IVec2 = {
    x: 96,y: 202
}

function createPre16Achievement(filepath: string): Atlas
{
    return new Atlas(filepath,256,256)
    .addImage(Textures.Achievement.BORDER,BORDER_POS)
    .addImage(Textures.Achievement.ACHIEVEMENT,A_POS)
    .addImage(Textures.Achievement.ACHIEVEMENT2,A2_POS)
    .addImage(Textures.Achievement.TOAST,TOAST_POS)
}

export default createPre16Achievement