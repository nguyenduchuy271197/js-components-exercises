"use client";
import { Button } from "@/components/ui/button";
import useOnClickOutside from "@/hooks/use-on-click-outside";
import { useRef, useState } from "react";

export default function DropdownMenuPage() {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  const handleClickOutside = () => {
    setOpen(false);
  };

  useOnClickOutside(ref, handleClickOutside);

  return (
    <div className="p-8">
      {/* Dropdown Menu */}
      <div className="relative inline-flex" ref={ref}>
        <Button onClick={() => setOpen(true)} variant="outline">
          Open
        </Button>

        {/* Dropdown Content */}
        {open && (
          <div className="min-w-[300px] absolute top-full left-0">
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
