import { loadImage } from "canvas"
import { resolve } from "node:path"
import { TEXTURES_FOLDERPATH } from "./paths.js"

//#region

const load = (...path: Array<string>) => loadImage(resolve(TEXTURES_FOLDERPATH,...path))

const pack = await load("pack.png")

const achievement = await load("gui","game","achievement","base.png")
const achievement2 = await load("gui","game","achievement","special.png")
const achievementToast = await load("gui","game","achievement","toast.png")
const achievementBorder = await load("gui","game","achievement","border.png")

const miscMapBG = await load("gui","game","mapbg.png")


const titleOldMojang = await load("gui","menu","title","mojang.png")


const guiSlot = await load("gui","stat","slot.png")
const guiSlotActive = await load("gui","stat","slot_active.png")
const guiArrowUp = await load("gui","stat","arrow_up.png")
const guiArrowDown = await load("gui","stat","arrow_down.png")

const guiStatBreak = await load("gui","stat","stat_break.png")
const guiStatCount = await load("gui","stat","stat_count.png")
const guiStatCrafted = await load("gui","stat","stat_crafted.png")
const guiStatPickaxe = await load("gui","stat","stat_pickaxe.png")

const guiInventory = await load("gui","container","inventory.png")
const guiStatusEffectBar = await load("gui","game","status_effect_bar.png")
const guiHotbar = await load("gui","game","hotbar.png")
const guiHotbarSelect = await load("gui","game","hotbar_select.png")
const guiButton = await load("gui","menu","button","base.png")
const guiButtonActive = await load("gui","menu","button","active.png")
const guiButtonDisabled = await load("gui","menu","button","disabled.png")
const guiCrosshair = await load("gui","game","crosshair.png")
const guiBackground = await load("gui","menu","background.png")
const guiButtonLang = await load("gui","menu","button","lang.png")
const guiButtonLangActive = await load("gui","menu","button","lang_active.png")

const guiDoubleChest = await load("gui","container","double_chest.png")
const guiCraftingTable = await load("gui","container","crafting_table.png")
const guiFurnaceBase = await load("gui","container","furnace","base.png")
const guiFurnaceProgress = await load("gui","container","furnace","progress.png")
const guiFurnaceFire = await load("gui","container","furnace","fire.png")
const guiTrap = await load("gui","container","trap.png")
const guiHopper = await load("gui","container","hopper.png")
const guiAlchemyBase = await load("gui","container","alchemy","base.png")
const guiAlchemyBubble = await load("gui","container","alchemy","bubble.png")
const guiAlchemyProgress = await load("gui","container","alchemy","progress.png")

const guiArmorEmpty = await load("gui","game","armor","empty.png")
const guiArmorHalf = await load("gui","game","armor","half.png")
const guiArmroFull = await load("gui","game","armor","full.png")
const guiHeartBorderEmptyHurt = await load("gui","game","heart","border","empty_hurt.png")
const guiHeartBorderEmpty = await load("gui","game","heart","border","empty.png")
const guiHeartBorderHurt = await load("gui","game","heart","border","hurt.png")
const guiHeartBorder = await load("gui","game","heart","border","base.png")
const guiHeartHalfHurt = await load("gui","game","heart","half_hurt.png")
const guiHeartHalf = await load("gui","game","heart","half.png")
const guiHeartHurt = await load("gui","game","heart","hurt.png")
const guiHeart = await load("gui","game","heart","base.png")
const guiBubble = await load("gui","game","bubble.png")
const guiBubblePop = await load("gui","game","bubble_pop.png")
const guiPing = await Promise.all([5,4,3,2,1,0].map(async v => await load("gui","network",`ping${v}.png`)))
const guiPinging = await Promise.all([1,2,3,4,5].map(async v => await load("gui","network",`pinging${v}.png`)))

//#endregion

namespace Textures
{
    export const PACK = pack
    export namespace Achievement
    {
        export const ACHIEVEMENT = achievement
        export const ACHIEVEMENT2 = achievement2
        export const TOAST = achievementToast
        export const BORDER = achievementBorder
    }
    export namespace Misc
    {
        export const MAPBG = miscMapBG
    }
    export namespace Title
    {
        export const OLD_MOJANG = titleOldMojang
    }
    export namespace Gui
    {
        export const SLOT = guiSlot
        export const SLOT_ACTIVE = guiSlotActive
        export const STAT_BREAK = guiStatBreak
        export const STAT_COUNT = guiStatCount
        export const STAT_CRAFTED = guiStatCrafted
        export const STAT_PICKAXE = guiStatPickaxe
        export const ARROW_UP = guiArrowUp
        export const ARROW_DOWN = guiArrowDown
        export const INVENTORY = guiInventory
        export const STATUS_EFFECT_BAR = guiStatusEffectBar
        export const HOTBAR = guiHotbar
        export const HOTBAR_SELECT = guiHotbarSelect
        export const BUTTON = guiButton
        export const BUTTON_ACTIVE = guiButtonActive
        export const BUTTON_DISABLED = guiButtonDisabled
        export const BUTTON_LANG = guiButtonLang
        export const BUTTON_LANG_ACTIVE = guiButtonLangActive
        export const CROSSHAIR = guiCrosshair
        export const BACKGROUND = guiBackground
        export const DOUBLE_CHEST = guiDoubleChest
        export const CRAFTING_TABLE = guiCraftingTable
        export const HOPPER = guiHopper
        export namespace Furnace
        {
            export const BASE = guiFurnaceBase
            export const PROGRESS = guiFurnaceProgress
            export const FIRE = guiFurnaceFire
        }
        export const TRAP = guiTrap
        export const DISPENSER = TRAP
        export const DROPPER = TRAP
        export namespace Alchemy
        {
            export const BASE = guiAlchemyBase
            export const BUBBLE = guiAlchemyBubble
            export const PROGRESS = guiAlchemyProgress
        }
        export namespace Armor
        {
            export const EMPTY = guiArmorEmpty
            export const HALF = guiArmorHalf
            export const FULL = guiArmroFull
        }
        export namespace Heart
        {
            export namespace Border
            {
                export const EMPTY_HURT = guiHeartBorderEmptyHurt
                export const EMPTY = guiHeartBorderEmpty
                export const HURT = guiHeartBorderHurt
                export const BASE = guiHeartBorder
            }
            export const HALF_HURT = guiHeartHalfHurt
            export const HALF = guiHeartHalf
            export const HURT = guiHeartHurt
            export const BASE = guiHeart
        }
        export const BUBBLE = guiBubble
        export const BUBBLE_POP = guiBubblePop
        export const PING = guiPing
        export const PINGING = guiPinging
    }
}

export default Textures