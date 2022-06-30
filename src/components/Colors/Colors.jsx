import * as THREE from 'three'
import state from '@/state'

export default function Colors() {
  const handleClick = (event) => {
    state.activeMesh.material.color = new THREE.Color(
      event.target.style.backgroundColor
    )
  }

  return (
    <div
      style={{
        position: 'absolute',
        zIndex: 1,
        left: 0,
        right: 0,
        margin: 'auto',
        width: 'fit-content',
        display: 'flex',
        top: '20px',
      }}
    >
      <div
        style={{ backgroundColor: 'blue', height: 50, width: 50 }}
        onClick={handleClick}
      />
      <div
        style={{ backgroundColor: 'yellow', height: 50, width: 50 }}
        onClick={handleClick}
      />
      <div
        style={{ backgroundColor: 'white', height: 50, width: 50 }}
        onClick={handleClick}
      />
    </div>
  )
}
