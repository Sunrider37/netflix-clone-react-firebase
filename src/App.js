
import * as ROUTES from './constants/routes';
import {BrowserRouter as Router, Switch} from 'react-router-dom'
import { Home, Browse, Signin, Signup } from './pages';
import { firebase } from './lib/firebase';
import { IsUserRedirect, ProtectedRoute} from './helpers/routes';
import { AuthListener } from './hooks';


export default function App() {
  const { user } = AuthListener();
  console.log(user)
  return (
    <Router>
      <Switch>
        <IsUserRedirect user={user} loggedInPath={ROUTES.BROWSE} path={ROUTES.SIGNIN}>
          <Signin />
        </IsUserRedirect>
        <IsUserRedirect user={user} loggedInPath={ROUTES.BROWSE} path={ROUTES.SIGNUP}>
          <Signup />
        </IsUserRedirect>
        <ProtectedRoute user={user} path={ROUTES.BROWSE}>
          <Browse />
        </ProtectedRoute>
        <IsUserRedirect user={user} loggedInPath={ROUTES.BROWSE} path={ROUTES.HOME}>
          <Home />
        </IsUserRedirect>
      </Switch>
    </Router>
  );
}

