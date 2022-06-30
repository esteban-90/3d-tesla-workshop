import state from '@/state'

const style = {
  zIndex: 1,
  position: 'absolute',
  bottom: '30vh',
  height: '30px',
  width: '30px',
  backgroundColor: 'white',
  borderRadius: '100%',
  fontSize: '20px',
  fontWeight: 'bold',
  opacity: 0.7,
  border: '1px solid black',
  cursor: 'pointer',

  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}

const sets = {
  // model 3
  1: {
    cameraPos: [9, 2, 4],
    name: 'Capot001_CAR_PAINT_0',
    target: [4, 0, 0],
  },

  // model S
  2: {
    cameraPos: [1, 2, 5],
    name: 'object005_bod_0',
    target: [-4, 0, 0],
  },
}

export default function Buttons() {
  const handleClick = (num) => {
    return () => {
      state.cameraPos.set(...sets[num].cameraPos)
      state.target.set(...sets[num].target)
      state.activeMeshName = sets[num].name
      state.shouldUpdate = true
    }
  }

  return (
    <>
      <button style={{ ...style, left: '40vw' }} onClick={handleClick(2)}>
        {'<'}
      </button>

      <button style={{ ...style, right: '40vw' }} onClick={handleClick(1)}>
        {'>'}
      </button>
    </>
  )
}
