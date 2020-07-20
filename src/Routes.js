import React, { useContext } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Login from "./pages/Login.page";
import Dashboard from "./pages/Dashboard.page";
import Wrapper from "./components/layout/Wrapper.component";

import { CurrentUserContext } from "./contexts/currentUser.context";

const ProtectedRoute = ({ component: Component, ...otherProps }) => {
  const { userData } = useContext(CurrentUserContext);
  return (
    <Route
      {...otherProps}
      render={(props) =>
        userData.name ? <Component {...props} /> : <Redirect to="/" />
      }
    />
  );
};

const AppRouter = () => {
  return (
    <Router>
      <Wrapper>
        <Switch>
          <Route exact path="/" component={Login} />
          <ProtectedRoute exact path="/dashboard" component={Dashboard} />
        </Switch>
      </Wrapper>
    </Router>
  );
};

export default AppRouter;
