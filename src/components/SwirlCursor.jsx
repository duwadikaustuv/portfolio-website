import React, { useEffect, useRef } from "react";

const SwirlCursor = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let mouseX = 0;
    let mouseY = 0;

    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    setCanvasSize();
    window.addEventListener("resize", setCanvasSize);

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      drawMainCursor(mouseX, mouseY);
    };

    window.addEventListener("mousemove", handleMouseMove);

    const drawMainCursor = (x, y) => {
      const gradient = ctx.createRadialGradient(x, y, 0, x, y, 30);
      gradient.addColorStop(0, "hsla(210, 70%, 60%, 0.6)");
      gradient.addColorStop(0.5, "hsla(210, 70%, 60%, 0.3)");
      gradient.addColorStop(1, "hsla(210, 70%, 60%, 0)");

      ctx.beginPath();
      ctx.arc(x, y, 30, 0, Math.PI * 2);
      ctx.fillStyle = gradient;
      ctx.fill();
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      if (mouseX > 0 || mouseY > 0) {
        drawMainCursor(mouseX, mouseY);
      }

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", setCanvasSize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-50"
      style={{ opacity: 0.8 }}
      aria-hidden="true"
    />
  );
};

export default SwirlCursor;
