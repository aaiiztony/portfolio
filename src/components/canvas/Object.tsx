import { OrbitControls, Preload, SpotLight, useGLTF } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React, { Suspense, useEffect, useState } from 'react'
import CanvasLoader from "../Loader"

const Object = ({isMobile}:{isMobile:boolean}) => {
  const computer = useGLTF('./anime_table/scene.gltf');
  return (
    <mesh>
      <hemisphereLight
      intensity={0.2}
      groundColor='white'
      />
      <SpotLight
      intensity={0.5}
      position={[-12, 50, 10]}
      angle={15}
      penumbra={1}
      castShadow
      shadow-mapSize={1024}
      /> 
      <pointLight
      intensity={1}
      />
      <primitive
      object={computer.scene}
      scale={isMobile? 1.23 : 1.75}
      position={isMobile? [-0, -3.92, 0.01]:[0, -4.88, -4.29]}
      rotation={[-0.01, -0.20, 0]}
      />
    </mesh>
  )
}

const ObjectCanvas= ()=>{
  const [isMobile, setIsMobile] = useState(false);
  useEffect(()=>{

    //add a listener for mediaquery change detection 
    const mediaQuery = window.matchMedia("(max-width:500px)")

    //set initial value of 'isMobile' state variable
    setIsMobile(mediaQuery.matches);

    //callback function to handle changes to the media query
    const handleMediaQueryChange = (e:MediaQueryListEvent)=>{
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
    className='absolute z-[2]'
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
      <Object isMobile={isMobile}/>
      </Suspense>
      <Preload all/>
    </Canvas>
  )
}
export default ObjectCanvas