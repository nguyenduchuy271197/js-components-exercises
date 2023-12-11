"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useState } from "react";

const images = [
  {
    id: 1,
    title: "Chilling",
    src: "https://images.unsplash.com/photo-1682685797140-c17807f8f217?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8",
  },
  {
    id: 2,
    title: "Sunset",
    src: "https://plus.unsplash.com/premium_photo-1700391547517-9d63b8a8b351?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHx8",
  },
  {
    id: 3,
    title: "Night",
    src: "https://images.unsplash.com/photo-1575435349939-0ffbdad70905?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHx8",
  },
  {
    id: 4,
    title: "Dinning",
    src: "https://plus.unsplash.com/premium_photo-1698437856426-1a8f8b4a866d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3fHx8ZW58MHx8fHx8",
  },
  {
    id: 5,
    title: "X-mas",
    src: "https://plus.unsplash.com/premium_photo-1701206894826-fb68b027a6af?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1Mnx8fGVufDB8fHx8fA%3D%3D",
  },
];

export default function ImageRandomPage() {
  const [image, setImage] = useState(images[0]);

  function handleImageChange() {
    setImage(images[Math.floor(Math.random() * images.length)]);
  }
  return (
    <section>
      <div className="max-w-screen-sm mx-auto p-8">
        <div className="space-y-2 text-center">
          <Button onClick={handleImageChange}>Change</Button>
          <div className="relative">
            <Image src={image.src} alt={image.title} width={500} height={300} />
            <h2 className="absolute bottom-0 left-0 bg-black text-white py-2 px-4 text-lg font-bold">
              {image.title}
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
}
