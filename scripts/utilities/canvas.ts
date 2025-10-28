import { createCanvas as ccanvas, CanvasRenderingContext2D, Image, Canvas } from "canvas"

export function createCanvas(width: number,height: number): CanvasRenderingContext2D
{
    const canvas = ccanvas(width,height)
    const ctx = canvas.getContext("2d")
    ctx.imageSmoothingEnabled = false
    return ctx
}

export function image2canvas(image: Image): Canvas
{
    const ctx = createCanvas(image.naturalWidth,image.naturalHeight)
    ctx.drawImage(image,0,0)
    return ctx.canvas
}

export function getImageBuffer(image: Image | Canvas): Buffer
{
    if("getContext" in image)
        return image.toBuffer()
    return getImageBuffer(image2canvas(image))
}