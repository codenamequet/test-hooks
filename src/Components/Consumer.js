import React, {Fragment, useContext} from 'react'
import ReactDOM from 'react-dom'
import App, {MyContext} from './App'

function Consumer() {
  console.log(MyContext._currentValue)
  const value = useContext(MyContext)
  return <div>Here is the {value}</div>
  // return <div>'This is the consumer '</div>
  // return (
  // <MyContext.Consumer>
  //   {value => <div>'This is the {value}'</div> }
  // </MyContext.Consumer>
  // )
}

export default Consumer
