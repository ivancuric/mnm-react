import React from 'react';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import PostList from './components/PostList';
import PostFull from './components/PostFull';

function App() {
  return (
    <BrowserRouter>
      <Link to="/">All Posts</Link>
      <main>
        <Switch>
          <Route path="/app" />
          <Route path="/post/:id" component={PostFull} />
          <Route path="/" component={PostList} />
        </Switch>
      </main>
    </BrowserRouter>
  );
}

export default App;
