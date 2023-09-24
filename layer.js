export default class Layer 
{
    #canvas;
    #ctx;

    constructor(advArgs={})
    {
       
        this.width = advArgs.width || 640
        this.height = advArgs.height || 360
        this.#canvas = document.createElement('canvas');
        this.#canvas.width = this.width
        this.#canvas.height = this.height
        document.body.appendChild(this.#canvas)
        this.#canvas.style.position = 'absolute'
/*        for (let s in advArgs.style) {
            this.#canvas.style. = advArgs.style[s]
        }
*/
        this.#ctx = this.#canvas.getContext('2d')
       
        if (advArgs.antialising === false) {
            this.#ctx.webkitImageSmoothingEnabled = false;
            this.#ctx.mozImageSmoothingEnabled = false;
            this.#ctx.imageSmoothingEnabled = false;
        }
        if (advArgs.zIndex) 
            this.#canvas.style.zIndex = advArgs.zIndex
        if (advArgs.x) 
            this.#canvas.style.left = advArgs.x.toString() + 'px'
        if (advArgs.y) 
            this.#canvas.style.top = advArgs.y.toString() + 'px'
    }   

    getCanvas() { return this.#canvas }

    clear()
    {
        this.#ctx.clearRect(0, 0, this.#canvas.width, this.#canvas.height)
    }
    getctx()
    {
        return this.#ctx
    }

}
