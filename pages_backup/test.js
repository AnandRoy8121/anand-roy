import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
// import { OrbitControls, Stage } from "@react-three/drei";
import { Avatar } from "@/components/Avatar";
import { motion } from "framer-motion";

import {
  Environment,
  Center,
  OrbitControls,
  Stage,
  Preload,
  ContactShadows,
} from "@react-three/drei";
import { AmbientLight } from "three";

// import testAnimation from '@/components/testAnimation';


const test = () => {
  return (
    <div className='h-screen w-2/3 flex items-center justify-center bg-blue-200'>
        
        {/* <Canvas camera={{ fov: 75, near: 10, position: [0, 2, 5] }}
        resize={{ scroll: false }}>
          <Stage
            adjustCamera
            intensity={1}
            shadows="contact"
            environment={null}
          >
            
            <Suspense fallback={null}>
                <group position-y={-6}>
              <Avatar/>
              
            
              </group>
            </Suspense>
          </Stage>
         
          <OrbitControls enableZoom={false} zoom0={10}/>
        </Canvas> */}
        <Canvas eventPrefix="client" camera={{ position: [0, 0, 4], fov: 40 }}>
      <ambientLight intensity={0.7} />
      <spotLight intensity={0.5} angle={0.1} penumbra={1} position={[10, 15, -5]} castShadow />
      {/* <Environment preset={null} background blur={1} /> */}
      <ContactShadows resolution={512} position={[0, -0.8, 0]} opacity={1} scale={10} blur={2} far={0.8} />
        <group position-y={-0.8}>
        <Avatar rotation={[0, 0, 0]} />
        </group>
    </Canvas>
    </div>
  )
}

export default test