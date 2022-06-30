import { useEffect, useRef } from 'react'
import { useThree } from 'react-three-fiber'
import { arrayOf, number } from 'prop-types'

export default function Bulb({ position }) {
  const ref = useRef()
  const { scene } = useThree()

  useEffect(() => {
    scene?.lights?.push(ref)
    scene.lights ??= [ref]
  }, [scene])

  return (
    <mesh position={position} ref={ref}>
      <pointLight
        castShadow
        shadow-mapSize-height={2 ** 10}
        shadow-mapSize-width={2 ** 10}
        shadow-radius={10}
      />
      <sphereBufferGeometry args={[0.2, 20, 20]} />
      <meshPhongMaterial emissive='white' />
    </mesh>
  )
}

Bulb.propTypes = { position: arrayOf(number).isRequired }
