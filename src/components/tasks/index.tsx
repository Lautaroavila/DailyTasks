import React from 'react'
import styled from "styled-components";
import '../../styles/tareas.css'

const Tareas = () => {

  const openModal = () => {
    //<Modal/>
    return (
      console.log('retornar componente modal')
    )
  }

  const Title = styled.h1`
    font-size: 1.5em;
    text-align: center;
    color: palevioletred;
  `;

  const CustomButton = styled.button`
    border-radius: 50%;
    background-color: gray;
    color: green;
  `
   
  return (
    <>
      <div className='tareas'>
        <div className='title-tarea'>
          <Title>Tareas</Title>
          <CustomButton className='button' onClick={openModal}>+</CustomButton>
        </div>
        <div></div>
      </div>
    </>
  )
}

export default Tareas