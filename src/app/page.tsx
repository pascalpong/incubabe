"use client";

import React from "react";

export default function Home() {
  const MODEL_SRC = "/models/model.glb";
  const IOS_MODEL_SRC = "/models/model.usdz";

  return (
    <div className="flex h-screen w-screen items-center justify-center bg-black">
      {/* @ts-ignore */}
      <model-viewer
        src={MODEL_SRC}
        ios-src={IOS_MODEL_SRC}
        ar
        ar-modes="webxr scene-viewer quick-look"
        camera-controls
        auto-rotate
        shadow-intensity="1"
        exposure="1.1"
        style={{ width: '100%', height: '100%' }}
      >
        <div slot="progress-bar" style={{ display: 'none' }}></div>
        
        <button
          slot="ar-button"
          style={{
            position: 'fixed',
            bottom: '180px',
            left: '50%',
            transform: 'translateX(-50%)',
            backgroundColor: 'white',
            color: 'black',
            padding: '16px 32px',
            borderRadius: '50px',
            border: 'none',
            fontSize: '16px',
            fontWeight: '600',
            zIndex: 9999,
            boxShadow: '0 4px 12px rgba(0,0,0,0.3)'
          }}
        >
          View in AR
        </button>
        {/* @ts-ignore */}
      </model-viewer>
    </div>
  );
}
