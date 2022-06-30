import { useBox } from 'use-cannon'

export default function Floor() {
  const [ref] = useBox(() => {
    return {
      args: [20, 1, 10],
      position: [0, -0.5, 0],
    }
  })

  return (
    <mesh receiveShadow position={[0, -0.5, 0]} ref={ref}>
      <boxBufferGeometry args={[200, 1, 200]} />
      <meshPhysicalMaterial transparent opacity={0.2} />
    </mesh>
  )
}
