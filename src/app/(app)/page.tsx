"use client";
import { RainbowButton } from "@/components/magicui/rainbow-button";
import { ArrowRightIcon } from "lucide-react";
import React from "react";

function Homepage() {
  return (
    <div className="min-h-screen w-full flex justify-center">
      <div className="mt-48 px-4 flex flex-col gap-4.5 items-center">
        <h1 className="text-7xl font-extrabold">inkognitOh!</h1>
        <h2 className="text-3xl text-neutral-700 dark:text-neutral-400">
          Wanna know what they really think? There's a link for that.
        </h2>
        <RainbowButton
          className="z-50 mt-12 flex items-center gap-2 hover:scale-105 duration-300 group"
          size="lg"
        >
          Get started
          <span>
            <ArrowRightIcon className="group-hover:translate-x-2 duration-300" />
          </span>
        </RainbowButton>
      </div>
    </div>
  );
}

export default Homepage;
