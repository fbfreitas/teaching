import canvasSetup from './canvas-lib'

function main(){
    console.log("HELLO")
    const canvas = canvasSetup(300,300)
    canvas.drawLine(0,0,100,100)

    canvas.drawCircle(50,50,20)
    canvas.drawText(50,20,"HELLO WORLD")

    /*let dx = 1
    let last = 0 
    canvas.onTimeProgress(10,()=>{
        if(last < 0 || last > 300) dx=-dx
        last+=dx
        canvas.clear()
        canvas.drawRect(last,0,100,100,canvas.colors.BLACK,1)
    })*/
    
}

export default main