"use client";

import { countContext } from "@/contexts/countContext";
import { DisplayInfo } from "@/components/displayInfo";
import { useState } from "react";

function Home() {
  const [ctx, setCtx] = useState(22);
  return (
    <div className="hero">
      <countContext.Provider value={{ ctx, setCtx }}>
        <DisplayInfo />
      </countContext.Provider>
    </div>
  );
}

export default Home;
