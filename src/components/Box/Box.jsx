import { useLoader } from 'react-three-fiber'
import { useBox } from 'use-cannon'
import { arrayOf, number } from 'prop-types'
import * as THREE from 'three'

export default function Box({ position }) {
  const [ref, api] = useBox(() => ({ mass: 1, position }))

  const texture = useLoader(
    THREE.TextureLoader,
    process.env.PUBLIC_URL + '/assets/images/wood.jpg'
  )

  const handlePointerDown = (event) => {
    event.object.active = true
    if (window.activeMesh) {
      scaleDown(window.activeMesh)
      window.activeMesh.active = false
    }
    window.activeMesh = event.object
  }

  const handlePointerOver = (event) => {
    event.object.scale.x = 1.2
    event.object.scale.y = 1.2
    event.object.scale.z = 1.2
  }

  const handlePointerOut = (event) => {
    if (!event.object.active) scaleDown(event.object)
  }

  const scaleDown = (object) => {
    object.scale.x = 1
    object.scale.y = 1
    object.scale.z = 1
  }

  return (
    <mesh
      api={api}
      castShadow
      onPointerDown={handlePointerDown}
      onPointerOut={handlePointerOut}
      onPointerOver={handlePointerOver}
      position={position}
      ref={ref}
    >
      <boxBufferGeometry args={[1, 1, 1]} />
      <meshPhysicalMaterial map={texture} />
    </mesh>
  )
}

Box.propTypes = { position: arrayOf(number).isRequired }
