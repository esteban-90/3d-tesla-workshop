import { useEffect, useState } from 'react'
import { useThree } from 'react-three-fiber'
import { DepthOfField, EffectComposer } from 'react-postprocessing'

export default function Effects() {
  const [lights, setLights] = useState(null)
  const { scene } = useThree()

  useEffect(() => {
    if (scene.lights && scene.lights.length === 3) {
      setLights(scene.lights)
    }
  }, [scene.lights])

  return (
    lights && (
      <EffectComposer>
        <DepthOfField
          focusDistance={0}
          focalLength={0.02}
          bokehScale={2}
          height={480}
        />
      </EffectComposer>
    )
  )
}
