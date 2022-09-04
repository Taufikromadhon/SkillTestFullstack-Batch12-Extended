import React, { useState, useEffect }  from 'react';
import FacebookLogin from 'react-facebook-login';
import { Card, Image } from 'react-bootstrap';
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import { gapi } from 'gapi-script';
import logo from '../assets/image/kotakode-logo.png';



function FormLogin() {
  const [login, setLogin] = useState(false);
  const [data, setData] = useState({});
  const [picture, setPicture] = useState('');
  const [profileGoogle, setProfileGoogle] = useState([]);
  const clientId =
    '386932037035-k8v833noqjk7m4auae0t83vnkrqvvg3t.apps.googleusercontent.com';
  useEffect(() => {
    const initClient = () => {
      gapi.client.init({
        clientId: clientId,
        scope: '',
      });
    };
    gapi.load('client:auth2', initClient);
  });
  const onSuccess = (res) => {
    setProfileGoogle(res.profileObj);
  };

  const onFailure = (err) => {
    console.log('failed', err);
  };

  const logOut = () => {
    setProfileGoogle(null);
  };

  const responseFacebook = (response) => {
    console.log(response);
    setData(response);
    setPicture(response.picture.data.url);
    if (response.accessToken) {
      setLogin(true);
    } else {
      setLogin(false);
    }
  };
  return (
    <div className='form-login-wrapper'>
      <div className='col-md-6'>
        <div className=''>
          <div className='card-body card-custom'>
            <img className='logo-form-login' src={logo} alt='logo' />
            <form>
              <div className='form-group plus-margin-20'>
                <label for='email' className='font-medium'>
                  Email / Username
                </label>
                <input
                  type='email'
                  className='form-control input-custom'
                  placeholder=''
                />
              </div>
              <div className='form-group plus-margin-20'>
                <label for='password' className='font-medium'>
                  Password
                </label>
                <input
                  type='password'
                  className='form-control input-custom input-custom2'
                  placeholder=''
                />
              </div>
              <div className='form-group plus-margin-20'>
                <label for='password' className='lupa-password'>
                  Lupa Password?
                </label>
              </div>
              <button type='submit' className='button-masuk'>
                Masuk
              </button>
            </form>
            <div className=''>
              <label className='masuk-dengan'>atau masuk dengan</label>
              <div>
                {profileGoogle ? (
                  <div>
                    <img src={profileGoogle.imageUrl} alt='' />
                    <h3>User Logged in</h3>
                    <p>Name: {profileGoogle.name}</p>
                    <p>Email Address: {profileGoogle.email}</p>
                    <br />
                    <br />
                    <GoogleLogout
                      clientId={clientId}
                      buttonText='Log out'
                      onLogoutSuccess={logOut}
                    />
                  </div>
                ) : (
                  <GoogleLogin
                    clientId={clientId}
                    buttonText='Sign in with Google'
                    onSuccess={onSuccess}
                    onFailure={onFailure}
                    cookiePolicy={'single_host_origin'}
                    isSignedIn={true}
                  />
                )}
              </div>
              <Card style={{ width: '600px' }}>
                <Card.Header>
                  {!login && (
                    <FacebookLogin
                      appId='562118384400275'
                      autoLoad={true}
                      fields='name,email,picture'
                      scope='public_profile,user_friends'
                      callback={responseFacebook}
                      icon='fa-facebook'
                    />
                  )}
                  {login && <Image src={picture} roundedCircle />}
                </Card.Header>
                {login && (
                  <Card.Body>
                    <Card.Title>{data.name}</Card.Title>
                    <Card.Text>{data.email}</Card.Text>
                  </Card.Body>
                )}
              </Card>
            </div>
            <div className='belum-daftar-wrapper'>
              <label className='belum-daftar'>
                Belum Memiliki Akun? <span className='daftar'>Daftar</span>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FormLogin;
