"use client";
import { Button } from "@/components/ui/button";
import { useEffect, useRef, useState } from "react";

export default function DropdownMenuPage() {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLElement | null>()

  return (
    <div className="p-8">
      {/* Dropdown Menu */}
      <div className="relative">
        <Button onClick={() => setOpen(true)}>Open</Button>

        {/* Dropdown Content */}
        {open && (
          <div className="min-w-[300px] h-[600px] absolute top-full left-0">
            <ul className="flex flex-col">
              <li className="p-4 bg-gray-50 border-b"></li>
              <li className="p-4 bg-gray-50 border-b"></li>
              <li className="p-4 bg-gray-50 border-b"></li>
              <li className="p-4 bg-gray-50 border-b"></li>
              <li className="p-4 bg-gray-50 border-b"></li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
