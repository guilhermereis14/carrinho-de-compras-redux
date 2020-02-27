import React from 'react';
/* Por estar usando JSX, na definição das rotas, a importação do React é necessária */

import { Switch, Route} from 'react-router-dom';

import Home from './pages/Home';
import Cart from './pages/Cart';

export default function Routes (){
  return (
    /* Comando switch obriga que só uma rota deve ser chamada por momento */
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/cart" component={Cart} />

    </Switch>
  );
}

