"use client";

import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function CollapsePage() {
  const [visible, setVisible] = useState(false);
  return (
    <section className="p-8">
      <div>
        <Button onClick={() => setVisible(!visible)}>Collapse</Button>

        {visible && (
          <div className="mt-2 max-w-sm border rounded p-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae animi
            doloremque rerum rem quis ipsam nulla hic voluptatibus molestiae
            iste?
          </div>
        )}
      </div>
    </section>
  );
}
