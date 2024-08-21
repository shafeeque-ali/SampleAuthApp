import React, { useState } from 'react';
import { TextField, Button, MenuItem, Grid, Typography, Container, Paper } from '@mui/material';
import axios from 'axios';


const SignUp = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    mobile: '',
    role: '',
    password: '',
    confirmPassword:''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const signUpCaller = async (url,userData) => {
    try {
      const response = await axios.post(url, userData);
  
      console.log('Sign Up Successful:', response.data);
      // Handle success, such as redirecting to a login page
      window.alert('Sign Up Successful');
    } catch (error) {
      console.error('Error during sign up:', error.response ? error.response.data : error.message);
      // Handle error, such as displaying an error message to the user
      window.alert('Error during sign up, ' + JSON.stringify(error.response.data));
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    if(formData.confirmPassword === formData.password){
      signUpCaller("http://localhost:5000/api/auth/signup",formData)
    }else{
      window.alert('Error : password mismatched');
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <Paper elevation={3} style={{ padding: '16px' }}>
        <Typography component="h1" variant="h5" align="center">
          Sign Up
        </Typography>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                name="firstName"
                label="First Name"
                variant="outlined"
                fullWidth
                required
                value={formData.firstName}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                name="lastName"
                label="Last Name"
                variant="outlined"
                fullWidth
                required
                value={formData.lastName}
                onChange={handleChange}
              />
            </Grid>
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
                name="mobile"
                label="Mobile No"
                variant="outlined"
                fullWidth
                required
                value={formData.mobile}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                name="role"
                label="Role"
                select
                variant="outlined"
                fullWidth
                required
                value={formData.role}
                onChange={handleChange}
              >
                <MenuItem value="user">User</MenuItem>
                <MenuItem value="admin">Admin</MenuItem>
                <MenuItem value="guest">Guest</MenuItem>
              </TextField>
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
            <Grid item xs={12}>
              <TextField
                name="confirmPassword"
                label="Confirm Password"
                type="password"
                variant="outlined"
                fullWidth
                required
                value={formData.confirmPassword}
                onChange={handleChange}
              />
            </Grid>
          </Grid>
          <Button type="submit" fullWidth variant="contained" color="primary" style={{ marginTop: '16px' }}>
            Sign Up
          </Button>
        </form>
      </Paper>
    </Container>
  );
};

export default SignUp;
