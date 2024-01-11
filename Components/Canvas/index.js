import React, { useRef, useEffect } from 'react'

const Canvas = () => {
    const canvasRef = useRef(null);
    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let coord = { x: 0, y: 0 };
 
        const reposition = (event) => {
            coord.x = event.clientX - canvas.offsetLeft;
            coord.y = event.clientY - canvas.offsetTop;
        }
        
        const draw = (event) => {
  
            ctx.beginPath();

            ctx.font = "30px Arial";
            ctx.fillStyle = "#ffffff";
            ctx.moveTo(coord.x, coord.y);
            if ( Math.abs(event.clientX - canvas.offsetLeft - coord.x) > 50 || Math.abs(event.clientY - canvas.offsetTop - coord.y) > 50 ) {
                reposition(event);
                ctx.fillText("hi", coord.x, coord.y);
            }
            // ctx.stroke();
            // console.log("coordx ", coord.x);
    
        }

        const resize = () => {
            ctx.canvas.width = window.innerWidth;
            ctx.canvas.height = window.innerHeight;
        };

       
        const start = (event) => {
            document.addEventListener("mousemove", draw);
            reposition(event);
        }

        const stop = () => {
            console.log("STOP");
           
    


            // ctx.clearRect(0, 0, canvas.width, canvas.height);
            document.removeEventListener("mousemove", draw);
        }

        document.addEventListener("mousedown", start);
        document.addEventListener("mouseup", stop);
        window.addEventListener("resize", resize);
        
        resize();
      })

    return (
        <canvas ref={canvasRef}>
        </canvas>
    );
};
export default Canvas;