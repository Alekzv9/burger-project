import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Layout from './hoc/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Checkout from './containers/Checkout/Checkout';

// With exact the order doesn't matter.
export class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <Switch>
            <Route path="/checkout" component={Checkout}></Route>
            <Route path="/" exact component={BurgerBuilder}></Route>
          </Switch>
        </Layout>
      </div>
    );
  }
  // react router prefix strategy
  // option1: With exact 'order' doesn't matter
  // option2: Use switch
}

export default App;
