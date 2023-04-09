import { OrbitControls, Preload, SpotLight, useGLTF } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React, { Suspense, useEffect, useState } from 'react'
import CanvasLoader from "../Loader"

const Computers = ({isMobile}) => {
  const computer = useGLTF('./desktop_pc/scene.gltf');
  return (
    <mesh>
      <hemisphereLight
      intensity={0.15}
      groundColor='black'
      />
      <SpotLight
      intensity={1}
      position={[-20, 50, 10]}
      angle={10}
      penumbra={1}
      castShadow
      shadow-mapSize={1024}
      />
      <pointLight
      intensity={1}
      />
      <primitive
      object={computer.scene}
      scale={isMobile? 0.5 : 0.75}
      position={isMobile? [-1.78, -1.62, -0.93]:[-0.55, -2.88, -1.95]}
      rotation={[-0.01, 0.2, -0.1]}
      />
    </mesh>
  )
}

const ComputersCanvas= ()=>{
  const [isMobile, setIsMobile] = useState(false);
  useEffect(()=>{

    //add a listener for mediaquery change detection 
    const mediaQuery = window.matchMedia("(max-width:500px)")

    //set initial value of 'isMobile' state variable
    setIsMobile(mediaQuery.matches);

    //callback function to handle changes to the media query
    const handleMediaQueryChange = (e)=>{
      setIsMobile(e.matches);
    }

    //add callback function as a listener for changes to the media query 
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    //remove the listener when the component is unmounted
    return()=>{
      mediaQuery.removeEventListener('change', handleMediaQueryChange)
    }
  }, [])

  return (
    <Canvas 
    frameloop='demand'
    shadows
    dpr={[1,2]}
    camera={{position:[20, 3, 5], fov:25}}
    gl={{preserveDrawingBuffer:true}}
    >
      <Suspense fallback={<CanvasLoader/>}>
      <OrbitControls
      enableZoom={false}
      maxPolarAngle={Math.PI/2}
      minPolarAngle={Math.PI/2}
      />
      <Computers isMobile={isMobile}/>
      </Suspense>
      <Preload all/>
    </Canvas>
  )
}
export default ComputersCanvas