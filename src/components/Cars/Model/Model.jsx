import { useFrame, useLoader } from 'react-three-fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { arrayOf, number, string } from 'prop-types'
import * as THREE from 'three'

export default function Model({ path, scale }) {
  const { animations, scene } = useLoader(
    GLTFLoader,
    process.env.PUBLIC_URL + path
  )

  let mixer

  if (animations.length) {
    mixer = new THREE.AnimationMixer(scene)

    animations.forEach((clip) => {
      const action = mixer.clipAction(clip)
      action.play()
    })
  }

  useFrame((_, delta) => mixer?.update(delta))

  scene.traverse((child) => {
    if (child.isMesh) {
      child.castShadow = true
      child.receiveShadow = true
      child.material.side = THREE.FrontSide
    }
  })

  return <primitive object={scene} scale={scale} />
}

Model.propTypes = {
  path: string.isRequired,
  scale: arrayOf(number).isRequired,
}
