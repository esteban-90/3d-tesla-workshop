import { Suspense } from 'react'
import BoundingBox from './BoundingBox'
import Dragable from './Dragable'
import Model from './Model'

export default function Cars() {
  return (
    <Suspense fallback={null}>
      <Dragable>
        <BoundingBox
          dims={[3, 2, 6]}
          offset={[0, -0.4, 0.8]}
          position={[4, 4, 0]}
        >
          <Model
            path='/assets/sketches/tesla_model_3/scene.gltf'
            scale={new Array(3).fill(0.01)}
          />
        </BoundingBox>
      </Dragable>

      <Dragable>
        <BoundingBox
          dims={[3, 2, 6]}
          offset={[0, -0.8, 0.2]}
          position={[-4, 4, 0]}
        >
          <Model
            path='/assets/sketches/tesla_model_s/scene.gltf'
            scale={new Array(3).fill(0.7)}
          />
        </BoundingBox>
      </Dragable>

      <group rotation={[0, Math.PI, 0]}>
        <Model
          path='/assets/sketches/mech_drone/scene.gltf'
          scale={new Array(3).fill(2.5)}
        />
      </group>
    </Suspense>
  )
}
