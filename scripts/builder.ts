import { resolve } from "node:path"
import { createFolderForFile } from "./utilities/file.js"
import { copyFileSync, existsSync, rmSync, WriteFileOptions, writeFileSync } from "node:fs"
import { Canvas, Image } from "canvas"
import { getImageBuffer } from "./utilities/canvas.js"
import Textures from "./textures.js"

class PackBuilder
{
    public assets: Record<string,PackBuilder.BuildCallback> = {}
    public get outputFolderPath(): string {return resolve(PackBuilder.OUTPUT_FOLDERPATH,this.name)}
    protected constructor(public readonly name: string)
    {
        this.addImageBuild("pack.png",Textures.PACK)
    }
    public addBuild(filename: string,cb: PackBuilder.BuildCallback): this
    {
        this.assets[filename] = cb
        return this
    }
    public addBinaryBuild(filename: string,content: string | NodeJS.ArrayBufferView,options?: WriteFileOptions): this
    {
        return this.addBuild(filename,(filepath) => writeFileSync(filepath,content,options))
    }
    public addJsonBuild(filename: string,content: any): this
    {
        return this.addBinaryBuild(filename,JSON.stringify(content,undefined,4),"utf-8")
    }
    public addCopyBuild(filename: string,filepath: string): this
    {
        return this.addBuild(filename,target => copyFileSync(filepath,target))
    }
    public addImageBuild(filename: string,image: Image | Canvas): this
    {
        return this.addBinaryBuild(filename,getImageBuffer(image))
    }
    public build(): void
    {
        if(existsSync(this.outputFolderPath))
            rmSync(this.outputFolderPath,{recursive: true})
        console.info(`[\x1b[32m${this.name}\x1b[0m] start building`)
        const start = performance.now()
        for(const [filename,callback] of Object.entries(this.assets))
        {
            const filepath = resolve(this.outputFolderPath,filename)
            createFolderForFile(filepath)
            console.info("    building",`\x1b[33m${filename}\x1b[0m -> \x1b[33m${filepath}\x1b[0m`)
            callback.bind(this)(filepath)
        }
        const end = performance.now()
        console.info(`[\x1b[32m${this.name}\x1b[0m] end building, took \x1b[34m${Math.round(end-start)}\x1b[0mms`)
    }
}

namespace PackBuilder
{
    export const OUTPUT_FOLDERPATH = resolve(process.cwd(),"out")
    export type BuildCallback = (this: PackBuilder,filepath: string) => void
}

export default PackBuilder