import { useEffect, useRef, useState } from 'react'
import { extend, useThree } from 'react-three-fiber'
import { DragControls } from 'three/examples/jsm/controls/DragControls'
import { node } from 'prop-types'

extend({ DragControls })

export default function Dragable(props) {
  const [children, setChildren] = useState([])
  const { camera, gl, scene } = useThree()
  const groupRef = useRef()
  const controlsRef = useRef()

  useEffect(() => setChildren(groupRef.current.children), [])

  useEffect(() => {
    controlsRef.current.addEventListener('hoveron', () => {
      scene.orbitControls.enabled = false
    })

    controlsRef.current.addEventListener('hoveroff', () => {
      scene.orbitControls.enabled = true
    })

    controlsRef.current.addEventListener('dragstart', (event) => {
      event.object.api?.mass.set(0)
    })

    controlsRef.current.addEventListener('drag', (event) => {
      event.object.api?.position.copy(event.object.position)
      event.object.api?.velocity.set(0, 0, 0)
    })

    controlsRef.current.addEventListener('dragend', (event) => {
      event.object.api?.mass.set(1)
    })
  }, [children, scene.orbitControls])

  return (
    <group ref={groupRef}>
      <dragControls
        transformGroup
        args={[children, camera, gl.domElement]}
        ref={controlsRef}
      />
      {props.children}
    </group>
  )
}

Dragable.propTypes = { children: node.isRequired }
