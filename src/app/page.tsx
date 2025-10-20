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
            position: 'absolute',
            bottom: '32px',
            left: '50%',
            transform: 'translateX(-50%)',
            backgroundColor: 'white',
            color: 'black',
            padding: '12px 32px',
            borderRadius: '50px',
            border: 'none',
            fontSize: '16px',
            fontWeight: '600',
            zIndex: 100
          }}
        >
          View in AR
        </button>
        {/* @ts-ignore */}
      </model-viewer>
      
      <div style={{
        position: 'absolute',
        top: '20px',
        left: '20px',
        color: 'white',
        fontSize: '12px',
        backgroundColor: 'rgba(255,255,255,0.1)',
        padding: '8px 12px',
        borderRadius: '4px'
      }}>
        Need iOS support? Add model.usdz to /public/models/
      </div>
    </div>
  );
}
