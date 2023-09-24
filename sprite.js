export class Sprite 
{
  #img;
  constructor(i, x, y, w, h) 
  { 
    this.rotation = 0;
    this.x = x;
    this.y = y;
    this.src = i 
    this.#img = new Image();
  
    this.#img.src = this.src;
    this.width = w || this.#img.width
    this.height = h || this.#img.height

  }

  getimg()
  {
    return this.#img
  }

  draw(layer)
  {
    layer.getctx().save()

    layer.getctx().rotation = this.rotation

    layer.getctx().drawImage(this.#img, this.x, this.y, this.width, this.height)
  
    layer.getctx().restore()
  }

  drawEx(layer, cx, cy, cw, ch)
  {
    layer.getctx().drawImage(this.#img, cx, cy, cw, ch, this.x, this.y, this.w, this.h)
  }

}

export class SpriteSheet {
  
  #img;

  constructor(i, x, y, w, h) 
  {
    this.x = x;
    this.y = y;
    this.#img = new Image();
    this.src = i 
    this.#img.src = this.src;
    this.width = w || this.#img.width
    this.height = h || this.#img.height

    this.anims = {}
  }

  addAnim(tag, x, y, w, h, frameCount, speed, loop) 
  {
    if (!this.anims[tag]) {
      this.anims[tag] = {
        x: x,
        y: y,
        w: h,
        h: h, 
        frameCount: frameCount,
        speed: speed || 1,
        loop: loop || false,
        curframe: 0,
        finished: false
      }
    } else {
      console.error('An animation with the "' + tag + '" tag has already been created!')
    }
  }

  setCurAnimation(tag, reset=true)
  {
    if (this.curAnim) {
      if (reset) {
        this.anims[this.curAnim].curframe = 0
        if (!this.anims[this.curAnim].loop) {
          this.anims[this.curAnim].finished = true
        }
      }
    }
    
    this.curAnim = tag
    
  }

  isCurAnimationFinished()
  {
    if (this.curAnim === null) 
      console.error('No current animation has been set!\nMake sure to set one befor drawing!')
    else
      return this.anims[this.curAnim].finished
  }

  getcurAnimationFrame()
  {
    if (this.curAnim === null) console.error('No current animation has been set!\nMake sure to set one befor drawing!')
    return parseInt(this.anims[this.curAnim].curframe)
  }

  getCurAnimation()
  {
    return this.curAnim
  }

  #playcuranim()
  {
    this.anims[this.curAnim].curframe += this.anims[this.curAnim].speed 
  
    if (this.anims[this.curAnim].curframe > this.anims[this.curAnim].frameCount)
    {
      if (this.anims[this.curAnim].loop)
      {
        this.anims[this.curAnim].curframe = 0
      } else {
        this.anims[this.curAnim].curframe = this.anims[this.curAnim].frameCount
        this.anims[this.curAnim].finished = true
      }
    }
  }

  draw(layer)
  { 
    if (this.curAnim === null) console.error('No current animation has been set!\nMake sure to set one befor drawing!')
    const anim = this.anims[this.curAnim]
    this.#playcuranim()
    layer.getctx().drawImage(this.#img, anim.x + parseInt(anim.curframe) * anim.w, anim.y, anim.w, anim.h, this.x, this.y, this.width, this.height)
  }

}
