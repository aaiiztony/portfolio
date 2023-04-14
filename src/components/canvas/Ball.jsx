import React, { Suspense } from 'react'
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
} from "@react-three/drei";
import { Canvas } from '@react-three/fiber';
import CanvasLoader from '../Loader';

const Ball = (props) => { 
  const [decal] = useTexture([props.imgUrl])
  return (
    <Float
  speed={2.5} // Animation speed, defaults to 1
  rotationIntensity={1} // XYZ rotation intensity, defaults to 1
  floatIntensity={2} // Up/down float intensity, works like a multiplier with floatingRange,defaults to 1
>
  <ambientLight 
  intensity={0.25}
  />
  <directionalLight
  position={[0.8,-1,0.05]}/>
  <mesh 
  castShadow
  receiveShadow
  scale={2.75}>
    <icosahedronGeometry
    args={[1,1]}/>
    <meshStandardMaterial
    color='#fff8eb'
    polygonOffset
    polygonOffsetFactor={-5}
    flatShading
    />
    <Decal
    position={[0,0,1]}
    rotation={[2*Math.PI, 0, 6.25]}
    scale={1}
    map={decal}
    flatShading/>
  </mesh>
</Float>
  )
}

const BallCanvas = ({icon}) => {
  return (
    <Canvas
    frameloop='always'
    dpr={[1,2]}
    gl={{preserveDrawingBuffer:true}}>
      <Suspense fallback={<CanvasLoader/>}>
        <OrbitControls enableZoom={false}/>
        <Ball imgUrl={icon}/>
      </Suspense>
      <Preload all/> 
    </Canvas>
  )
}

export default BallCanvas;