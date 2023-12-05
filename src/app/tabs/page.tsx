"use client";

import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function TabsPage() {
  const [activeId, setActiveId] = useState("account");
  return (
    <section>
      <div className="container py-8">
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            {/* Nav */}
            <Button
              variant={activeId === "account" ? "default" : "ghost"}
              onClick={() => setActiveId("account")}
            >
              Account
            </Button>
            <Button
              variant={activeId === "password" ? "default" : "ghost"}
              onClick={() => setActiveId("password")}
            >
              Password
            </Button>
          </div>

          {/* Content */}
          <div>
            {activeId === "account" && (
              <div className="border p-8">
                Account Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Provident earum numquam suscipit quos autem quas iusto qui
                exercitationem similique necessitatibus.
              </div>
            )}

            {activeId === "password" && (
              <div className="border p-8">
                Password Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Provident earum numquam suscipit quos autem quas iusto qui
                exercitationem similique necessitatibus.
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
