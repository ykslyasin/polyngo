import React from 'react'
import { Link } from 'react-router-dom'
import { Grid, Typography, Button } from '@mui/joy';
import Box from '@mui/material/Box'
import '../App.css';
import Stack from '@mui/joy/Stack';

export default function ActiveScanning() {
  return (
    <div>

<Grid container spacing={2} justifyContent="center" className="home-grid-container">

  <Grid item xs={8} md={8} className="mt">
    <Typography variant="h4" className="mb-0" sx={{ fontSize:'55px', fontWeight: 'bold', color: 'rgb(255,0,71)' }}>
    Active Scanning
    </Typography>
    <Typography variant="body1" sx={{ fontSize: '18px', color: '#fff', lineHeight: 1.6, color: 'rgb(210,210,210)' }}>
    Active scanning, MITRE ATT&CK framework'ünde Reconnaissance (Keşif) taktiği altında yer alan bir tekniktir. Bu teknik, hedef ağ veya sistem hakkında bilgi toplamak için daha doğrudan ve etkileşimli yöntemlerin kullanıldığı bir keşif aşamasıdır. Active scanning, bir hedefin yanıtlarını ölçmek için aktif olarak ağ trafiği gönderilmesiyle yapılır ve genellikle ağ tarayıcıları ve sızma testi araçları ile gerçekleştirilir.

    </Typography>

    <Typography variant="body1" sx={{ fontSize: '25px', fontWeight:'bold', color: '#fff', lineHeight: 1.6, color: 'rgb(255,0,71)', marginTop:'2em', marginLeft:'16em' }}>

    Temel Özellikler


    </Typography>


    <Grid container spacing={2} style={{display: 'flex', flexWrap: 'nowrap', marginTop:'1em'}} >

        <Grid  item xs={6} md={6} className="mt">

        <Typography variant="solid" sx={{ fontSize: '18px',backgroundColor:'rgb(255,0,71)', lineHeight: 1.6, color: 'rgb(50,50,50)', fontWeight:'bold'}}>

        Ağ ve Sistemi Tarama

</Typography>

<Typography variant="body1" sx={{ fontSize: '15px', color: '#fff', lineHeight: 1.6, color: 'rgb(210,210,210)' }}>

Active scanning, ağdaki açık portlar, hizmetler, işletim sistemi türleri ve güvenlik açıkları hakkında bilgi toplamak için aktif ağ trafiği gönderir. Bu, hedef sistemin aktif olarak yanıt vermesine neden olur.

</Typography>

        </Grid>

        <Grid  item xs={6} md={6} className="mt">

        <Typography variant="body1" sx={{ fontSize: '18px', color: '#fff', lineHeight: 1.6, color: 'rgb(50,50,50)',backgroundColor:'rgb(255,0,71)', fontWeight:'bold', marginRight:'0em' }}>

        Tespit Edilebilir

</Typography>

<Typography variant="body1" sx={{ fontSize: '15px', color: '#fff', lineHeight: 1.6, color: 'rgb(210,210,210)' }}>

Active scanning'in önemli bir özelliği, hedef sistemin, saldırganın tarama faaliyetlerini tespit edebilmesidir. Bu nedenle, güvenlik duvarları veya IDS/IPS (Intrusion Detection/Prevention Systems) gibi savunma önlemleri tarafından tespit edilebilir.
</Typography>

        </Grid>


</Grid>

<Typography variant="body1" sx={{ fontSize: '25px', fontWeight:'bold', color: '#fff', lineHeight: 1.6, color: 'rgb(255,0,71)', marginTop:'2em', marginLeft:'16em' }}>

Teknik ve Taktikler

</Typography>


<Grid container spacing={2} style={{display: 'flex', flexWrap: 'nowrap', marginTop:'1em'}} >

    <Grid  item xs={4} md={6} className="mt">

    <Typography variant="solid" sx={{ fontSize: '18px',backgroundColor:'rgb(255,0,71)', lineHeight: 1.6, color: 'rgb(50,50,50)', fontWeight:'bold'}}>

    Port Tarama

</Typography>

<Typography variant="body1" sx={{ fontSize: '15px', color: '#fff', lineHeight: 1.6, color: 'rgb(210,210,210)' }}>

Hedef sistemdeki açık portları tarar. Bu, belirli bir hedefin hangi hizmetlere ve uygulamalara açık olduğunu belirlemek için kullanılır.

</Typography>

    </Grid>

    <Grid  item xs={4} md={6} className="mt">

    <Typography variant="body1" sx={{ fontSize: '18px', color: '#fff', lineHeight: 1.6, color: 'rgb(50,50,50)',backgroundColor:'rgb(255,0,71)', fontWeight:'bold', marginRight:'0em' }}>

    Versiyon Tespiti

</Typography>

<Typography variant="body1" sx={{ fontSize: '15px', color: '#fff', lineHeight: 1.6, color: 'rgb(210,210,210)' }}>

Hedef sistemdeki hizmetlerin hangi sürümde olduğunu tespit etmeye çalışır. Bu, hizmetlerin potansiyel zayıflıklarını belirlemek için önemlidir.

</Typography>

    </Grid>

    <Grid  item xs={4} md={6} className="mt">

<Typography variant="body1" sx={{ fontSize: '18px', color: '#fff', lineHeight: 1.6, color: 'rgb(50,50,50)',backgroundColor:'rgb(255,0,71)', fontWeight:'bold', marginRight:'0em' }}>

OS Tespiti

</Typography>

<Typography variant="body1" sx={{ fontSize: '15px', color: '#fff', lineHeight: 1.6, color: 'rgb(210,210,210)' }}>

Hedef sistemin işletim sistemi hakkında bilgi toplamak için kullanılır. Bu, sistemin türü, sürümü ve yapılandırmasına dair ipuçları verir.

</Typography>

</Grid>




</Grid>

<Typography variant="body1" sx={{ fontSize: '25px', fontWeight:'bold', color: '#fff', lineHeight: 1.6, color: 'rgb(255,0,71)', marginTop:'2em', marginLeft:'14em' }}>

Güvenlik Önlemleri ve Tespit

</Typography>


<Grid container spacing={2} style={{display: 'flex', flexWrap: 'nowrap', marginTop:'1em'}} >

    <Grid  item xs={6} md={6} className="mt">

    <Typography variant="solid" sx={{ fontSize: '18px',backgroundColor:'rgb(255,0,71)', lineHeight: 1.6, color: 'rgb(50,50,50)', fontWeight:'bold'}}>

IDS/IPS Tespitleri

</Typography>

<Typography variant="body1" sx={{ fontSize: '15px', color: '#fff', lineHeight: 1.6, color: 'rgb(210,210,210)' }}>

Active scanning, genellikle güvenlik sistemleri tarafından tespit edilir. Özellikle yoğun trafik ve alışılmadık port taramaları, ağ güvenlik cihazları tarafından tespit edilebilir.
</Typography>

    </Grid>

    <Grid  item xs={6} md={6} className="mt">

    <Typography variant="body1" sx={{ fontSize: '18px', color: '#fff', lineHeight: 1.6, color: 'rgb(50,50,50)',backgroundColor:'rgb(255,0,71)', fontWeight:'bold', marginRight:'0em' }}>

Firewall'lar ve Erişim Kontrol Listeleri

</Typography>

<Typography variant="body1" sx={{ fontSize: '15px', color: '#fff', lineHeight: 1.6, color: 'rgb(210,210,210)' }}>

Hedef sistemdeki güvenlik duvarları ve ACL'ler, active scanning'i engellemeye çalışabilir. Genellikle, belirli IP adreslerinden veya belirli portlardan gelen trafik engellenebilir.

</Typography>

    </Grid>





</Grid>
    

    <Typography variant="body1" sx={{ fontSize: '18px', color: '#fff', lineHeight: 1.6, color: 'rgb(210,210,210)', marginTop:'2em' }}>

    Active scanning, keşif aşamasında son derece etkili bir teknik olmasına rağmen, yüksek görünürlüğü nedeniyle dikkatle yapılması gerekir. Hedefin savunma mekanizmaları tarafından tespit edilmesi riski bulunur, ancak doğru kullanıldığında sızma testleri ve siber güvenlik analizi için güçlü bir araçtır.

</Typography>
    
  </Grid>
<Grid sx={{position:'sticky'}}>
  <Grid item xs={4} md={4} className="mt" sx={{position:'sticky', top: 0}}>

  <Typography variant="h4" className="mb-0" sx={{ fontSize:'55px', fontWeight: 'bold', color: 'rgb(255,0,71)', marginLeft:'0.6em' }}>
    Araçlar
    </Typography>

    <Stack direction="column" spacing={2} marginTop={1} marginLeft={5.5} >
      <Button
        component={Link}
        to="/sign-up"
        variant="solid"
        sx={{backgroundColor:'rgb(255,0,71)',
             '&:hover': {backgroundColor:'rgb(120,120,120)', color:'rgb(255,255,255)'},
             fontFamily:'Ubunto Mono, monospace',
             
        }}
      >
        AMASS
      </Button>
    </Stack>

    </Grid>
    </Grid>
    

</Grid>



    </div>
  )
}
