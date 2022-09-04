import React from 'react';
import Nav from './Nav';
import Footer from './Footer';
import LoginPage from './LoginPage';

class LoginApp extends React.Component {
  render() {
    return (
      <div>
        <Nav />
        <LoginPage />
        <Footer />
      </div>
    );
  }
}

export default LoginApp;
