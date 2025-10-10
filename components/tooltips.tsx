import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import React from "react";

interface TooltipsProps {
  trigger?: React.ReactNode;
  content?: string;
}

export default function Tooltips(props: TooltipsProps) {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>{props.trigger}</TooltipTrigger>
        <TooltipContent>
          <p>{props.content}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
