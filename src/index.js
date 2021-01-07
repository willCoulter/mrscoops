import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import{
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  BrowserRouter
} from "react-router-dom"

//Page Imports
import Home from './componets/Home';
import Menu from './componets/Menu';
import About from './componets/About';
import Error from './componets/Error';
import Navbar from './componets/Narbar';

function App() {
  return (
    <main>
      <Switch>
        <Route path="/" component={Home} exact/>
        <Route path="/about" component={About}/>
        <Route path="/menu" component={Menu}/>
        <Route component={Error}/>
      </Switch>
    </main>
  )
}



ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
