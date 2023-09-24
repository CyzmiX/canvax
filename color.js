export default class Color {
    static rgba(r, g, b, a=1) {
        
        return `rgba(${r}, ${g}, ${b}, ${a})`
    }  

    static rgb(r, g, b) {
        return `rgba(${r}, ${g}, ${b})`
    }

    static hsl(h, s, l) {
         return `rgba(${h}, ${s}, ${l}%)`
    } 
}
