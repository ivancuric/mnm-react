import React from 'react';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import PostFull from './components/PostFull';
import PostList from './components/PostList';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <BrowserRouter>
      <Link to="/app">All Posts</Link>
      <main>
        <Switch>
          <PrivateRoute path="/app" component={PostList} />
          <PrivateRoute path="/post/:id" component={PostFull} />
          <Route path="/" component={LoginForm} />
        </Switch>
      </main>
    </BrowserRouter>
  );
}

export default App;
