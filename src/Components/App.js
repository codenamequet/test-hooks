import React, {Component, Fragment} from 'react';
import Consumer from './Consumer'


const MyContext = React.createContext()

function Context() {
  return (
  <MyContext.Provider value='😎'> 
    <Consumer />
  </MyContext.Provider>
  )
}

class App extends Component {
  state = {
    fruit: ['apples', 'bananas', 'grapes']
  }

  render() {
    return (
      <Fragment>
      <div>{this.state.fruit.map(f => `${f} `)}</div>
      <Consumer />
      </Fragment>
    )
  }
}

export default App;
