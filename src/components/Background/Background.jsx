import { Suspense, useMemo } from 'react'
import { useLoader, useThree } from 'react-three-fiber'
import * as THREE from 'three'

const Background = () => {
  const texture = useLoader(
    THREE.TextureLoader,
    process.env.PUBLIC_URL + '/assets/images/autoshop.jpg'
  )

  const { gl } = useThree()

  const formatted = useMemo(() => {
    return new THREE.WebGLCubeRenderTarget(
      texture.image.height
    ).fromEquirectangularTexture(gl, texture)
  }, [gl, texture])

  return <primitive object={formatted} attach='background' />
}

// eslint-disable-next-line import/no-anonymous-default-export
export default function () {
  return (
    <Suspense fallback={null}>
      <Background />
    </Suspense>
  )
}
