import { createCanvas, CanvasRenderingContext2D, Image, Canvas } from "canvas"

export function createCanvasContext(width: number,height: number): CanvasRenderingContext2D
{
    const canvas = createCanvas(width,height)
    const ctx = canvas.getContext("2d")
    ctx.imageSmoothingEnabled = false
    return ctx
}

export function image2canvas(image: Image,width = image.naturalWidth,height = image.naturalHeight): Canvas
{
    const ctx = createCanvasContext(width,height)
    ctx.drawImage(image,0,0,width,height)
    return ctx.canvas
}

export function getImageBuffer(image: Image | Canvas): Buffer
{
    if("getContext" in image)
        return image.toBuffer()
    return getImageBuffer(image2canvas(image))
}