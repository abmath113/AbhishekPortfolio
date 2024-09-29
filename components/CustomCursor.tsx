import React, { useEffect, useState } from "react";

const CustomGlowCursor: React.FC = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePos = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", updateMousePos);

    return () => {
      window.removeEventListener("mousemove", updateMousePos);
    };
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        left: mousePos.x,
        top: mousePos.y,
        width: "1000px",
        height: "1000px",
        pointerEvents: "none",
        transform: "translate(-50%, -50%)",
        background:
          "radial-gradient(circle, rgba(36, 99, 235, 0.55) 0%, rgba(173, 216, 230, 0.05) 50%, rgba(173, 216, 230, 0) 70%)",
        filter: "blur(150px)",
      }}
    />
  );
};

export default CustomGlowCursor;
