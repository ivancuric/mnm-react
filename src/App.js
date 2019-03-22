import React from 'react';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import PostFull from './components/PostFull';
import PostList from './components/PostList';
import PrivateRoute from './components/PrivateRoute';
import { useHello } from './useHello';

function App() {
  const helloMessage = 'Hello from';
  useHello(helloMessage, App);

  return (
    <BrowserRouter>
      <Link to="/app">All Posts</Link>
      <main>
        <Switch>
          <PrivateRoute
            path="/app"
            helloMessage={helloMessage}
            component={PostList}
            // render={props => <PostList {...props} />}
          />
          <PrivateRoute
            path="/post/:id"
            helloMessage={helloMessage}
            component={PostFull}
            // render={props => <PostFull {...props} />}
          />
          <Route
            path="/"
            render={props => (
              <LoginForm {...props} helloMessage={helloMessage} />
            )}
          />
        </Switch>
      </main>
    </BrowserRouter>
  );
}

export default App;
