import React, { Component } from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import About from './About/About';
import Home from './Home/Home';
import People from './People/People';
import FAQ from './About/FAQ/FAQ';
import Company from './About/Company/Company'
import Character from './Character/Character'

class App extends Component {
  render() {
    return (
      <div>
        This is App.js
        <nav>
          <Link to='/'>Home</Link>
          <Link to ='/about'>About</Link>
          <Link to ='/people'>People</Link>

        </nav>
        <main>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" render={() => {
              return(
                <About>
                 <Route path='/about/faq' component={FAQ}/>
                 <Route path='/about/company' component={Company}/>
                  </About>
            )
           }}/>
            <Route exact path="/people" component={People} />
            <Route path='/people/:id' component={Character} />
            <Route render={() => {
              return (
               <div>
                 <h1>404 Not Found</h1>
                 <p>You straight visited an invalid page, dawg!!!</p>
                  <Link to="/">Homepage</Link>
                </div>
             )
            }} />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
