import './App.css';
import React, { Fragment } from "react";
import { Route, Switch, Router} from "react-router-dom";
import Homepage from "../Homepage"
import Basket from "../Basket"
import Loginpage from '../Loginpage';
import SignupPage from '../SignupPage';
import AdminPanel from '../AdminPanel';

function App() {
  return (
    <Fragment>
      <Switch>
      <Route path="/Basket" component={Basket}/>
      <Route path="/Admin" component={AdminPanel}/>
      <Route path="/login" component={Loginpage} />
      <Route path="/signup" component={SignupPage} />
      <Route path="/" exact component={Homepage} />
      {/* <Redirect to="/" /> */}
      </Switch>
    </Fragment>
  );
}

export default App;
