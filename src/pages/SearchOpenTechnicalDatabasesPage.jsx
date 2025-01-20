import React from 'react'
import { Link } from 'react-router-dom'
import { Grid, Typography, Button } from '@mui/joy';
import Box from '@mui/material/Box'
import '../App.css';
import Stack from '@mui/joy/Stack';

export default function SearchOpenTechnicalDatabases() {
  return (
    <div>

<Grid container spacing={2} justifyContent="center" className="home-grid-container">

  <Grid item xs={8} md={8} className="mt">
    <Typography variant="h4" className="mb-0" sx={{ fontSize:'55px', fontWeight: 'bold', color: 'rgb(255,0,71)' }}>
    Search Open Technical Databases
    </Typography>
    <Typography variant="body1" sx={{ fontSize: '18px', color: '#fff', lineHeight: 1.6, color: 'rgb(210,210,210)' }}>
    Search Open Technical Databases (OTD), MITRE ATT&CK framework'ünde Reconnaissance (Keşif) taktiği altında yer alan bir tekniktir. Bu teknik, hedef sistem veya organizasyonla ilgili bilgi toplamak için kamuya açık teknik veritabanlarının araştırılmasını içerir. Bu tür veritabanları, genellikle teknik detaylar, konfigürasyonlar, IP adresleri, ağ altyapısı bilgileri ve güvenlik açıklarına dair veriler sunar.


    </Typography>

    <Typography variant="body1" sx={{ fontSize: '25px', fontWeight:'bold', color: '#fff', lineHeight: 1.6, color: 'rgb(255,0,71)', marginTop:'2em', marginLeft:'16em' }}>

    Temel Özellikler


    </Typography>


    <Grid container spacing={2} style={{display: 'flex', flexWrap: 'nowrap', marginTop:'1em'}} >

        <Grid  item xs={4} md={6} className="mt">

        <Typography variant="solid" sx={{ fontSize: '18px',backgroundColor:'rgb(255,0,71)', lineHeight: 1.6, color: 'rgb(50,50,50)', fontWeight:'bold'}}>

        Teknik Bilgi Toplama

</Typography>

<Typography variant="body1" sx={{ fontSize: '15px', color: '#fff', lineHeight: 1.6, color: 'rgb(210,210,210)' }}>

Açık teknik veritabanları, belirli bir organizasyonun veya sistemin altyapısına dair bilgiler içerir.Örneğin: Hedefin kullandığı IP blokları, alan adı bilgileri veya kullanılan teknolojiler.


</Typography>

        </Grid>

        <Grid  item xs={4} md={6} className="mt">

        <Typography variant="body1" sx={{ fontSize: '18px', color: '#fff', lineHeight: 1.6, color: 'rgb(50,50,50)',backgroundColor:'rgb(255,0,71)', fontWeight:'bold', marginRight:'0em' }}>

        Veritabanı Kullanımı

</Typography>

<Typography variant="body1" sx={{ fontSize: '15px', color: '#fff', lineHeight: 1.6, color: 'rgb(210,210,210)' }}>

Yayınlanmış güvenlik açıklarını içeren veritabanları, saldırganlara hedef sistemlerdeki zayıflıkları belirleme konusunda yardımcı olur.Örneğin: CVE (Common Vulnerabilities and Exposures) veya NVD (National Vulnerability Database).

</Typography>

        </Grid>

        <Grid  item xs={4} md={6} className="mt">

<Typography variant="body1" sx={{ fontSize: '18px', color: '#fff', lineHeight: 1.6, color: 'rgb(50,50,50)',backgroundColor:'rgb(255,0,71)', fontWeight:'bold', marginRight:'0em' }}>

Yaygın Kaynaklar

</Typography>

<Typography variant="body1" sx={{ fontSize: '15px', color: '#fff', lineHeight: 1.6, color: 'rgb(210,210,210)' }}>

Açık teknik veritabanları arasında WHOIS kayıtları, Shodan gibi arama motorları ve yazılım belgeleri yer alır.

</Typography>

</Grid>


</Grid>

<Typography variant="body1" sx={{ fontSize: '25px', fontWeight:'bold', color: '#fff', lineHeight: 1.6, color: 'rgb(255,0,71)', marginTop:'2em', marginLeft:'16em' }}>

Teknik ve Taktikler

</Typography>


<Grid container spacing={2} style={{display: 'flex', flexWrap: 'nowrap', marginTop:'1em'}} >

    <Grid  item xs={4} md={6} className="mt">

    <Typography variant="solid" sx={{ fontSize: '18px',backgroundColor:'rgb(255,0,71)', lineHeight: 1.6, color: 'rgb(50,50,50)', fontWeight:'bold'}}>

    WHOIS ve Alan Adı Araştırması

</Typography>

<Typography variant="body1" sx={{ fontSize: '15px', color: '#fff', lineHeight: 1.6, color: 'rgb(210,210,210)' }}>

WHOIS sorguları, bir alan adının sahibine, kayıt tarihine, DNS sunucularına ve IP adreslerine dair bilgi sağlar.Örneğin: Hedef organizasyonun DNS sunucularını tespit etmek için kullanılabilir.


</Typography>

    </Grid>

    <Grid  item xs={4} md={6} className="mt">

    <Typography variant="body1" sx={{ fontSize: '18px', color: '#fff', lineHeight: 1.6, color: 'rgb(50,50,50)',backgroundColor:'rgb(255,0,71)', fontWeight:'bold', marginRight:'0em' }}>

    Shodan ve Censys Aramaları

</Typography>

<Typography variant="body1" sx={{ fontSize: '15px', color: '#fff', lineHeight: 1.6, color: 'rgb(210,210,210)' }}>

Hedef sistemin IP adresleri, açık portlar, SSL sertifikaları ve çalıştırılan hizmetler gibi bilgileri elde etmek için kullanılır.Örneğin: Hedefin bir e-posta sunucusunun açık olup olmadığı kontrol edilebilir.


</Typography>

    </Grid>

    <Grid  item xs={4} md={6} className="mt">

<Typography variant="body1" sx={{ fontSize: '18px', color: '#fff', lineHeight: 1.6, color: 'rgb(50,50,50)',backgroundColor:'rgb(255,0,71)', fontWeight:'bold', marginRight:'0em' }}>

Ağ ve Donanım Bilgileri Kontrolü

</Typography>

<Typography variant="body1" sx={{ fontSize: '15px', color: '#fff', lineHeight: 1.6, color: 'rgb(210,210,210)' }}>

Hedef organizasyonun ağ topolojisi ve donanımına dair bilgiler teknik veritabanlarından toplanabilir.Örneğin: Kullanılan ağ anahtarlarının ve yönlendiricilerin marka ve modelleri.


</Typography>

</Grid>




</Grid>

<Typography variant="body1" sx={{ fontSize: '25px', fontWeight:'bold', color: '#fff', lineHeight: 1.6, color: 'rgb(255,0,71)', marginTop:'2em', marginLeft:'14em' }}>

Güvenlik Önlemleri ve Tespit

</Typography>


<Grid container spacing={2} style={{display: 'flex', flexWrap: 'nowrap', marginTop:'1em'}} >

    <Grid  item xs={6} md={6} className="mt">

    <Typography variant="solid" sx={{ fontSize: '18px',backgroundColor:'rgb(255,0,71)', lineHeight: 1.6, color: 'rgb(50,50,50)', fontWeight:'bold'}}>

WHOIS ve Ağ Bilgileri Gizlenmesi

</Typography>

<Typography variant="body1" sx={{ fontSize: '15px', color: '#fff', lineHeight: 1.6, color: 'rgb(210,210,210)' }}>

Alan adları kayıt edilirken WHOIS gizlilik özellikleri kullanılarak organizasyon bilgileri gizlenebilir. Bu, saldırganların erişebileceği bilgileri sınırlar. Hedef organizasyon, IP adreslerini maskeler veya proxy ağları kullanır. Bu, açık teknik veritabanlarında doğrudan tespit edilmesini zorlaştırır.

</Typography>

    </Grid>

    <Grid  item xs={6} md={6} className="mt">

    <Typography variant="body1" sx={{ fontSize: '18px', color: '#fff', lineHeight: 1.6, color: 'rgb(50,50,50)',backgroundColor:'rgb(255,0,71)', fontWeight:'bold', marginRight:'0em' }}>

Exploit Database ve CVE İzleme

</Typography>

<Typography variant="body1" sx={{ fontSize: '15px', color: '#fff', lineHeight: 1.6, color: 'rgb(210,210,210)' }}>

Güvenlik ekipleri, kendi sistemlerine dair açıkların Exploit-DB veya CVE gibi veritabanlarında listelenip listelenmediğini düzenli olarak kontrol etmelidir.

</Typography>

    </Grid>





</Grid>
    

    <Typography variant="body1" sx={{ fontSize: '18px', color: '#fff', lineHeight: 1.6, color: 'rgb(210,210,210)', marginTop:'2em' }}>

    Search Open Technical Databases tekniği, hedef sistemin altyapısı ve potansiyel zayıflıkları hakkında değerli bilgiler sağlayabilir. Ancak, bu tür bilgilerin kamuya açık olması, organizasyonların bu verilerin gizliliğini koruma sorumluluğunu artırır. Düzenli güvenlik değerlendirmeleri, açık veritabanlarındaki bilgilerin organizasyon aleyhine kullanılmasını önlemenin önemli bir yoludur.


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
        SHERLOCK
      </Button>
    </Stack>

    </Grid>
    </Grid>
    

</Grid>



    </div>
  )
}
