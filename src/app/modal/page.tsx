"use client";

import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { useState } from "react";
import Overlay from "../_components/overlay";

function Modal({
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

      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ">
        <div className="w-[90vw] lg:w-[60vw] max-w-[600px] bg-white rounded-lg relative shadow">
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-3 end-2.5"
            onClick={() => setIsOpen(false)}
          >
            <X className="w-5 h-5" />
            <span className="sr-only">Close modal</span>
          </Button>
          <div className="p-4 md:p-5 text-center">
            <svg
              className="mx-auto mb-4 text-gray-400 w-12 h-12 dark:text-gray-200"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
            <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
              Are you sure you want to delete this product?
            </h3>
            <div className="flex items-center gap-2 justify-center">
              <Button variant="destructive">Yes, Im sure</Button>
              <Button variant="outline" onClick={() => setIsOpen(false)}>
                No, cancel
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default function ModalPage() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <section>
      <div className="container py-8">
        <Button onClick={() => setIsOpen(true)}>Open Modal</Button>
        <Modal isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
    </section>
  );
}
