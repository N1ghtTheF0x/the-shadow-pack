import { mkdirSync } from "node:fs"
import { dirname } from "node:path"

export function createFolderForFile(filepath: string): string
{
    const dir = dirname(filepath)
    mkdirSync(dir,{recursive: true})
    return dir
}