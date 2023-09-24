import Rect from './rect.js'
import Layer from './layer.js'
import Color from './color.js'
import {Sprite, SpriteSheet} from './sprite.js'
import InputHandler from './input.js'

const Main = (func, fps=60) => {
    var timeNow = Date.now() 
    let _ = () => { 
        var timeElapsed = Date.now() - timeNow 
        const dt = timeElapsed / fps
        timeNow = Date.now() 
        func(dt)

        window.requestAnimationFrame(_)

        return dt
    }
    _()
}


export {Main, Rect, Sprite, SpriteSheet, InputHandler, Layer, Color }
