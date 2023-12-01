"use client";

import { Minus, Plus } from "lucide-react";
import { useState } from "react";

function AccordionItem() {
  const [open, setOpen] = useState(false);

  return (
    <div className="border rounded-lg">
      <div>
        <button
          className="h-full w-full flex items-center justify-between p-6"
          onClick={() => setOpen(!open)}
        >
          <span>FAQ Collapsed Question</span>
          {open ? <Minus /> : <Plus />}
        </button>
      </div>
      {open && (
        <div className="p-6 pt-0">
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni
            aliquam sint doloremque sequi rem autem exercitationem vitae. Iste,
            ea soluta?
          </p>
        </div>
      )}
    </div>
  );
}

export default function AccordionPage() {
  return (
    <section>
      <div className="max-w-screen-sm mx-auto p-8">
        <div className="space-y-4">
          <AccordionItem />
          <AccordionItem />
          <AccordionItem />
        </div>
      </div>
    </section>
  );
}
