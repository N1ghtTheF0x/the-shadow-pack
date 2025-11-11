import { resolve } from "node:path"

export const ROOT_FOLDERPATH = resolve(process.cwd())
export const OUTPUT_FOLDERPATH = resolve(ROOT_FOLDERPATH,"out")
export const CACHE_FOLDERPATH = resolve(ROOT_FOLDERPATH,"cache")
export const TEXTURES_FOLDERPATH = resolve(ROOT_FOLDERPATH,"textures")