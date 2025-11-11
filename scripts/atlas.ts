import { Canvas, CanvasRenderingContext2D, Image } from "canvas"
import { createCanvasContext } from "./utilities/canvas.js"
import { IVec2 } from "./utilities/math.js"

class Atlas
{
    private readonly _ctx: CanvasRenderingContext2D
    public constructor(public readonly filepath: string,width: number,height: number)
    {
        this._ctx = createCanvasContext(width,height)
    }
    public addImage(image: Image | Canvas,position: IVec2): this
    {
        this._ctx.drawImage(image,position.x,position.y)
        return this
    }
    public addImages(images: Array<Image | Canvas>,positions: Array<IVec2>): this
    {
        for(let i = 0;i < images.length;i++)
            this.addImage(images[i],positions[i])
        return this
    }
    public build(): Canvas
    {

        return this._ctx.canvas
    }
}

export default Atlas