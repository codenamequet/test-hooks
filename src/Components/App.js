import React, {Component, Fragment} from 'react';
import Consumer from './Consumer'


export const MyContext = React.createContext()

// function Context() {
//   return (
//   <MyContext.Provider value='😎'> 
//     <Consumer />
//   </MyContext.Provider>
//   )
// }

class App extends Component {
  state = {
    fruit: ['apples', 'bananas', 'grapes']
  }

  render() {
    return (
      <Fragment>
        <MyContext.Provider value='😎'> 
        <Consumer />
      </MyContext.Provider>
      <div>{this.state.fruit.map(f => `${f} `)}</div>
      </Fragment>
    )
  }
}

export default App;
