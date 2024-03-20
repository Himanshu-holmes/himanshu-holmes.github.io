
import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";  

export function InfiniteMovingCardsDemo({testimonial}) {
  return (
    <div className="h-[11rem] rounded-md flex flex-col antialiased  dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonial}
        direction="right"
        speed="slow"
      />
    </div>
  );
}

