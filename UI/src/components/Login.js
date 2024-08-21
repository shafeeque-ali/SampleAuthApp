import React, { useState } from 'react';
import { TextField, Button, Grid, Typography, Container, Paper } from '@mui/material';
import axios from 'axios';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const loginCaller = async (url,userData) => {
    try {
      const response = await axios.post(url, userData);
  
      console.log('login Successful:', response.data);
      // Handle success, such as redirecting to a login page
      window.alert('login Successful, Access-tocken recieved');
    } catch (error) {
      console.error('Error during login:', error.response ? error.response.data : error.message);
      // Handle error, such as displaying an error message to the user
      window.alert('Error during login, ' + JSON.stringify(error.response.data));

    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    loginCaller("http://localhost:5000/api/auth/login",formData)
  };

  return (
    <Container component="main" maxWidth="xs">
      <Paper elevation={3} style={{ padding: '16px' }}>
        <Typography component="h1" variant="h5" align="center">
          Log In
        </Typography>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                name="email"
                label="Email"
                variant="outlined"
                fullWidth
                required
                value={formData.email}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                name="password"
                label="Password"
                type="password"
                variant="outlined"
                fullWidth
                required
                value={formData.password}
                onChange={handleChange}
              />
            </Grid>
          </Grid>
          <Button type="submit" fullWidth variant="contained" color="primary" style={{ marginTop: '16px' }}>
            Log In
          </Button>
        </form>
      </Paper>
    </Container>
  );
};

export default Login;
