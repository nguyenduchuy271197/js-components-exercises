"use client";

import { MouseEvent, useRef, useState } from "react";

function Slider() {
  const [isDragging, setIsDragging] = useState(false);
  const [width, setWidth] = useState(50);
  const sliderRef = useRef<HTMLDivElement | null>(null);

  function handleMouseDown() {
    setIsDragging(true);
  }

  function handleMouseUp() {
    setIsDragging(false);
  }

  function handleMouseMove(e: MouseEvent<HTMLDivElement>) {
    if (isDragging) {
      const boxRect = sliderRef.current?.getBoundingClientRect();

      if (boxRect) {
        const x = e.clientX - boxRect.left;
        const pctWidth = parseFloat(((x / boxRect.width) * 100).toFixed(2));
        setWidth(pctWidth);
      }
    }
  }

  return (
    <div className="max-w-sm relative">
      <div
        className="h-2 rounded-lg border overflow-hidden"
        onMouseDown={(e) => {
          const boxRect = sliderRef.current?.getBoundingClientRect();

          if (boxRect) {
            const x = e.clientX - boxRect.left;
            const pctWidth = parseFloat(((x / boxRect.width) * 100).toFixed(2));
            setWidth(pctWidth);
          }
        }}
        ref={sliderRef}
      >
        <div
          className="h-full bg-primary"
          style={{
            width: `${width}%`,
          }}
        ></div>
      </div>
      <div
        className="absolute left-full top-1/2 -translate-y-1/2 -translate-x-1/2"
        style={{
          left: `${width}%`,
        }}
      >
        <div className="absolute bottom-full left-1/2 -translate-x-1/2">
          {width}
        </div>
        <div
          className="h-4 aspect-[1/1] rounded-full border bg-white border-primary"
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseMove={(e) => handleMouseMove(e)}
        ></div>
      </div>
    </div>
  );
}

export default function SliderPage() {
  return (
    <section>
      <div className="p-8">
        <Slider />
      </div>
    </section>
  );
}
