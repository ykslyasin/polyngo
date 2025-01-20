import React from 'react'
import { Link } from 'react-router-dom'
import { Grid, Typography, Button } from '@mui/joy';
import Box from '@mui/material/Box'
import '../App.css';
import Stack from '@mui/joy/Stack';

export default function FileAndDirectoryDiscovery() {
  return (
    <div>

<Grid container spacing={2} justifyContent="center" className="home-grid-container">

  <Grid item xs={8} md={8} className="mt">
    <Typography variant="h4" className="mb-0" sx={{ fontSize:'55px', fontWeight: 'bold', color: 'rgb(255,0,71)' }}>
    File and Directory Discovery
    </Typography>
    <Typography variant="body1" sx={{ fontSize: '18px', color: '#fff', lineHeight: 1.6, color: 'rgb(210,210,210)' }}>
    File and Directory Discovery, MITRE ATT&CK framework'ünde Discovery (Keşif) taktiği altında yer alan bir tekniktir. Bu teknik, hedef sistemde yer alan dosya ve dizinlerin yerlerini tespit etmek, yapısını anlamak ve içerik hakkında bilgi edinmek amacıyla kullanılır. Saldırganlar, bu teknikle kritik dosyalara, yapılandırma bilgilerine veya hassas verilere ulaşarak hedef sistemde daha fazla yetki kazanmayı amaçlar.


    </Typography>

    <Typography variant="body1" sx={{ fontSize: '25px', fontWeight:'bold', color: '#fff', lineHeight: 1.6, color: 'rgb(255,0,71)', marginTop:'2em', marginLeft:'16em' }}>

    Temel Özellikler


    </Typography>


    <Grid container spacing={2} style={{display: 'flex', flexWrap: 'nowrap', marginTop:'1em'}} >

        <Grid  item xs={4} md={6} className="mt">

        <Typography variant="solid" sx={{ fontSize: '18px',backgroundColor:'rgb(255,0,71)', lineHeight: 1.6, color: 'rgb(50,50,50)', fontWeight:'bold'}}>

        Hedef Sistem Yapısını Anlama

</Typography>

<Typography variant="body1" sx={{ fontSize: '15px', color: '#fff', lineHeight: 1.6, color: 'rgb(210,210,210)' }}>

Saldırganlar, dosya ve dizin keşfi yaparak hedef sistemin dosya sistemine dair bilgi edinir. Bu, hangi dizinlerin kritik olduğu ve hangi dosyaların değerli bilgiler içerdiği hakkında ipuçları sunar. Örneğin /etc/passwd veya /etc/shadow dosyaları, kullanıcı bilgilerini içerir ve Linux sistemlerinde sıkça hedef alınır.
</Typography>

        </Grid>

        <Grid  item xs={4} md={6} className="mt">

        <Typography variant="body1" sx={{ fontSize: '18px', color: '#fff', lineHeight: 1.6, color: 'rgb(50,50,50)',backgroundColor:'rgb(255,0,71)', fontWeight:'bold', marginRight:'0em' }}>

        Sistem Loglarının Tespiti

</Typography>

<Typography variant="body1" sx={{ fontSize: '15px', color: '#fff', lineHeight: 1.6, color: 'rgb(210,210,210)' }}>

Saldırganlar, güvenlik olaylarını analiz etmek veya izlerini temizlemek için sistem loglarını içeren dosyaları ve dizinleri keşfetmeye çalışır.

</Typography>

        </Grid>

        <Grid  item xs={4} md={6} className="mt">

<Typography variant="body1" sx={{ fontSize: '18px', color: '#fff', lineHeight: 1.6, color: 'rgb(50,50,50)',backgroundColor:'rgb(255,0,71)', fontWeight:'bold', marginRight:'0em' }}>

Hassas Dosyaları Belirlemek

</Typography>

<Typography variant="body1" sx={{ fontSize: '15px', color: '#fff', lineHeight: 1.6, color: 'rgb(210,210,210)' }}>

Çok sayıda başarısız girişim nedeniyle Brute Force saldırıları genellikle IDS/IPS (Intrusion Detection/Prevention Systems) ve güvenlik duvarları tarafından tespit edilir.

</Typography>

</Grid>


</Grid>

<Typography variant="body1" sx={{ fontSize: '25px', fontWeight:'bold', color: '#fff', lineHeight: 1.6, color: 'rgb(255,0,71)', marginTop:'2em', marginLeft:'16em' }}>

Teknik ve Taktikler

</Typography>


<Grid container spacing={2} style={{display: 'flex', flexWrap: 'nowrap', marginTop:'1em'}} >

    <Grid  item xs={4} md={6} className="mt">

    <Typography variant="solid" sx={{ fontSize: '18px',backgroundColor:'rgb(255,0,71)', lineHeight: 1.6, color: 'rgb(50,50,50)', fontWeight:'bold'}}>

    Wordlist ile Dizin Taraması

</Typography>

<Typography variant="body1" sx={{ fontSize: '15px', color: '#fff', lineHeight: 1.6, color: 'rgb(210,210,210)' }}>

Hazır veya özel olarak oluşturulmuş kelime listeleri kullanılarak hedef sistemdeki dizinlerin veya dosyaların varlığı kontrol edilir.
</Typography>

    </Grid>

    <Grid  item xs={4} md={6} className="mt">

    <Typography variant="body1" sx={{ fontSize: '18px', color: '#fff', lineHeight: 1.6, color: 'rgb(50,50,50)',backgroundColor:'rgb(255,0,71)', fontWeight:'bold', marginRight:'0em' }}>

    Recursive Keşif

</Typography>

<Typography variant="body1" sx={{ fontSize: '15px', color: '#fff', lineHeight: 1.6, color: 'rgb(210,210,210)' }}>

Keşfedilen bir dizin içinde yer alan alt dizinler ve dosyalar da incelenir. Bu, derinlemesine bilgi toplama amacı taşır.Örneğin: /var/www/html/uploads/ dizinindeki tüm dosyalar teker teker analiz edilebilir.

</Typography>

    </Grid>

    <Grid  item xs={4} md={6} className="mt">

<Typography variant="body1" sx={{ fontSize: '18px', color: '#fff', lineHeight: 1.6, color: 'rgb(50,50,50)',backgroundColor:'rgb(255,0,71)', fontWeight:'bold', marginRight:'0em' }}>

Gizli Dosyaların Tespiti
</Typography>

<Typography variant="body1" sx={{ fontSize: '15px', color: '#fff', lineHeight: 1.6, color: 'rgb(210,210,210)' }}>

.git, .env, veya .bak gibi uzantılara sahip dosyalar bulunmaya çalışılır. Bu dosyalar genellikle geliştiriciler tarafından unutulan ve hassas bilgiler içeren dosyalardır.

</Typography>

</Grid>




</Grid>

<Typography variant="body1" sx={{ fontSize: '25px', fontWeight:'bold', color: '#fff', lineHeight: 1.6, color: 'rgb(255,0,71)', marginTop:'2em', marginLeft:'14em' }}>

Güvenlik Önlemleri ve Tespit

</Typography>


<Grid container spacing={2} style={{display: 'flex', flexWrap: 'nowrap', marginTop:'1em'}} >

    <Grid  item xs={4} md={6} className="mt">

    <Typography variant="solid" sx={{ fontSize: '18px',backgroundColor:'rgb(255,0,71)', lineHeight: 1.6, color: 'rgb(50,50,50)', fontWeight:'bold'}}>

Dosya ve Dizinleri Sınırlama
</Typography>

<Typography variant="body1" sx={{ fontSize: '15px', color: '#fff', lineHeight: 1.6, color: 'rgb(210,210,210)' }}>

Sadece yetkili kullanıcıların erişebileceği şekilde dosya ve dizin izinlerinin yapılandırılması önemlidir.Örneğin, Linux'ta chmod ve chown komutlarıyla dosya izinleri ayarlanabilir.

</Typography>

    </Grid>

    <Grid  item xs={4} md={6} className="mt">

    <Typography variant="body1" sx={{ fontSize: '18px', color: '#fff', lineHeight: 1.6, color: 'rgb(50,50,50)',backgroundColor:'rgb(255,0,71)', fontWeight:'bold', marginRight:'0em' }}>

Sunucu Konfigürasyonu
</Typography>

<Typography variant="body1" sx={{ fontSize: '15px', color: '#fff', lineHeight: 1.6, color: 'rgb(210,210,210)' }}>

Web sunucuları, dizin listelemeyi kapatacak şekilde yapılandırılmalıdır. Aksi takdirde, bir saldırgan /uploads/ dizinine erişip içerik listesini görüntüleyebilir.

</Typography>

    </Grid>

    <Grid  item xs={4} md={6} className="mt">

<Typography variant="body1" sx={{ fontSize: '18px', color: '#fff', lineHeight: 1.6, color: 'rgb(50,50,50)',backgroundColor:'rgb(255,0,71)', fontWeight:'bold', marginRight:'0em' }}>

Anormal Trafik Algılama
</Typography>

<Typography variant="body1" sx={{ fontSize: '15px', color: '#fff', lineHeight: 1.6, color: 'rgb(210,210,210)' }}>

IDS/IPS sistemleri, saldırganların yaptığı kapsamlı dizin taramalarını anormal trafik olarak tespit edebilir.Örneğin, bir saldırgan sürekli 404 hata kodu döndüren sayfalara erişmeye çalışıyorsa, bu durum bir saldırının göstergesi olabilir.


</Typography>

</Grid>





</Grid>
    

    <Typography variant="body1" sx={{ fontSize: '18px', color: '#fff', lineHeight: 1.6, color: 'rgb(210,210,210)', marginTop:'2em' }}>

    File and Directory Discovery, hedef sistem hakkında kritik bilgiler toplamak için kullanılan temel keşif tekniklerinden biridir. Güvenlik önlemleri alınmadığında, saldırganlar bu teknikle önemli verilere ulaşabilir ve sistem üzerinde daha geniş bir kontrol sağlayabilir.


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
        DIRB
      </Button>
      <Button
        component={Link}
        to="/sign-in"
        variant="solid"
        //onClick={signIn}
        sx={{backgroundColor:'rgb(255,0,71)',
            '&:hover': {backgroundColor:'rgb(120,120,120)', color:'rgb(255,255,255)'},
            fontFamily:'Ubunto Mono, monospace',
            
       }}
      >
        GOBUSTER
      </Button>
    </Stack>

    </Grid>
    </Grid>
    

</Grid>



    </div>
  )
}
