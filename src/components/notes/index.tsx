import React, {useState} from 'react'
import '../../styles/notas.css'

const Notas = () => {
  const [nuevaNota, setNuevaNota] = useState('')

  return (
    <>
      <div className="notas">
        <h2>Notas</h2>
        <input className='input' type="text" onChange={e => setNuevaNota(e.target.value)}></input>
      </div>
    </>
  )
}

export default Notas