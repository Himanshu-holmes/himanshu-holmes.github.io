"use client";
import React from "react";
import { AnimatedTooltip } from "../components/ui/animated-tooltip";
const people = [
  {
    id: 1,
    name: "github",
    link: "https://github.com/Himanshu-holmes",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg",
  },
  {
    id: 2,
    name: "linkedIn",
    link: "https://www.linkedin.com/in/himanshu-kumar-00538821b/",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-original.svg",
  },
  {
    id: 3,
    name: "twitter",
    link: "https://twitter.com/Himanshu_holmes",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/twitter/twitter-original.svg",
  },
 
 
  
];

export function AnimatedTooltipPreview() {
  return (
    <div className="flex flex-row items-center justify-center my-10 w-full">
      <AnimatedTooltip items={people} />
    </div>
  );
}
