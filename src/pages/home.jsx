import React from 'react'
import { Link } from 'react-router-dom'
import { Grid, Typography, Button } from '@mui/joy';
import Box from '@mui/material/Box'
import '../App.css';

export default function Home() {
  return (
    <div>

<Grid container spacing={-3} justifyContent="center" className="home-grid-container">
  <Grid item xs={12} md={6} className="mt-11">
    <img src=".\images\h4cktools3.png" alt="h4cktools Logo" width="90%" />
  </Grid>
  <Grid item xs={12} md={6} className="mt-2.5">
    <Typography variant="h4" className="mb-1" sx={{ fontSize:'55px', fontWeight: 'bold', color: 'rgb(255,0,71)' }}>
    Sızma Testi Araçları ve Siber Güvenlik
    </Typography>
    <Typography variant="body1" sx={{ fontSize: '18px', color: '#fff', lineHeight: 1.6, color: 'rgb(210,210,210)' }}>
    h4cktools, siber güvenlik alanında kullanılan başlıca araçları ve teknikleri kapsamlı bir şekilde inceleyerek, kullanıcıların bu araçları etkili ve verimli bir biçimde öğrenmelerini sağlar.


    </Typography>

    <Typography variant="body1" sx={{ fontSize: '18px', color: '#fff', lineHeight: 1.6, color: 'rgb(210,210,210)' }}>

      Platformumuz, siber güvenlik profesyonellerine, öğrencilerine ve meraklılarına, yalnızca araçlar hakkında bilgi edinmekle kalmayıp, aynı zamanda bu araçları çeşitli sızma testi senaryolarında uygulama imkanı da sunar. Interaktif özellikler sayesinde kullanıcılar, terminal üzerinden doğrudan kod çalıştırarak, gerçek dünya ortamlarında karşılaşabilecekleri durumlara yönelik uygulamalı deneyim kazanabilirler.

    </Typography>
    
  </Grid>
</Grid>



    </div>
  )
}
