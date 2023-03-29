import React, {useRef, useEffect} from 'react'
import {useZustand} from '../store/useZustand'
import {World} from '../three/world'


let isFirstRender = true


export const Scene = () => {
  const {
    setWorld,
  } = useZustand()
  const sceneRef = useRef(null)


  useEffect(() => {
    if (!isFirstRender) {
      return
    }
    console.log('isFirstRender: ', isFirstRender);
    (() => {
      const newWorld = new World()
      newWorld.init({domEl: sceneRef.current})
      setWorld(newWorld)
    })()
    isFirstRender = false
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])


  return (
    <div
      className='absolute w-screen h-screen'
      ref={sceneRef}
    />
  )
}
