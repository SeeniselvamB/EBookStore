import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage = ({ onLoginSuccess }) => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    if (email === 'abc@gmail.com' && password === 'abcd') 
      {
      onLoginSuccess(); 
      navigate('/'); 
    } else {
      setError('Invalid email or password');
    }
  };

  const handleSignUp = () => {
    if (email && password && name) {
      onLoginSuccess(); 
      navigate('/'); 
    } else {
      setError('Please provide a name, email, and password');
    }
  };

  const resetForm = () => {
    setEmail('');
    setPassword('');
    setName('');
    setError('');
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <div style={isSignIn ? styles.HellorightPanel : styles.signUpPanel}>
          {isSignIn ? (
            <>
              <h2 style={styles.panelHeader}>Hello Friends!</h2>
              <p style={styles.infoText}>
                Register with your personal details to use all of the site features.
              </p>
              <button
                style={styles.switchButton}
                onClick={() => { setIsSignIn(false); resetForm(); }}
              >
                SIGN UP
              </button>
            </>
          ) : (
            <div style={styles.form}>
              <h2 style={styles.headerText}>Create Account</h2>
              <p style={styles.subText}>or use email for registration</p>
              <input
                id="signup-name"
                type="text"
                placeholder="Name"
                style={styles.input}
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                id="signup-email"
                type="email"
                placeholder="Email"
                style={styles.input}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                id="signup-password"
                type="password"
                placeholder="Password"
                style={styles.input}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button style={styles.signUpButton} onClick={handleSignUp}>SIGN UP</button>
              {error && <p style={styles.errorText}>{error}</p>}
            </div>
          )}
        </div>

        <div style={isSignIn ? styles.signInPanel : styles.WelcomerightPanel}>
          {isSignIn ? (
            <div style={styles.form}>
              <h2 style={styles.headerText}>SIGN IN</h2>
              <p style={styles.subText}>or use email for password</p>
              <input
                id="login-email"
                type="email"
                placeholder="Email"
                style={styles.input}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                id="login-password"
                type="password"
                placeholder="Password"
                style={styles.input}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <a href="#" style={styles.forgotPassword}>Forgot Your Password?</a>
              <button style={styles.signInButton} onClick={handleLogin}>SIGN IN</button>
              {error && <p style={styles.errorText}>{error}</p>}
            </div>
          ) : (
            <>
              <h2 style={styles.panelHeader}>Welcome Back!</h2>
              <p style={styles.infoText}>
                Enter your personal details to use all of the site features.
              </p>
              <button
                style={styles.switchButton}
                onClick={() => { setIsSignIn(true); resetForm(); }}
              >
                SIGN IN
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

const styles = {
  
        container: {
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
          background: 'linear-gradient(to right, #0f1c43, #355fdb)',
        },
        card: {
          display: 'flex',
          width: '900px',
          height: '500px',
          borderRadius: '20px',
          boxShadow: '0px 10px 30px rgba(0, 0, 0, 0.1)',
          overflow: 'hidden',
          background: '#fff',
        },
        signInPanel: {
          flex: 1,
          padding: '40px',
          background: '#fff',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        },
        signUpPanel: {
          flex: 1,
          padding: '40px',
          background: '#fff',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        },
        WelcomerightPanel: {
          flex: 1,
          padding: '40px',
          background: 'linear-gradient(135deg, #3b5bdb, #6a9bdb)',
          color: '#fff',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          borderTopLeftRadius: '90px',
          borderBottomLeftRadius: '90px',
        },
        HellorightPanel: {
          flex: 1,
          padding: '40px',
          background: 'linear-gradient(135deg, #3b5bdb, #6a9bdb)',
          color: '#fff',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          borderTopRightRadius: '90px',
          borderBottomRightRadius: '90px',
        },
        form: {
          textAlign: 'center',
        },
        headerText: {
          fontSize: '2rem',
          marginBottom: '10px',
          color: '#333',
        },
        subText: {
          marginBottom: '20px',
          color: '#999',
        },
        input: {
          width: '100%',
          padding: '10px',
          margin: '10px 0',
          borderRadius: '50px',
          border: '1px solid #ccc',
          backgroundColor: '#dcdcdc',
        },
        forgotPassword: {
          display: 'block',
          marginBottom: '20px',
          color: '#999',
          textDecoration: 'none',
        },
        signInButton: {
          padding: '10px 35px',
          border: 'none',
          borderRadius: '5px',
          background: '#00008b',
          color: '#fff',
          cursor: 'pointer',
        },
        signUpButton: {
          padding: '10px 35px',
          border: 'none',
          borderRadius: '5px',
          background: '#00008b',
          color: '#fff',
          cursor: 'pointer',
        },
        panelHeader: {
          fontSize: '2rem',
          marginBottom: '10px',
          color: '#fff',
        },
        infoText: {
          marginBottom: '40px',
          textAlign: 'center',
        },
        switchButton: {
          padding: '10px 35px',
          border: '1px solid #fff',
          borderRadius: '5px',
          background: 'transparent',
          color: '#fff',
          cursor: 'pointer',
        },
        errorText: {
          color: 'red',
          marginTop: '10px',
        },
      };
  

export default LoginPage;

