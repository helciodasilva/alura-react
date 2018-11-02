import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import AutorBox from './Autor';
import Home from './Home';
import Livro from './Livro';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter as Router, Route,Switch,Link} from 'react-router-dom';

ReactDOM.render((
        <Router>
            <App>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/autor" component={AutorBox}/>
                    <Route path="/livro" component={Livro}/>
                </Switch>
            </App>
        </Router>
    ),
    
    document.getElementById('root')
);

serviceWorker.unregister();
