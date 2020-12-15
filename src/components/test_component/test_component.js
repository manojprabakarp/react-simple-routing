import React from 'react';
import { 
  Route, 
  BrowserRouter, 
  Switch, 
  NavLink, 
  Redirect 
/*
useParams - is for accessing url parameters, returns an object of key/value pairs of URL parameters
useHistory - can access to the history instance, you can use to navigate.
useLocation - returns the location object that represents the current URL.
*/
} from "react-router-dom";

 


function Home() {
  return <div>Home Page</div>
}
function Contact() {
  return <div>Contact Page</div>
}

class Testcomponent extends React.Component {

  render() {
    return (
      <div>
        <h3>Simple Navigation Routing</h3>
        <BrowserRouter>
        
          <Redirect from="/" to="/home" />
          <NavLink to="/home" activeClassName="selected"> Home </NavLink>
          <NavLink to="/contact" activeClassName="selected"> Contant </NavLink>

          <Switch>
            <Route path="/home" component={Home}></Route>
            <Route path="/contact" component={Contact}></Route>
          </Switch>

        </BrowserRouter>
      </div>
    );
  }
}

export default Testcomponent

