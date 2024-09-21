"use client";

import * as React from "react";
import * as SwitchPrimitives from "@radix-ui/react-switch";

import { cn } from "@/lib/utils";
import NoSignal from "@/assets/icons/no_signal.svg?react";
import Signal from "@/assets/icons/signal.svg?react";

const Switch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root>
>(({ className, ...props }, ref) => {
  const [isChecked, setIsChecked] = React.useState(false);
  const handleToggle = () => setIsChecked((prev) => !prev);
  return (
    <SwitchPrimitives.Root
      className={cn(
        "peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input",
        className,
      )}
      {...props}
      checked={isChecked}
      onCheckedChange={handleToggle}
      ref={ref}
    >
      <SwitchPrimitives.Thumb
        className={cn(
          "pointer-events-none relative flex items-center justify-center h-8 w-8 rounded-full bg-[#A0A0A0] shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=checked]:bg-white data-[state=unchecked]:translate-x-[-10px]",
        )}
      >
        {!isChecked ? <NoSignal fontSize={25} /> : <Signal fontSize={25} />}
      </SwitchPrimitives.Thumb>
    </SwitchPrimitives.Root>
  );
});
Switch.displayName = SwitchPrimitives.Root.displayName;

export { Switch };
