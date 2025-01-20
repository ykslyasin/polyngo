import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Input, Button, Typography, Box, Grid } from '@mui/joy';
import UserService from '../services/userService';
import { GridColumn } from 'semantic-ui-react';

export default function SignInPage({
  userID,
  setUserPoints,
  setIsAuthenticated,
  kullaniciAdi,
  setKullaniciAdi,
  sifre,
  setSifre,
  setUserID,
}) {
  const navigate = useNavigate();
  const userService = new UserService();

  const handleSubmit = async () => {
    try {
      const response = await userService.loginAuth(kullaniciAdi, sifre);

      if (response.data.success) {
        setIsAuthenticated(true);
        setUserID(response.data.data.id);
        navigate('/');

        // Fetch user points after successful authentication
        const response1 = await userService.getUserByID(response.data.data.id);
        const upgradedPoints = response1.data?.userPoints;
        console.log('upgradedPoints: ' + upgradedPoints);
        setUserPoints(upgradedPoints);
      } else {
        alert('Username or password is wrong!');
        console.error('Username or password is wrong');
      }
    } catch (error) {
      console.error('Error:', error.message);
    }
  };

  useEffect(() => {
    setKullaniciAdi('');
    setSifre('');
  }, []);

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
        Hesabınızla oturum açın
      </Typography>
      <Box
        component="form"
        sx={{
          width: '100%',
          maxWidth: 400,
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
        }}
      >
        <Input
          type="text"
          placeholder="Kullanıcı adı"
          value={kullaniciAdi}
          onChange={(e) => setKullaniciAdi(e.target.value)}
          variant="soft"
          color="primary"
        />
        <Input
          type="password"
          placeholder="Parola"
          value={sifre}
          onChange={(e) => setSifre(e.target.value)}
          variant="soft"
          color="primary"
        />
        <Button onClick={handleSubmit} color="primary" size="lg" sx={{backgroundColor:'rgb(255,0,71)',
                                                                      '&:hover':{backgroundColor:'rgb(120,120,120)'}
        }}>
          Giriş yap
        </Button>
        <Typography level="body2" sx={{ textAlign: 'center', mt: 1 }}>
          Hesabınız yok mu?{' '}
          <Link to="/sign-up" style={{ textDecoration: 'none', color: 'rgb(255,0,71)' }}>
            Kayıt ol
          </Link>
        </Typography>
      </Box>
    </Box>
  );
}
