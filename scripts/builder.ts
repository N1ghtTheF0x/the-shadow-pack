import { resolve } from "node:path"
import { createFolderForFile } from "./utilities/file.js"
import { copyFileSync, existsSync, rmSync, WriteFileOptions, writeFileSync } from "node:fs"
import { Canvas, Image } from "canvas"
import { createCanvasContext, getImageBuffer, image2canvas } from "./utilities/canvas.js"
import Textures from "./textures.js"
import { CACHE_FOLDERPATH, OUTPUT_FOLDERPATH } from "./paths.js"
import Version from "./minecraft/version.js"
import Atlas from "./atlas.js"

class PackBuilder
{
    public assets: Record<string,PackBuilder.BuildCallback> = {}
    public get outputFolderPath(): string {return resolve(OUTPUT_FOLDERPATH,this.name)}
    protected constructor(public readonly name: string,public readonly supportedVersions: Array<string>,options?: PackBuilder.IOptions)
    {
        let packIcon = Array.isArray(options?.icon) ? image2canvas(Textures.PACK,options.icon[0],options.icon[1]) : Textures.PACK
        this.addImageBuild("pack.png",packIcon)
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
    public addSourceImageBuild(filename: string,image: Image | Canvas,width: number,height: number): this
    {
        const ctx = createCanvasContext(width,height)
        ctx.drawImage(image,0,0)
        return this.addImageBuild(filename,ctx.canvas)
    }
    public addAtlas(filename: string,cb: PackBuilder.BuildCallback<Atlas>): this
    {
        return this.addImageBuild(filename,cb.bind(this)(filename).build())
    }
    public async prepare(): Promise<void>
    {
        for(const version of this.supportedVersions)
        {
            const pkg = await Version.setupPackage2(version)
            const filepath = resolve(CACHE_FOLDERPATH,`${version}.jar`)
            if(existsSync(filepath))
                continue
            createFolderForFile(filepath)
            writeFileSync(filepath,Buffer.from(await (await fetch(pkg.downloads.client.url)).arrayBuffer()),"utf-8")
        }
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
    export type BuildCallback<T = void> = (this: PackBuilder,filepath: string) => T
    export interface IOptions
    {
        icon?: [number,number]
    }
}

export default PackBuilder