import { IVec2 } from "../../utilities/math.js"
import Textures from "../../textures.js"
import Atlas from "../../atlas.js"

const CROSSHAIR_POS: IVec2 = {
    x: 3,y: 3
}

const ARMOR_EMPTY_POS: IVec2 = {
    x: 16,y: 9
}
const ARMOR_HALF_POS: IVec2 = {
    x: 25,y: 9
}
const ARMOR_FULL_POS: IVec2 = {
    x: 34,y: 9
}
const ARMOR_FULL2_POS: IVec2 = {
    x: 43,y: 9
}

const BUBBLE_POS: IVec2 = {
    x: 16,y: 18
}
const BUBBLE_POP_POS: IVec2 = {
    x: 25,y: 18
}

const HEART_BORDER_EMPTY_POS: [IVec2,IVec2] = [
    {x: 16,y: 0},
    {x: 25,y: 0}
]
const HEART_BORDER_POS: [IVec2,IVec2] = [
    {x: 34,y: 0},
    {x: 43,y: 0}
]

const HEART_POS: [IVec2,IVec2] = [
    {x: 52,y: 0},
    {x: 61,y: 0}
]

const HEART_HURT_POS: [IVec2,IVec2] = [
    {x: 70,y: 0},
    {x: 79,y: 0}
]

const PING_OFFSET_Y = 177
const PING_OFFSET2_Y = 16
const PINGING_OFFSET: IVec2 = {
    x: 10,y: PING_OFFSET_Y
}

const PING_POS: Array<IVec2> = Textures.Gui.PING.map((_,i) => {return {x: 0,y: PING_OFFSET_Y + (i * Textures.Gui.PING[0].naturalHeight)}})
const PING_POS2: Array<IVec2> = Textures.Gui.PING.map((_,i) => {return {x: 0,y: PING_OFFSET2_Y + (i * Textures.Gui.PING[0].naturalHeight)}})
const PINGING_POS: Array<IVec2> = Textures.Gui.PINGING.map((_,i) => {return {x: PINGING_OFFSET.x,y: PINGING_OFFSET.y + (i * Textures.Gui.PINGING[0].naturalHeight)}})


function createPre16Icons(filepath: string): Atlas
{
    return new Atlas(filepath,256,256)
    .addImage(Textures.Gui.CROSSHAIR,CROSSHAIR_POS)

    .addImage(Textures.Gui.Armor.EMPTY,ARMOR_EMPTY_POS)
    .addImage(Textures.Gui.Armor.HALF,ARMOR_HALF_POS)
    .addImage(Textures.Gui.Armor.FULL,ARMOR_FULL_POS)
    .addImage(Textures.Gui.Armor.FULL,ARMOR_FULL2_POS)

    .addImage(Textures.Gui.BUBBLE,BUBBLE_POS)
    .addImage(Textures.Gui.BUBBLE_POP,BUBBLE_POP_POS)

    .addImage(Textures.Gui.Heart.Border.EMPTY,HEART_BORDER_EMPTY_POS[0])
    .addImage(Textures.Gui.Heart.Border.EMPTY_HURT,HEART_BORDER_EMPTY_POS[1])
    .addImage(Textures.Gui.Heart.Border.BASE,HEART_BORDER_POS[0])
    .addImage(Textures.Gui.Heart.Border.HURT,HEART_BORDER_POS[1])

    .addImage(Textures.Gui.Heart.BASE,HEART_POS[0])
    .addImage(Textures.Gui.Heart.HALF,HEART_POS[1])
    .addImage(Textures.Gui.Heart.HURT,HEART_HURT_POS[0])
    .addImage(Textures.Gui.Heart.HALF_HURT,HEART_HURT_POS[1])

    .addImages(Textures.Gui.PING,PING_POS)
    .addImages(Textures.Gui.PING,PING_POS2)
    .addImages(Textures.Gui.PINGING,PINGING_POS)
}

export default createPre16Icons