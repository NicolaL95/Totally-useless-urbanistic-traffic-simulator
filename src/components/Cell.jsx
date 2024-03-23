import React, { useRef } from 'react'
import { useEffect } from 'react';

export function Cell({idealCellSize,setMatrix,matrix,xIndex,yIndex}) {
    const cellRef = useRef(null);
   
  useEffect(() => {
    const tmpMatrix = matrix;
    tmpMatrix[yIndex][xIndex] = {...tmpMatrix[yIndex][xIndex],x: cellRef.current.offsetLeft,y:cellRef.current.offsetTop}
   
  }, [])
  

    

  return (
    <div ref={cellRef} style={{width:idealCellSize - 2,height:idealCellSize -2 }} className='cell'></div>
  )
}
