import Bulb from './Bulb'

export default function Lights() {
  return (
    <>
      <ambientLight intensity={0.2} />

      <directionalLight
        castShadow
        intensity={2}
        position={[6, 3, 0]}
        shadow-mapSize-height={2 ** 10}
        shadow-mapSize-width={2 ** 10}
        shadow-radius={10}
      />

      <Bulb position={[-6, 3, 0]} />
      <Bulb position={[0, 3, 0]} />
      <Bulb position={[6, 3, 0]} />
    </>
  )
}
