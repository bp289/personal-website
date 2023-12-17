import "./globals.css";
import Image from "next/image";

import { SkillsCarousel } from "@/components/SkillsCarousel";
import { Picture } from "@/components/Picture";
export default function Home({ darkMode }) {
  return (
    <main className="h-full max-w-screen-2xl text-white mx-auto">
      {/* <Image src="../images/canvas.png" alt="profile" /> */}
      <Picture />
      <div className="flex h-full flex-col items-start justify-center">
        <div className="flex flex-col lg:flex-row">
          <div className="flex gap-6 flex-col items-start justify-center">
            <h1 className="text-9xl">Biraj Pantha</h1>
            <p className="text-4xl font-light">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Corrupti, rerum. Debitis accusantium deleniti enim iste
              dignissimos? Similique, exercitationem! Odit vero, numquam quae
              ratione maxime sunt reiciendis laudantium quaerat iure ipsum!
            </p>
          </div>
          <SkillsCarousel />
        </div>
      </div>
    </main>
  );
}
