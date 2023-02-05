

export default function canvasSetup(width, height) {

    const canvasNode = document.getElementById("canvas")
    canvasNode.width = width
    canvasNode.height = height
    canvasNode.style="border:1px solid #000000"
    
    const ctx = canvasNode.getContext("2d");

    const colors ={
        BLUE : "blue",
        GREEN : "green",
        RED : "red",
        BLACK : "black",
    }
    
    function drawLine(xFrom,yFrom,xTo,yTo,color = colors.BLACK, thickness = 1){
        ctx.moveTo(xFrom,yFrom)
        ctx.lineTo(xTo, yTo)
        ctx.lineWidth = thickness;
        ctx.strokeStyle = color;
        ctx.stroke()
    }

    function drawRect(x, y, width, height, color = colors.BLACK, thickness = 0){
        ctx.lineWidth = thickness;
        ctx.strokeStyle = color;
        if (thickness == 0) ctx.fillRect(x, y, width, height)
        else ctx.strokeRect(x, y, width, height)
    }

    //fun drawCircle(xCenter: Int, yCenter: Int, radius: Int, color: Int = BLACK, thickness: Int = 0)
    function drawCircle(x, y, width, height, color = colors.BLACK, thickness = 0){
        ctx.lineWidth = thickness;
        ctx.strokeStyle = color;
        if (thickness == 0) ctx.fillRect(x, y, width, height)
        else ctx.strokeRect(x, y, width, height)        
    }

    //fun drawArc(xCenter: Int, yCenter: Int, radius: Int, startAng: Int, endAng: Int = 360, color: Int = BLACK, thickness: Int = 0)
    function drawArc(x, y, width, height, color = colors.BLACK, thickness = 0){
        ctx.lineWidth = thickness;
        ctx.strokeStyle = color;
        if (thickness == 0) ctx.fillRect(x, y, width, height)
        else ctx.strokeRect(x, y, width, height)        
    }

    //fun drawText(x: Int, y: Int, txt: String, color: Int = BLACK, fontSize: Int? = null)
    function drawText(x, y, width, height, color = colors.BLACK, thickness = 0){
        ctx.lineWidth = thickness;
        ctx.strokeStyle = color;
        if (thickness == 0) ctx.fillRect(x, y, width, height)
        else ctx.strokeRect(x, y, width, height)        
    }

    //fun drawImage(filename :String, x: Int, y: Int, width: Int =0, height: Int =0)
    function drawImage(x, y, width, height, color = colors.BLACK, thickness = 0){
        ctx.lineWidth = thickness;
        ctx.strokeStyle = color;
        if (thickness == 0) ctx.fillRect(x, y, width, height)
        else ctx.strokeRect(x, y, width, height)        
    }

    //fun onTime(delay :Int, handler :()->Unit)
    //fun onTimeProgress(period :Int, handler :(Long)->Unit) :TimerCtrl
    //fun onMouseDown(handler :(MouseEvent)->Unit)
    //fun onMouseMove(handler :(MouseEvent)->Unit)
    //fun onKeyPressed(handler :(KeyEvent)->Unit)
    //fun playSound( sound: String )
    //fun loadSounds(vararg names: String)

    return {
        colors,
        drawLine,
        drawRect,
        drawCircle,
        drawArc,
        drawText,
        onTimeProgress : (period, handler) => setInterval(handler,period),
        clear : ()=>ctx.clearRect(0,0,height,width)
    }
}


