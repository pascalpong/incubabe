"use client";

import React from "react";

export default function Home() {
  const MODEL_SRC = "/models/model.glb";

  return (
    <div className="flex h-screen w-screen items-center justify-center bg-black">
      {/* @ts-ignore */}
      <model-viewer
        src={MODEL_SRC}
        ios-src={MODEL_SRC}
        ar
        ar-modes="webxr scene-viewer quick-look"
        camera-controls
        auto-rotate
        shadow-intensity="1"
        exposure="1.1"
        class="h-full w-full"
      >
        <button
          slot="ar-button"
          className="absolute bottom-8 left-1/2 -translate-x-1/2 transform rounded-full bg-white px-8 py-3 text-base font-semibold text-black shadow-lg transition hover:bg-zinc-200"
        >
          View in AR
        </button>
        {/* @ts-ignore */}
      </model-viewer>
    </div>
  );
}
