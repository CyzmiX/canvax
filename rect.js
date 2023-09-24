export default class Rect 
{
    constructor(args={}) 
    {
        this.x = args.x || 0
        this.y = args.y || 0 
        this.width = args.width || 50
        this.height = args.height || 50
    }   

    draw(layer, args={}) 
    {
        
        layer.getctx().save()
        layer.getctx().rotate = 6
        layer.getctx().beginPath()
        
        if (args.style)
            layer.getctx().fillStyle = args.style

        if (!args.outlined)
            layer.getctx().fillRect(this.x, this.y, this.width, this.height)
        else {
            if (args.lineWidth)
                layer.getctx().lineWidth = parseInt(args.lineWidth)
            layer.getctx().strokeRect(this.x, this.y, this.width, this.height)
        }
        layer.getctx().stroke()

        layer.getctx().restore()
    }


}
