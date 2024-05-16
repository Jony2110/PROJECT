import { Container, Switch } from '@mui/material';
import React, { useState } from 'react';
import { Route, Router } from 'react-router-dom';
import LoginPage from './Login';
import SignUpPage from './SignUp';
import HomePage from './Home';


function App() {
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [users, setUsers] = useState([]);

  return (
    <Router>
      <Container>
        <Switch>
          <Route exact path="/">
            <LoginPage setLoggedInUser={setLoggedInUser} users={users} />
          </Route>
          <Route path="/signup">
            <SignUpPage setUsers={setUsers} />
          </Route>
          <Route path="/home">
            <HomePage
              users={users}
              setUsers={setUsers}
              loggedInUser={loggedInUser}
              setLoggedInUser={setLoggedInUser}
            />
          </Route>
        </Switch>
      </Container>
    </Router>
  );
}

export default App;