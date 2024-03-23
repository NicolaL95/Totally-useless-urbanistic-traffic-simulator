import React, { useEffect, useState } from 'react'
import { MatrixHandler } from './MatrixHandler'
import { generateMatrix } from '../utils'
import { Cell } from './Cell';
import "./Matrix.css"

export function Matrix({elementForAxis}) {

const [matrix,setMatrix] =useState(generateMatrix(elementForAxis)); 

const idealCellSize = window.innerWidth / (elementForAxis + 4);

useEffect(() => {
  
}, [])


  return (
    <div className='matrix'>
      {matrix.map((matrixRow,rowIndex)=>(
        <div className='matrix-row' key={rowIndex}>{
        matrixRow.map((matrixColumn,columnIndex)=>(
          <Cell matrix={matrix} setMatrix={setMatrix} xIndex={columnIndex} yIndex={rowIndex} key={columnIndex} idealCellSize={idealCellSize} cellInfo={matrixColumn}/>
          ))
      }
        </div>
      ))}
    </div>
  )
}
