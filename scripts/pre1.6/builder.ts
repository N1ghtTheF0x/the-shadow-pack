import PackBuilder from "../builder.js"
import { DESCRIPTION, PACK_FILENAME } from "../pack.js"
import createPre16Inventory from "./gui/inventory.js"
import { createPre16GUI } from "./gui/other.js"

class Pre16PackBuilder extends PackBuilder
{
    public constructor()
    {
        super("pre-1.6")
        this
        .addBinaryBuild(PACK_FILENAME["texture"],DESCRIPTION["texture"])
        .addBuild("gui/inventory.png",createPre16Inventory)
        .addBuild("gui/gui.png",createPre16GUI)
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