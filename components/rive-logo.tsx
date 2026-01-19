"use client";

import { useRive } from "@rive-app/react-canvas";

export function RiveLogo() {
  const { RiveComponent } = useRive({
    src: "/images/rive/logo.riv",
    stateMachines: "State Machine 1",
    autoplay: true,
  });

  return (
    <div className="h-44 lg:h-56 xl:h-72 w-[500px] lg:w-[550px] xl:w-[600px] max-w-full">
      <RiveComponent style={{ width: "100%", height: "100%" }} />
    </div>
  );
}
