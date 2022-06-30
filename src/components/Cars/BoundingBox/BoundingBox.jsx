import { useBox } from 'use-cannon'
import { arrayOf, bool, node, number } from 'prop-types'

export default function BoundingBox({
  position = [0, 0, 0],
  offset = [0, 0, 0],
  dims = [1, 1, 1],
  visible = false,
  children,
}) {
  const [ref, api] = useBox(() => ({ mass: 1, args: dims, position }))

  return (
    <group ref={ref} api={api}>
      <mesh visible={visible} scale={dims}>
        <boxBufferGeometry />
        <meshPhysicalMaterial wireframe />
      </mesh>

      <group position={offset}>{children}</group>
    </group>
  )
}

BoundingBox.propTypes = {
  position: arrayOf(number),
  offset: arrayOf(number),
  dims: arrayOf(number),
  visible: bool,
  children: node.isRequired,
}
