import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AllPosts from './components/AllPosts';
import LoginForm from './components/LoginForm';
import PostFull from './components/PostFull';
import PrivateRoute from './components/PrivateRoute';
import './styles/global.scss';
import styles from './App.module.scss';
import { useHello } from './useHello';

function App() {
  const helloMessage = 'Hello from';
  useHello(helloMessage, App);

  return (
    <BrowserRouter>
      <div className={styles.mainContiner}>
        <Switch>
          <PrivateRoute
            path="/app"
            helloMessage={helloMessage}
            component={AllPosts}
          />
          <PrivateRoute
            path="/post/:id"
            helloMessage={helloMessage}
            component={PostFull}
          />
          <Route
            path="/"
            render={props => (
              <LoginForm {...props} helloMessage={helloMessage} />
            )}
          />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
