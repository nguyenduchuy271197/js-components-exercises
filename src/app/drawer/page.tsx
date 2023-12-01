"use client";

import { Button } from "@/components/ui/button";
import { useState } from "react";
import Overlay from "../_components/overlay";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

function Drawer({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: (status: boolean) => void;
}) {
  if (!isOpen) return null;

  return (
    <>
      <Overlay isOpen={isOpen} setIsOpen={setIsOpen} />
      <div
        className={cn(
          "fixed w-full h-full bg-white shadow top-0 left-0 bottom-0 max-w-[400px]"
        )}
      >
        <div className="relative">
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-3 end-2.5"
            onClick={() => setIsOpen(false)}
          >
            <X className="w-5 h-5" />
            <span className="sr-only">Close modal</span>
          </Button>
        </div>
      </div>
    </>
  );
}

export default function DrawerPage() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section>
      <div className="container py-8">
        <div className="flex items-center gap-4 flex-wrap">
          <Button onClick={() => setIsOpen(true)} className="capitalize">
            Open Drawer
          </Button>
          <Drawer isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
      </div>
    </section>
  );
}
