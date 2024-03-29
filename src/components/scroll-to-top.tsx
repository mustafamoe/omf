"use client";

import { MoveUp } from "lucide-react";
import { Button } from "./ui/button";
import { cn } from "~/lib/utils";

export function ScrollToTop({ visible }: { visible: boolean }) {
  return (
    <div
      className={cn(
        "fixed right-4 bottom-4 scale-0 transition-transform z-50",
        visible && "scale-1"
      )}
    >
      <Button
        className="rounded-full w-12 h-12 p-0"
        onClick={() => {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
      >
        <MoveUp />
      </Button>
    </div>
  );
}
