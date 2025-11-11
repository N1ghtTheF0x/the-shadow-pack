import type { Identifier, PackType } from "./types.js"

export interface IPackData
{
    "pack": IPackData.IInfo
    "features"?: IPackData.IFeatures
    "filter"?: IPackData.IFilter
    "overlays"?: IPackData.IOverlays
    "language"?: Record<string,IPackData.ILanguage>
}

export namespace IPackData
{
    export interface IInclusiveFormat
    {
        "min_inclusive": number
        "max_inclusive": number
    }
    export type Format = number | [number,number]
    export type FormatExt = Format | IInclusiveFormat
    export interface IFormatRange
    {
        "min_format": number | [number,number]
        "max_format": number | [number,number]
    }
    export interface IInfo extends IFormatRange
    {
        "description": string
        "pack_format"?: number
        "supported_formats": FormatExt
    }
    export interface IFeatures
    {
        "enabled": Array<Identifier>
    }
    export interface IFilter
    {
        "block": Array<IFilter.IBlock>
    }
    export namespace IFilter
    {
        export interface IBlock
        {
            "namespace": string
            "path": string
        }
    }
    export interface IOverlays
    {
        "entries": Array<IOverlays.IEntry>
    }
    export namespace IOverlays
    {
        export interface IEntry extends IFormatRange
        {
            "directory": string
            "formats": FormatExt
        }
    }
    export interface ILanguage
    {
        "name": string
        "region": string
        "bidirectional": boolean
    }
}

export const DESCRIPTION_PARTS = ["Nobody uses this pack...","except for him..."]
export const DESCRIPTION: Record<PackType,string> = {
    "resource": DESCRIPTION_PARTS.join(" "),
    "texture": DESCRIPTION_PARTS.join("\n")
}

export const PACK_FILENAME: Record<PackType,string> = {
    "resource": "pack.mcdata",
    "texture": "pack.txt"
}