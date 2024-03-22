import React, { useEffect } from 'react'

export  function ForceLandscape({children}) {

    useEffect(() => {
        if(screen.availWidth < 1024 && screen.orientation.type === "portrait-primary" || screen.orientation.type === "portrait-secondary" ){
            screen.orientation.lock('landscape').catch(error => {
                console.error('Failed to lock orientation:', error);
              });
            } else {
              console.warn('Screen orientation API not supported');
            
        }
    }, [])
    

  return (
    <div>{children}</div>
  )
}
