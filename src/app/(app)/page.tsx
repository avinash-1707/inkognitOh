"use client";

import { RainbowButton } from "@/components/magicui/rainbow-button";
import { MarqueeDemo } from "@/components/marquee-inkognitoh";
import { ArrowRightIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";

function Homepage() {
  const router = useRouter();

  return (
    <div className="min-h-screen w-full flex flex-col items-center">
      {/* Hero Section */}
      <div className="mt-32 sm:mt-40 md:mt-48 flex flex-col gap-6  px-4 items-center text-center max-w-3xl">
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold">
          inkognitOh!
        </h1>
        <h2 className="text-lg sm:text-xl md:text-2xl text-neutral-700 dark:text-neutral-400">
          Wanna know what they really think? There's a link for that.
        </h2>
        <RainbowButton
          onClick={() => router.push("/sign-in")}
          className="z-50 mt-8 sm:mt-10 flex items-center gap-2 hover:scale-105 duration-300 group text-base sm:text-lg"
          size="lg"
        >
          Get started
          <span>
            <ArrowRightIcon className="group-hover:translate-x-2 duration-300" />
          </span>
        </RainbowButton>
      </div>

      {/* Marquee Section */}
      <div className="w-full mt-24 sm:mt-32 mb-16 sm:mb-24">
        <MarqueeDemo />
      </div>
    </div>
  );
}

export default Homepage;
