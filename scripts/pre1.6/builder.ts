import PackBuilder from "../builder.js"
import { DESCRIPTION, PACK_FILENAME } from "../minecraft/pack.js"
import Textures from "../textures.js"
import createPre16Furnace from "./gui/furnace.js"
import createPre16Inventory from "./gui/inventory.js"
import createPre16GUI from "./gui/gui.js"
import createPre16Icons from "./gui/icons.js"
import createPre16Achievement from "./achievement/gui.js"
import createPre16Slot from "./gui/slot.js"

class Pre16PackBuilder extends PackBuilder
{
    public constructor()
    {
        super("pre-1.6",["b1.7.3","1.5.2"])
        this
        .addBinaryBuild(PACK_FILENAME["texture"],DESCRIPTION["texture"])
        .addImageBuild("misc/mapbg.png",Textures.Misc.MAPBG)
        .addImageBuild("title/mojang.png",Textures.Title.OLD_MOJANG)
        .addAtlas("gui/inventory.png",createPre16Inventory)
        .addAtlas("gui/gui.png",createPre16GUI)
        .addAtlas("gui/furnace.png",createPre16Furnace)
        .addAtlas("gui/icons.png",createPre16Icons)
        .addAtlas("achievement/bg.png",createPre16Achievement)
        .addAtlas("gui/slot.png",createPre16Slot)
        .addImageBuild("gui/background.png",Textures.Gui.BACKGROUND)
        .addSourceImageBuild("gui/container.png",Textures.Gui.DOUBLE_CHEST,256,256)
        .addSourceImageBuild("gui/crafting.png",Textures.Gui.CRAFTING_TABLE,256,256)
        .addSourceImageBuild("gui/trap.png",Textures.Gui.TRAP,256,256)
        .addSourceImageBuild("gui/hopper.png",Textures.Gui.HOPPER,256,256)
    }
}

namespace Pre16PackBuilder
{
    export const GUI_FOLDERNAME = "gui"
    export const MISC_FOLDERNAME = "misc"
    export const TITLE_FOLDERNAME = "title"
    export const ACHIEVEMENT_FOLDERNAME = "achievement"
}

export default Pre16PackBuilder