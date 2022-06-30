import '@/App.css'
import { Canvas } from 'react-three-fiber'
import { Physics } from 'use-cannon'
import * as Components from '@/components'

export default function App() {
  return (
    <div style={{ height: '100vh', width: '100vw' }}>
      <Components.Colors />
      <Components.Camera.Buttons />

      <Canvas
        camera={{ position: [7, 7, 7] }}
        gl={{
          antialias: false,
          depth: false,
          powerPreference: 'high-performance',
          stencil: false,
        }}
        shadowMap
        style={{ backgroundColor: 'black' }}
      >
        <Components.Background />
        <Components.Lights />
        <Components.Orbit />

        <axesHelper args={[5]} />

        <Physics>
          <Components.Cars />
          <Components.Floor />
        </Physics>

        <Components.Camera.Controls />
        <Components.Effects />
      </Canvas>
    </div>
  )
}
