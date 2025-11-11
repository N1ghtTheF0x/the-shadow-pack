import { loadImage } from "canvas"
import { resolve } from "node:path"
import { TEXTURES_FOLDERPATH } from "./paths.js"

const TEXTURES_GUI_FOLDERPATH = resolve(TEXTURES_FOLDERPATH,"gui")
const TEXTURES_TITLE_FOLDERPATH = resolve(TEXTURES_FOLDERPATH,"title")
const TEXTURES_MISC_FOLDERPATH = resolve(TEXTURES_FOLDERPATH,"misc")
const TEXTURES_ACHIEVEMENT_FOLDERPATH = resolve(TEXTURES_FOLDERPATH,"achievement")

//#region

const pack = await loadImage(resolve(TEXTURES_FOLDERPATH,"pack.png"))

const loadAchievementImage = (...path: Array<string>) => loadImage(resolve(TEXTURES_ACHIEVEMENT_FOLDERPATH,...path))

const achievement = await loadAchievementImage("achievement.png")
const achievement2 = await loadAchievementImage("achievement2.png")
const achievementToast = await loadAchievementImage("toast.png")
const achievementBorder = await loadAchievementImage("border.png")

const loadMiscImage = (...path: Array<string>) => loadImage(resolve(TEXTURES_MISC_FOLDERPATH,...path))

const miscMapBG = await loadMiscImage("mapbg.png")

const loadTitleImage = (...path: Array<string>) => loadImage(resolve(TEXTURES_TITLE_FOLDERPATH,...path))

const titleOldMojang = await loadTitleImage("mojang.png")

const loadGuiImage = (...path: Array<string>) => loadImage(resolve(TEXTURES_GUI_FOLDERPATH,...path))

const guiSlot = await loadGuiImage("slot.png")
const guiSlotActive = await loadGuiImage("slot_active.png")
const guiArrowUp = await loadGuiImage("arrow_up.png")
const guiArrowDown = await loadGuiImage("arrow_down.png")

const guiStatBreak = await loadGuiImage("stat_break.png")
const guiStatCount = await loadGuiImage("stat_count.png")
const guiStatCrafted = await loadGuiImage("stat_crafted.png")
const guiStatPickaxe = await loadGuiImage("stat_pickaxe.png")

const guiInventory = await loadGuiImage("inventory.png")
const guiStatusEffectBar = await loadGuiImage("status_effect_bar.png")
const guiHotbar = await loadGuiImage("hotbar.png")
const guiHotbarSelect = await loadGuiImage("hotbar_select.png")
const guiButton = await loadGuiImage("button.png")
const guiButtonActive = await loadGuiImage("button_active.png")
const guiButtonDisabled = await loadGuiImage("button_disabled.png")
const guiCrosshair = await loadGuiImage("crosshair.png")
const guiBackground = await loadGuiImage("background.png")
const guiButtonLang = await loadGuiImage("button_lang.png")
const guiButtonLangActive = await loadGuiImage("button_lang_active.png")

const guiDoubleChest = await loadGuiImage("double_chest.png")
const guiCraftingTable = await loadGuiImage("crafting_table.png")
const guiFurnaceBase = await loadGuiImage("furnace_base.png")
const guiFurnaceProgress = await loadGuiImage("furnace_progress.png")
const guiFurnaceFire = await loadGuiImage("furnace_fire.png")
const guiTrap = await loadGuiImage("trap.png")
const guiHopper = await loadGuiImage("hopper.png")

const guiArmorEmpty = await loadGuiImage("armor_empty.png")
const guiArmorHalf = await loadGuiImage("armor_half.png")
const guiArmroFull = await loadGuiImage("armor_full.png")
const guiHeartBorderEmptyHurt = await loadGuiImage("heart_border_empty_hurt.png")
const guiHeartBorderEmpty = await loadGuiImage("heart_border_empty.png")
const guiHeartBorderHurt = await loadGuiImage("heart_border_hurt.png")
const guiHeartBorder = await loadGuiImage("heart_border.png")
const guiHeartHalfHurt = await loadGuiImage("heart_half_hurt.png")
const guiHeartHalf = await loadGuiImage("heart_half.png")
const guiHeartHurt = await loadGuiImage("heart_hurt.png")
const guiHeart = await loadGuiImage("heart.png")
const guiBubble = await loadGuiImage("bubble.png")
const guiBubblePop = await loadGuiImage("bubble_pop.png")
const guiPing = await Promise.all([5,4,3,2,1,0].map(async v => await loadGuiImage(`ping${v}.png`)))
const guiPinging = await Promise.all([1,2,3,4,5].map(async v => await loadGuiImage(`pinging${v}.png`)))

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