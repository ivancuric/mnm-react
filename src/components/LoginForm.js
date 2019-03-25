import React, { useState } from 'react';
import { authManager } from '../authManager';
import { withRouter } from 'react-router-dom';
import { useHello } from '../useHello';
import styles from './LoginForm.module.scss';

// TODO: logout

function LoginForm(props) {
  const { helloMessage, history } = props;

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useHello(helloMessage, LoginForm);

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
    <div className={styles.container}>
      {authManager.isAuthenticated ? (
        <p>You're already logged in!</p>
      ) : (
        <form onSubmit={handleFormSubmit}>
          <h1>Login</h1>
          <label htmlFor="email" className={styles.inputLabel}>
            Email
          </label>
          <input
            className={styles.textInput}
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <label htmlFor="password" className={styles.inputLabel}>
            Password
          </label>
          <input
            className={styles.textInput}
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          <button className={styles.loginButton}>Login</button>
        </form>
      )}
    </div>
  );
}

export default withRouter(LoginForm);
