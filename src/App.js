import React, { Component } from 'react'

import Layout from './components/layout/layout'
import BurgerBuilder from './container/BurgerBuilder/BurgerBuilder'
class App extends Component{
 render(){
   return (
      <div className="App">
        <Layout>
          <BurgerBuilder />
        </Layout>
      </div>
    )
  }
}
 

export default App;
