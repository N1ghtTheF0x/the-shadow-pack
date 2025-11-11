import { resolve } from "node:path"
import { CACHE_FOLDERPATH } from "../paths.js"
import { createFolderForFile } from "../utilities/file.js"
import { existsSync, readFileSync, writeFileSync } from "node:fs"

namespace Version
{
    export interface IPackage2
    {
        "assetIndex": IPackage2.IAssetIndex
        "assets": string
        "complianceLevel": number
        "downloads": IPackage2.Downloads
        "id": string
        "javaversion": IPackage2.IJavaVersion
        "libraries": Array<IPackage2.ILibrary>
        "mainClass": string
        "minecraftArguments": string
        "minimumLauncherVersion": number
        "releaseTime": string
        "time": string
        "type": IManifest2.VersionType
    }
    export namespace IPackage2
    {
        export interface IAssetIndex
        {
            "id": string
            "sha1": string
            "size": number
            "totalSize": number
            "url": string
        }
        export type DownloadType = "client" | "server" | "windows_server"
        export interface IDownload
        {
            "sha1": string
            "size": number
            "url": string
        }
        export type Downloads = Record<DownloadType,IDownload>
        export interface IJavaVersion
        {
            "component": string
            "majorVersion": number
        }
        export interface ILibrary
        {
            "downloads": {
                "artifacts": ILibrary.IArtifact
            }
            "name": string
        }
        export namespace ILibrary
        {
            export interface IArtifact
            {
                "path": string
                "sha1": string
                "size": number
                "url": string
            }
        }
    }
    export interface IManifest2
    {
        "latest": IManifest2.ILatest
        "versions": Array<IManifest2.IVersion>
    }
    export namespace IManifest2
    {
        export const FILEPATH = resolve(CACHE_FOLDERPATH,"version_manifest_v2.json")
        export const URL = "https://piston-meta.mojang.com/mc/game/version_manifest_v2.json"
        export type VersionType = "snapshot" | "release" | "old_beta" | "old_alpha"
        export interface IVersion
        {
            "id": string
            "type": VersionType
            "url": string
            "time": string
            "releaseTime": string
            "sha1": string
            "complianceLevel": number
        }
        export interface ILatest
        {
            "release": string
            "snapshot": string
        }
    }
    export async function fetchPackage2(id: string): Promise<IPackage2>
    {
        const url = getManifest2()["versions"].find(v => v.id === id)?.url
        if(typeof url != "string")
            throw new Error(`no minecraft version with id '${id}' found`)
        const response = await fetch(url)
        return await response.json() as IPackage2
    }
    export function getPackage2(id: string): IPackage2
    {
        const filepath = resolve(CACHE_FOLDERPATH,`${id}.json`)
        if(existsSync(filepath))
            return JSON.parse(readFileSync(filepath,"utf-8"))
        throw new Error(`no minecraft version with '${id}' found in cache`)
    }
    export async function setupPackage2(id: string): Promise<IPackage2>
    {
        const filepath = resolve(CACHE_FOLDERPATH,`${id}.json`)
        if(existsSync(filepath))
            return getPackage2(id)
        const pkg = await fetchPackage2(id)
        createFolderForFile(filepath)
        writeFileSync(filepath,JSON.stringify(pkg,undefined,4),"utf-8")
        return pkg
    }
    export async function fetchManifest2(): Promise<IManifest2>
    {
        const response = await fetch(IManifest2.URL)
        return await response.json() as IManifest2
    }
    export function getManifest2(): IManifest2
    {
        if(existsSync(IManifest2.FILEPATH))
            return JSON.parse(readFileSync(IManifest2.FILEPATH,"utf-8"))
        throw new Error("manifest2 does not exist")
    }
    export async function setupManifest2(): Promise<IManifest2>
    {
        if(existsSync(IManifest2.FILEPATH))
            return getManifest2()
        const manifest = await fetchManifest2()
        createFolderForFile(IManifest2.FILEPATH)
        writeFileSync(IManifest2.FILEPATH,JSON.stringify(manifest,undefined,4),"utf-8")
        return manifest
    }
}

export default Version