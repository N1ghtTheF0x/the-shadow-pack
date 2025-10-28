import { mkdirSync } from "node:fs"
import { dirname } from "node:path"

export function createFolderForFile(filepath: string): void
{
    mkdirSync(dirname(filepath),{recursive: true})
}