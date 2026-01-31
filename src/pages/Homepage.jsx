// function Homepage() {
//     return (
//         <div style={{ display: "flex", height: "100vh", width: "100%", margin: 0, padding: 0 }}>
            
//             <div style={{ flex: "0 0 65%", background: "#181818ff", padding: "2rem", overflowY: "auto" ,borderRight: "1px solid #ddd" , borderRadius: 16 }}>
//                 <h2>Main Content</h2>
                
//             </div>

            
//             <div style={{ flex: "0 0 35%", background: "#0b0b0bff", padding: "2rem", overflowY: "auto", borderLeft: "1px solid #ddd" ,borderRadius: 16 }}>
//                 <h2>Secondary Content</h2>
                
//             </div>
//         </div>
//     )
// }

// export default Homepage;

import React, { useState, useRef, useEffect } from "react";

export default function Homepage() {
  const [leftPercent, setLeftPercent] = useState(65); 
  const draggingRef = useRef(false);

  useEffect(() => {
    const onMove = (e) => {
      if (!draggingRef.current) return;
      const clientX = e.clientX ?? (e.touches && e.touches[0].clientX);
      const rect = document.body.getBoundingClientRect();
      const pct = ((clientX - rect.left) / rect.width) * 100;
      
      setLeftPercent(Math.max(20, Math.min(80, pct)));
    };
    const onUp = () => (draggingRef.current = false);

    window.addEventListener("mousemove", onMove);
    window.addEventListener("touchmove", onMove, { passive: true });
    window.addEventListener("mouseup", onUp);
    window.addEventListener("touchend", onUp);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("touchmove", onMove);
      window.removeEventListener("mouseup", onUp);
      window.removeEventListener("touchend", onUp);
    };
  }, []);

  const startDrag = () => (draggingRef.current = true);

  const handleDividerKey = (e) => {
    if (e.key === "ArrowLeft") setLeftPercent((p) => Math.max(20, p - 2));
    if (e.key === "ArrowRight") setLeftPercent((p) => Math.min(80, p + 2));
  };

  return (
    <div style={{ display: "flex", width: "100%", height: "100vh", margin: 0 }}>
      <div style={{ width: `${leftPercent}%`, background: "#0a0a0aff", padding: 24 }}>
        <h2>Main (left)</h2>
        
      </div>

      <div
        role="separator"
        tabIndex={0}
        onMouseDown={startDrag}
        onTouchStart={startDrag}
        onKeyDown={handleDividerKey}
        style={{
          width: 10,
          cursor: "col-resize",
          background: "#40525eff",
          display: "flex",
          alignItems: "stretch",
        }}
        aria-orientation="vertical"
        aria-valuenow={leftPercent}
        aria-valuemin={20}
        aria-valuemax={80}
      />

      <div style={{ flex: 1, background: "#252222ff", padding: 24 }}>
        <h2>Secondary (right)</h2>
       
      </div>
    </div>
  );
}