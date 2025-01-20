import React from 'react'
import { Link } from 'react-router-dom'
import { Grid, Typography, Button } from '@mui/joy';
import Box from '@mui/material/Box'
import '../App.css';
import Stack from '@mui/joy/Stack';
import Terminal from '../Terminal.js'

export default function NetworkDenialOfService() {
  return (
    <div>

<Grid container spacing={2} justifyContent="center" className="home-grid-container">

  <Grid item xs={8} md={8} className="mt">
    <Typography variant="h4" className="mb-0" sx={{ fontSize:'55px', fontWeight: 'bold', color: 'rgb(255,0,71)' }}>
    Network Denial of Service
    </Typography>
    <Typography variant="body1" sx={{ fontSize: '18px', color: '#fff', lineHeight: 1.6, color: 'rgb(210,210,210)' }}>
    Network Denial of Service (DoS), MITRE ATT&CK framework'ünde Impact (Etkileme) taktiği altında yer alan bir tekniktir. Bu teknik, hedef ağ veya sistemdeki hizmetleri aksatmak veya tamamen durdurmak amacıyla kullanılır. Denial of Service (Hizmet Engelleme) saldırıları, genellikle ağ bant genişliğini tüketmek, sistem kaynaklarını aşırı yüklemek veya hedef sistemde kritik bir hizmeti çalışamaz hale getirmek için gerçekleştirilir.


    </Typography>

    <Typography variant="body1" sx={{ fontSize: '25px', fontWeight:'bold', color: '#fff', lineHeight: 1.6, color: 'rgb(255,0,71)', marginTop:'2em', marginLeft:'16em' }}>

    Temel Özellikler


    </Typography>


    <Grid container spacing={2} style={{display: 'flex', flexWrap: 'nowrap', marginTop:'1em'}} >

        <Grid  item xs={4} md={6} className="mt">

        <Typography variant="solid" sx={{ fontSize: '18px',backgroundColor:'rgb(255,0,71)', lineHeight: 1.6, color: 'rgb(50,50,50)', fontWeight:'bold'}}>

            Ağ Trafiğinin Engellenmesi

</Typography>

<Typography variant="body1" sx={{ fontSize: '15px', color: '#fff', lineHeight: 1.6, color: 'rgb(210,210,210)' }}>

Saldırganlar, hedef ağda çok fazla trafik oluşturarak hizmetlerin düzgün çalışmasını engeller. Bu trafik, hedef sistemin veya ağın kaynaklarını tüketerek hizmetin kesilmesine yol açar.Örneğin: TCP SYN paketleriyle yapılan bir saldırı, bağlantı kurulum aşamasında hedef sistemi tıkar.


</Typography>

        </Grid>

        <Grid  item xs={4} md={6} className="mt">

        <Typography variant="body1" sx={{ fontSize: '18px', color: '#fff', lineHeight: 1.6, color: 'rgb(50,50,50)',backgroundColor:'rgb(255,0,71)', fontWeight:'bold', marginRight:'0em' }}>

        Hedef Sistemde Aşırı Yük

</Typography>

<Typography variant="body1" sx={{ fontSize: '15px', color: '#fff', lineHeight: 1.6, color: 'rgb(210,210,210)' }}>

Saldırılar, hedef sistemin CPU, RAM, veya disk gibi kaynaklarını tükenme noktasına getirir. Bu, hizmetlerin durmasına veya performansın ciddi şekilde düşmesine neden olur.

</Typography>

        </Grid>

        <Grid  item xs={4} md={6} className="mt">

        <Typography variant="solid" sx={{ fontSize: '18px',backgroundColor:'rgb(255,0,71)', lineHeight: 1.6, color: 'rgb(50,50,50)', fontWeight:'bold'}}>

            Dağıtık Hizmet Engelleme(DDoS)

</Typography>

<Typography variant="body1" sx={{ fontSize: '15px', color: '#fff', lineHeight: 1.6, color: 'rgb(210,210,210)' }}>

Saldırı, tek bir kaynaktan değil, birçok farklı kaynaktan aynı anda gerçekleştirilir. Bu, saldırının tespit edilmesini ve engellenmesini zorlaştırır.Örneğin: Botnet'ler, dünya genelinde binlerce cihazın kontrol edilerek hedefe aynı anda saldırmasını sağlar.



</Typography>

        </Grid>
        


</Grid>

<Typography variant="body1" sx={{ fontSize: '25px', fontWeight:'bold', color: '#fff', lineHeight: 1.6, color: 'rgb(255,0,71)', marginTop:'2em', marginLeft:'16em' }}>

Teknik ve Taktikler

</Typography>


<Grid container spacing={2} style={{display: 'flex', flexWrap: 'nowrap', marginTop:'1em'}} >

    <Grid  item xs={4} md={6} className="mt">

    <Typography variant="solid" sx={{ fontSize: '18px',backgroundColor:'rgb(255,0,71)', lineHeight: 1.6, color: 'rgb(50,50,50)', fontWeight:'bold'}}>

    Flood Saldırıları

</Typography>

<Typography variant="body1" sx={{ fontSize: '15px', color: '#fff', lineHeight: 1.6, color: 'rgb(210,210,210)' }}>

Hedef sisteme büyük miktarda trafik göndererek ağın veya sistemin kaynaklarını tüketmeye çalışır.Örneğin: UDP Flood, Hedef sistemin kaynaklarını tüketmek için yüksek hacimli UDP paketleri gönderilir.ICMP (Ping) Flood, Aşırı miktarda ICMP paketi gönderilerek hedef sistemin ağı kullanılamaz hale getirilir.



</Typography>

    </Grid>

    <Grid  item xs={4} md={6} className="mt">

    <Typography variant="body1" sx={{ fontSize: '18px', color: '#fff', lineHeight: 1.6, color: 'rgb(50,50,50)',backgroundColor:'rgb(255,0,71)', fontWeight:'bold', marginRight:'0em' }}>

    Amplification Saldırıları

</Typography>

<Typography variant="body1" sx={{ fontSize: '15px', color: '#fff', lineHeight: 1.6, color: 'rgb(210,210,210)' }}>

Saldırgan, genellikle DNS veya NTP gibi hizmetleri kötüye kullanarak hedefe gönderilen trafiği katlanarak artırır.DNS Amplification: Küçük bir sorguya büyük bir yanıt döndüren DNS sunucuları, saldırganın trafik hacmini artırmak için kullanılır.


</Typography>

    </Grid>

    <Grid  item xs={4} md={6} className="mt">

<Typography variant="body1" sx={{ fontSize: '18px', color: '#fff', lineHeight: 1.6, color: 'rgb(50,50,50)',backgroundColor:'rgb(255,0,71)', fontWeight:'bold', marginRight:'0em' }}>

    Slow HTTP Saldırıları

</Typography>

<Typography variant="body1" sx={{ fontSize: '15px', color: '#fff', lineHeight: 1.6, color: 'rgb(210,210,210)' }}>

HTTP bağlantılarını uzun süre açık tutarak web sunucularını yavaşlatmayı hedefler.Örneğin: Slowloris aracı, bir web sunucusuna sürekli yavaş HTTP istekleri göndererek sunucunun yeni bağlantıları kabul etmesini engeller.


</Typography>

</Grid>




</Grid>

<Typography variant="body1" sx={{ fontSize: '25px', fontWeight:'bold', color: '#fff', lineHeight: 1.6, color: 'rgb(255,0,71)', marginTop:'2em', marginLeft:'14em' }}>

Güvenlik Önlemleri ve Tespit

</Typography>


<Grid container spacing={2} style={{display: 'flex', flexWrap: 'nowrap', marginTop:'1em'}} >

    <Grid  item xs={4} md={6} className="mt">

    <Typography variant="solid" sx={{ fontSize: '18px',backgroundColor:'rgb(255,0,71)', lineHeight: 1.6, color: 'rgb(50,50,50)', fontWeight:'bold'}}>

    Anormallik Tespiti

</Typography>

<Typography variant="body1" sx={{ fontSize: '15px', color: '#fff', lineHeight: 1.6, color: 'rgb(210,210,210)' }}>

Güvenlik cihazları, ağda anormal trafik akışını algılamak için yapılandırılabilir.NetFlow veya sFlow gibi protokollerle ağ trafiği sürekli izlenebilir.DDoS saldırılarında ani trafik artışlarını algılamak için IDS/IPS cihazları kullanılabilir.


</Typography>

    </Grid>

    <Grid  item xs={4} md={6} className="mt">

    <Typography variant="body1" sx={{ fontSize: '18px', color: '#fff', lineHeight: 1.6, color: 'rgb(50,50,50)',backgroundColor:'rgb(255,0,71)', fontWeight:'bold', marginRight:'0em' }}>

Hız Sınırlandırma

</Typography>

<Typography variant="body1" sx={{ fontSize: '15px', color: '#fff', lineHeight: 1.6, color: 'rgb(210,210,210)' }}>

Hedef sistem veya ağ üzerinde belirli bir süre içinde gelen trafik miktarı sınırlandırılır.Örneğin: Web sunucusunda belirli bir IP adresinden gelen isteklerin sayısını sınırlandırabilirsiniz.


</Typography>

    </Grid>

    <Grid  item xs={4} md={6} className="mt">

<Typography variant="body1" sx={{ fontSize: '18px', color: '#fff', lineHeight: 1.6, color: 'rgb(50,50,50)',backgroundColor:'rgb(255,0,71)', fontWeight:'bold', marginRight:'0em' }}>

Anti-DDos Servisleri
</Typography>

<Typography variant="body1" sx={{ fontSize: '15px', color: '#fff', lineHeight: 1.6, color: 'rgb(210,210,210)' }}>

Özel anti-DDoS çözümleri, saldırıları engellemek için kullanılır.Örneğin: Cloudflare veya Akamai gibi servis sağlayıcılar, gelen trafiği filtreleyerek saldırı trafiğini durdurabilir.



</Typography>

</Grid>





</Grid>
    

    <Typography variant="body1" sx={{ fontSize: '18px', color: '#fff', lineHeight: 1.6, color: 'rgb(210,210,210)', marginTop:'2em' }}>

    Network Denial of Service saldırıları, hedef sistem veya ağ üzerinde ciddi kesintilere yol açabilen güçlü bir etkili tekniktir. Bu tür saldırılara karşı koruma sağlamak, hem ağ altyapısının hem de kullanılan güvenlik çözümlerinin güçlü olmasını gerektirir. Güvenlik uzmanları, bu tür saldırıları simüle ederek savunma mekanizmalarını test edebilir ve geliştirilebilir.


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
        to="/aireplay"
        variant="solid"
        sx={{backgroundColor:'rgb(255,0,71)',
             '&:hover': {backgroundColor:'rgb(120,120,120)', color:'rgb(255,255,255)'},
             fontFamily:'Ubunto Mono, monospace',
             
        }}
      >
        AIREPLAY
      </Button>
    </Stack>

    </Grid>
    </Grid>
    

</Grid>

    </div>
  )
}
