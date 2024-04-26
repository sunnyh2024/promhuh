import { useState } from "react";

export default function Buttons({ callback }: { callback: () => void }) {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const getNewPosition = () => {
    setPosition({
      x: Math.floor(Math.random() * 256),
      y: Math.floor(Math.random() * 96),
    });
  };

  return (
    <div className="text-slate-50">
      <button className="hover:underline mr-8" onClick={callback}>
        Yes
      </button>
      <button
        style={{ position: "absolute", marginTop: position.y, marginLeft: position.x }}
        onMouseOver={getNewPosition}
      >
        No
      </button>
    </div>
  );
}
