import React from 'react'
import { Link } from 'react-router-dom'
import { Grid, Typography, Button } from '@mui/joy';
import Box from '@mui/material/Box'
import '../App.css';
import Stack from '@mui/joy/Stack';

export default function NetworkSniffing() {
  return (
    <div>

<Grid container spacing={2} justifyContent="center" className="home-grid-container">

  <Grid item xs={8} md={8} className="mt">
    <Typography variant="h4" className="mb-0" sx={{ fontSize:'55px', fontWeight: 'bold', color: 'rgb(255,0,71)' }}>
    Network Sniffing
    </Typography>
    <Typography variant="body1" sx={{ fontSize: '18px', color: '#fff', lineHeight: 1.6, color: 'rgb(210,210,210)' }}>
    Network Sniffing, MITRE ATT&CK framework'ünde Credential Access (Kimlik Bilgisi Erişimi) ve Discovery (Keşif) taktikleri altında yer alan bir tekniktir. Bu teknik, bir ağ üzerinden geçen veri paketlerini ele geçirerek bilgi toplamayı amaçlar. Saldırganlar, bu yöntemi kullanarak ağdaki cihazlar arasında iletilen hassas verileri, kimlik bilgilerini ve diğer kritik bilgileri elde edebilirler.


    </Typography>

    <Typography variant="body1" sx={{ fontSize: '25px', fontWeight:'bold', color: '#fff', lineHeight: 1.6, color: 'rgb(255,0,71)', marginTop:'2em', marginLeft:'16em' }}>

    Temel Özellikler


    </Typography>


    <Grid container spacing={2} style={{display: 'flex', flexWrap: 'nowrap', marginTop:'1em'}} >

        <Grid  item xs={4} md={6} className="mt">

        <Typography variant="solid" sx={{ fontSize: '18px',backgroundColor:'rgb(255,0,71)', lineHeight: 1.6, color: 'rgb(50,50,50)', fontWeight:'bold'}}>

        Şifrelenmiş Trafiği Hedefleme

</Typography>

<Typography variant="body1" sx={{ fontSize: '15px', color: '#fff', lineHeight: 1.6, color: 'rgb(210,210,210)' }}>

Şifrelenmemiş protokoller (HTTP, Telnet, FTP gibi) üzerinden geçen veriler, sniffing tekniklerine karşı daha savunmasızdır.Örneğin: Şifrelenmemiş bir HTTP oturumundaki oturum çerezleri (session cookies).


</Typography>

        </Grid>

        <Grid  item xs={4} md={6} className="mt">

        <Typography variant="body1" sx={{ fontSize: '18px', color: '#fff', lineHeight: 1.6, color: 'rgb(50,50,50)',backgroundColor:'rgb(255,0,71)', fontWeight:'bold', marginRight:'0em' }}>

        Veri Paketlerini Ele Geçirme

</Typography>

<Typography variant="body1" sx={{ fontSize: '15px', color: '#fff', lineHeight: 1.6, color: 'rgb(210,210,210)' }}>

Ağdaki tüm cihazlar arasındaki iletişim, veri paketleri şeklinde gerçekleşir. Sniffing, bu paketlerin kopyalanmasını ve analiz edilmesini sağlar.Örneğin: Bir e-posta iletisi, şifreleme yapılmamışsa ağ dinleme sırasında kolayca ele geçirilebilir.

</Typography>

        </Grid>

        <Grid  item xs={4} md={6} className="mt">

<Typography variant="body1" sx={{ fontSize: '18px', color: '#fff', lineHeight: 1.6, color: 'rgb(50,50,50)',backgroundColor:'rgb(255,0,71)', fontWeight:'bold', marginRight:'0em' }}>

Aktif ve Pasif Dinleme

</Typography>

<Typography variant="body1" sx={{ fontSize: '15px', color: '#fff', lineHeight: 1.6, color: 'rgb(210,210,210)' }}>

Pasif Dinleme, ağdaki veri paketlerini herhangi bir müdahalede bulunmadan yakalar. Hedef sistem tarafından tespit edilmesi zordur.Aktif Dinleme, ağ trafiğini manipüle eder veya yönlendirir. Örneğin, Man-in-the-Middle (MITM) saldırılarında kullanılır.


</Typography>

</Grid>


</Grid>

<Typography variant="body1" sx={{ fontSize: '25px', fontWeight:'bold', color: '#fff', lineHeight: 1.6, color: 'rgb(255,0,71)', marginTop:'2em', marginLeft:'16em' }}>

Teknik ve Taktikler

</Typography>


<Grid container spacing={2} style={{display: 'flex', flexWrap: 'nowrap', marginTop:'1em'}} >

    <Grid  item xs={4} md={6} className="mt">

    <Typography variant="solid" sx={{ fontSize: '18px',backgroundColor:'rgb(255,0,71)', lineHeight: 1.6, color: 'rgb(50,50,50)', fontWeight:'bold'}}>

    Hub ve Switch Modları

</Typography>

<Typography variant="body1" sx={{ fontSize: '15px', color: '#fff', lineHeight: 1.6, color: 'rgb(210,210,210)' }}>

Hub Modunda Dinleme, hub’lar, ağdaki tüm trafiği her cihaza gönderir. Bu, sniffing işlemini kolaylaştırır.Switch Modunda Dinleme, switch’ler, yalnızca hedef cihaza yönelik trafiği gönderir. Ancak ARP spoofing veya port mirroring gibi yöntemlerle trafik yönlendirilebilir.


</Typography>

    </Grid>

    <Grid  item xs={4} md={6} className="mt">

    <Typography variant="body1" sx={{ fontSize: '18px', color: '#fff', lineHeight: 1.6, color: 'rgb(50,50,50)',backgroundColor:'rgb(255,0,71)', fontWeight:'bold', marginRight:'0em' }}>

    Arp Spoofing

</Typography>

<Typography variant="body1" sx={{ fontSize: '15px', color: '#fff', lineHeight: 1.6, color: 'rgb(210,210,210)' }}>

Ağdaki cihazları, saldırganın cihazını bir ağ geçidi (gateway) gibi görmeye zorlar. Bu, cihazların saldırgana veri göndermesini sağlar.Örneğin: Bir kullanıcının DNS taleplerinin yanlış bir adrese yönlendirilmesi.


</Typography>

    </Grid>

    <Grid  item xs={4} md={6} className="mt">

<Typography variant="body1" sx={{ fontSize: '18px', color: '#fff', lineHeight: 1.6, color: 'rgb(50,50,50)',backgroundColor:'rgb(255,0,71)', fontWeight:'bold', marginRight:'0em' }}>

Oturum Çalma

</Typography>

<Typography variant="body1" sx={{ fontSize: '15px', color: '#fff', lineHeight: 1.6, color: 'rgb(210,210,210)' }}>

Kullanıcı oturum bilgileri (örneğin, çerezler) ele geçirilerek yetkisiz erişim sağlanır.Örneğin: Bir kullanıcı giriş yaptıktan sonra, saldırgan aynı oturumu kullanarak sisteme erişir.


</Typography>

</Grid>




</Grid>

<Typography variant="body1" sx={{ fontSize: '25px', fontWeight:'bold', color: '#fff', lineHeight: 1.6, color: 'rgb(255,0,71)', marginTop:'2em', marginLeft:'14em' }}>

Güvenlik Önlemleri ve Tespit

</Typography>


<Grid container spacing={2} style={{display: 'flex', flexWrap: 'nowrap', marginTop:'1em'}} >

    <Grid  item xs={4} md={6} className="mt">

    <Typography variant="solid" sx={{ fontSize: '18px',backgroundColor:'rgb(255,0,71)', lineHeight: 1.6, color: 'rgb(50,50,50)', fontWeight:'bold'}}>

Şifreleme Kullanımı

</Typography>

<Typography variant="body1" sx={{ fontSize: '15px', color: '#fff', lineHeight: 1.6, color: 'rgb(210,210,210)' }}>

Tüm ağ trafiği, mümkün olduğunca HTTPS, SSH veya VPN gibi şifreli protokoller üzerinden iletilmelidir.Örneğin: HTTP yerine HTTPS kullanılması.

</Typography>

    </Grid>

    <Grid  item xs={4} md={6} className="mt">

    <Typography variant="body1" sx={{ fontSize: '18px', color: '#fff', lineHeight: 1.6, color: 'rgb(50,50,50)',backgroundColor:'rgb(255,0,71)', fontWeight:'bold', marginRight:'0em' }}>

Segmentasyon ve VLAN

</Typography>

<Typography variant="body1" sx={{ fontSize: '15px', color: '#fff', lineHeight: 1.6, color: 'rgb(210,210,210)' }}>

Ağ trafiği, kritik cihazlar ve genel cihazlar arasında ayrıştırılarak sniffing’in etkisi minimize edilir.Örneğin: Kullanıcıların genel ağ trafiğiyle sunucu trafiği aynı segmentte olmamalıdır.


</Typography>

    </Grid>

    <Grid  item xs={4} md={6} className="mt">

<Typography variant="body1" sx={{ fontSize: '18px', color: '#fff', lineHeight: 1.6, color: 'rgb(50,50,50)',backgroundColor:'rgb(255,0,71)', fontWeight:'bold', marginRight:'0em' }}>

Ağ Trafiği İzleme

</Typography>

<Typography variant="body1" sx={{ fontSize: '15px', color: '#fff', lineHeight: 1.6, color: 'rgb(210,210,210)' }}>

Anormal trafik desenlerini veya tanınmayan cihazlardan gelen paket analizlerini tespit etmek için IDS/IPS sistemleri kullanılabilir.Örneğin: Sniffing sırasında meydana gelen ARP spoofing girişimlerinin algılanması.



</Typography>

</Grid>





</Grid>
    

    <Typography variant="body1" sx={{ fontSize: '18px', color: '#fff', lineHeight: 1.6, color: 'rgb(210,210,210)', marginTop:'2em' }}>

    Network sniffing, güçlü bir bilgi toplama ve kimlik bilgisi ele geçirme tekniğidir. Ancak, doğru güvenlik önlemleri alındığında sniffing girişimleri büyük ölçüde tespit edilebilir veya önlenebilir. Şifreli protokoller kullanmak ve ağ güvenliği politikalarını uygulamak, bu tür saldırılara karşı en etkili savunma yöntemlerindendir.


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
        ARPSPOOF
      </Button>
    </Stack>

    </Grid>
    </Grid>
    

</Grid>



    </div>
  )
}
