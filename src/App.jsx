import React from 'react'
import classNames from 'classnames'
import {Scene} from './components/Scene'


const App = () => {
  return (
    <div className={classNames({
      'w-screen h-screen': true,
    })}
    >
      <Scene/>
    </div>
  )
}


export default App
