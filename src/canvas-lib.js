

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

    function drawCircle(xCenter, yCenter, radius, color = colors.BLACK, thickness = 0){
        ctx.lineWidth = thickness;
        ctx.strokeStyle = color;
        ctx.beginPath()
        ctx.arc(xCenter, yCenter, radius, 0, 2 * Math.PI);
        ctx.stroke();        
    }

    function drawArc(xCenter, yCenter, radius, startAng, endAng , color = colors.BLACK, thickness = 0){
        ctx.lineWidth = thickness;
        ctx.strokeStyle = color;
        ctx.arc(xCenter, yCenter, radius, startAng, endAng);
        ctx.stroke();        
    }

    function drawText(x, y, txt, color = colors.BLACK, fontSize = 20){
        ctx.fillStyle = color;
        ctx.font = `${fontSize}px Arial`
        ctx.fillText(txt, x, y); 
    }

    //fun drawImage(filename :String, x: Int, y: Int, width: Int =0, height: Int =0)
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


