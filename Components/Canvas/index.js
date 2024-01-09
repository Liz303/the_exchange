import React, { useRef, useEffect } from 'react'

const Canvas = () => {
    const canvasRef = useRef(null);


    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let coord = { x: 0, y: 0 };
        // let frameCount = 0;
        // let animationFrameId;

        const reposition = (event) => {
            coord.x = event.clientX - canvas.offsetLeft;
            coord.y = event.clientY - canvas.offsetTop;
        }
        
        const draw = (event) => {
            ctx.beginPath();
            ctx.lineWidth = 30;
            ctx.lineCap = "round";
            ctx.strokeStyle = "#ffffff";
            ctx.moveTo(coord.x, coord.y);
            reposition(event);
            ctx.lineTo(coord.x, coord.y);
            ctx.stroke();
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
            document.removeEventListener("mousemove", draw);
        }

        document.addEventListener("mousedown", start);
        document.addEventListener("mouseup", stop);
        window.addEventListener("resize", resize);
        
        resize();

        // const render = () => {
        //     frameCount++;
        //     draw(context, frameCount);
        //     animationFrameId = window.requestAnimationFrame(render);
        // }
        // render();
    
        // return () => {
        // window.cancelAnimationFrame(animationFrameId);
        // }
      })

    return (
        <canvas ref={canvasRef}>
        </canvas>
    );
};
export default Canvas;