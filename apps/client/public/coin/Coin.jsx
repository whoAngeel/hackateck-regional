/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.0 coin.gltf 
Author: HanSoloSnipe (https://sketchfab.com/HanSoloSnipe)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/flat-drop-low-poly-04964e607bcf463ca36c9441393961ca
Title: Flat Drop [Low-Poly]
*/

import React from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const { nodes, materials } = useGLTF('coin/coin.gltf')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Drop_2_1_0.geometry} material={materials.material} />
    </group>
  )
}

useGLTF.preload('/coin.gltf')
