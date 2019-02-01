import React, {Fragment, useContext} from 'react'
import ReactDOM from 'react-dom'
import MyContext from './App'

const Consumer = () => {
  return <div>'This is the consumer '</div>
  // const value = useContext(MyContext)
  // return <div>Here is the {value}</div>
}

export default Consumer
