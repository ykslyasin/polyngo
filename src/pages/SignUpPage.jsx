import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { Box, Typography, Input, Button, Stack } from '@mui/joy';
import UserService from '../services/userService';

export default function SignUp() {
  const [email, setEmail] = useState('');
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const userService = new UserService();

  const handleRegistration = async () => {
    try {
      // Kullanıcı adı kontrolü
      if (userName.length < 5) {
        toast.error('Username must be at least 5 characters.');
        return;
      }

      // Şifre kontrolü
      if (password.length < 5) {
        toast.error('Password must be at least 5 characters.');
        return;
      }

      // Şifrelerin eşleşme kontrolü
      if (password !== confirmPassword) {
        toast.error('Passwords do not match.');
        return;
      }

      // E-posta format kontrolü
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        toast.error('Invalid email format.');
        return;
      }

      const response = await userService.registerUser(email, userName, password);
      if (response.success) {
        toast.success('Successfully registered!');
      } else {
        alert('Registration Failed!');
        console.error('Registration failed: ', response.message);
      }
    } catch (error) {
      console.error('Error:', error.message);
    }
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '60vh',
        px: 2,
      }}
    >
      <Typography level="h4" fontWeight="bold" sx={{ mb: 2, color:'rgb(255,255,255)' }}>
        H4CKTOOLS'a kayıt ol
      </Typography>
      <Stack spacing={2} sx={{ width: '100%', maxWidth: 400 }}>
        <Input
          type="text"
          placeholder="Kullanıcı adı"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          variant="soft"
          label="Username"
        />
        <Input
          type="email"
          placeholder="E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          variant="soft"
          label="Email"
        />
        <Input
          type="password"
          placeholder="Parola"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          variant="soft"
          label="Password"
        />
        <Input
          type="password"
          placeholder="Parola doğrula"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          variant="soft"
          label="Confirm Password"
        />
        <Button onClick={handleRegistration} size="lg" sx={{backgroundColor:'rgb(255,0,71)',
                                                            '&:hover':{backgroundColor:'rgb(120,120,120)'}
        }}>
          Kayıt ol
        </Button>
      </Stack>
      <ToastContainer
        position="top-center"
        autoClose={500}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </Box>
  );
}
