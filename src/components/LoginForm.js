import React, { useState } from 'react';
import { authManager } from '../authManager';
import { withRouter } from 'react-router-dom';

function LoginForm({ history }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleFormSubmit(event) {
    event.preventDefault();
    (async () => {
      const loginSuccessful = await authManager.login(email, password);
      if (loginSuccessful) {
        history.push('/app');
      } else {
        setEmail('');
        setPassword('');
      }
    })();
  }

  return (
    <>
      {authManager.isAuthenticated ? (
        <p>You're already logged in!</p>
      ) : (
        <form onSubmit={handleFormSubmit}>
          <h1>Login</h1>
          <label htmlFor="email">Email</label>
          <input
            type="text"
            name="email"
            id="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <label htmlFor="search">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          <button>Login</button>
        </form>
      )}
    </>
  );
}

export default withRouter(LoginForm);
