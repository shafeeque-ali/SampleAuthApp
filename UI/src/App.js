import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { AppBar, Toolbar, Button, Typography } from '@mui/material';
import Login from './components/Login';
import SignUp from './components/SingUp';

const App = () => {
  return (
    <Router>
      <div>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" style={{ flexGrow: 1 }}>
              Auth App
            </Typography>
            <Button color="inherit" component={Link} to="/login">
              Login
            </Button>
            <Button color="inherit" component={Link} to="/signup">
              Sign Up
            </Button>
          </Toolbar>
        </AppBar>
        <div style={{marginTop:"2rem"}}>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
