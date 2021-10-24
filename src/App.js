import React, {useState} from 'react';
import './App.css';
import Header from './components/Header/Header';
import LoginForm from './components/LoginForm/LoginForm';
import RegistrationForm from './components/RegistrationForm/RegistrationForm';
import Home from './components/Home/Home';
import ListProducts from './components/ListProducts';
import PrivateRoute from './utils/PrivateRoute';
import Admin from './components/Admin';
import {
  BrowserRouter as HashRouter,
  Switch,
  Route,Has
} from "react-router-dom";
import AlertComponent from './components/AlertComponent/AlertComponent';  
function App() {
  const [title, updateTitle] = useState(null);
  const [errorMessage, updateErrorMessage] = useState(null);
  return (
    
    <HashRouter>
      
    <div className="App">
      <Header title={title}/>
        <div className="container d-flex align-items-center flex-column">
          <Switch>
            <Route path="/" exact={true}>
            <Home/>
            </Route>
            <Route path="/login">
              <LoginForm showError={updateErrorMessage} updateTitle={updateTitle}/>
            </Route>
            <Route path="/admin">
              <Admin showError={updateErrorMessage} updateTitle={updateTitle}/>
            </Route>
            <PrivateRoute path="/home">
              <Home/>
            </PrivateRoute>
            <PrivateRoute path="/products">
              <ListProducts showError={updateErrorMessage} updateTitle={updateTitle}/>
            </PrivateRoute>
          </Switch>
          <AlertComponent errorMessage={errorMessage} hideError={updateErrorMessage}/>
        </div>
    </div>
    </HashRouter>
  );
}

export default App;
