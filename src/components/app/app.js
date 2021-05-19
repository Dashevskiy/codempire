import React, {useState} from 'react';
import Menu from '../menu/menu';
import BurgerChange from '../burger-change/burger-change';
import Order from '../order/order';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

const App = () => {
  const [order, setOrder] = useState('');

  const onItemSelected = (id) => setOrder(id);

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Menu}/>
        <Route exact path='/burger/:id?' render={() => <BurgerChange onItemSelected={onItemSelected}/>}/>
        <Route exact path='/order' render={() => <Order order={order}/>}/>
        <Route exact path='/order' component={Order}/>
        <Route render={() => <h1>Page not found</h1>}/>
      </Switch>
    </BrowserRouter>
  )
}

export default App;