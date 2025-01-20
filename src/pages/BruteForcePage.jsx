import React from 'react'
import { Link } from 'react-router-dom'
import { Grid, Typography, Button } from '@mui/joy';
import Box from '@mui/material/Box'
import '../App.css';
import Stack from '@mui/joy/Stack';

export default function BruteForce() {
  return (
    <div>

<Grid container spacing={2} justifyContent="center" className="home-grid-container">

  <Grid item xs={8} md={8} className="mt">
    <Typography variant="h4" className="mb-0" sx={{ fontSize:'55px', fontWeight: 'bold', color: 'rgb(255,0,71)' }}>
    Brute Force
    </Typography>
    <Typography variant="body1" sx={{ fontSize: '18px', color: '#fff', lineHeight: 1.6, color: 'rgb(210,210,210)' }}>
    Brute Force, MITRE ATT&CK framework'ünde Credential Access (Kimlik Bilgisi Erişimi) taktiği altında yer alan bir tekniktir. Bu saldırı türü, bir şifreyi çözmek veya belirli bir hedefe erişim sağlamak için mümkün olan tüm kombinasyonları sistematik olarak dener. Brute force, şifrenin karmaşıklığına ve kullanılan karakter kümesine bağlı olarak oldukça zaman alabilir. Ancak, zayıf şifreleme yöntemleri ve kısıtlamaların olmadığı durumlarda etkili olabilir.



    </Typography>

    <Typography variant="body1" sx={{ fontSize: '25px', fontWeight:'bold', color: '#fff', lineHeight: 1.6, color: 'rgb(255,0,71)', marginTop:'2em', marginLeft:'16em' }}>

    Temel Özellikler


    </Typography>


    <Grid container spacing={2} style={{display: 'flex', flexWrap: 'nowrap', marginTop:'1em'}} >

        <Grid  item xs={4} md={6} className="mt">

        <Typography variant="solid" sx={{ fontSize: '18px',backgroundColor:'rgb(255,0,71)', lineHeight: 1.6, color: 'rgb(50,50,50)', fontWeight:'bold'}}>

        Şifrelerin Denenmesi

</Typography>

<Typography variant="body1" sx={{ fontSize: '15px', color: '#fff', lineHeight: 1.6, color: 'rgb(210,210,210)' }}>

Brute force saldırısı, hedef bir sisteme şifre girmeye çalışan bir saldırganın, sistemin şifreleme algoritmasına veya parola politikasına karşı tüm olası şifreleri dener.Örneğin: Eğer bir şifre 6 haneliyse, saldırgan 1'den 9'a kadar olan tüm sayıları, harfleri ve sembolleri deneyerek doğru şifreyi bulmaya çalışır.

</Typography>

        </Grid>

        <Grid  item xs={4} md={6} className="mt">

        <Typography variant="body1" sx={{ fontSize: '18px', color: '#fff', lineHeight: 1.6, color: 'rgb(50,50,50)',backgroundColor:'rgb(255,0,71)', fontWeight:'bold', marginRight:'0em' }}>

        Zaman ve Kaynak Gereksinimi

</Typography>

<Typography variant="body1" sx={{ fontSize: '15px', color: '#fff', lineHeight: 1.6, color: 'rgb(210,210,210)' }}>

Brute force saldırıları, tüm olası kombinasyonları denediği için kaynak tüketimi yüksek olan saldırılardır. Bu tür bir saldırı, hedef sisteme aşırı yük bindirebilir.Örneğin: Bir parola yaklaşık 10.000 yıl sürebilir, eğer yalnızca küçük harfler kullanılıyorsa, ancak daha karmaşık bir parola sistemiyle bu süre milyonlarca yıl sürebilir.


</Typography>

        </Grid>

        <Grid  item xs={4} md={6} className="mt">

<Typography variant="body1" sx={{ fontSize: '18px', color: '#fff', lineHeight: 1.6, color: 'rgb(50,50,50)',backgroundColor:'rgb(255,0,71)', fontWeight:'bold', marginRight:'0em' }}>

Doğru Politikalara Bağımlılık

</Typography>

<Typography variant="body1" sx={{ fontSize: '15px', color: '#fff', lineHeight: 1.6, color: 'rgb(210,210,210)' }}>

Brute force saldırısının başarısı, hedef sistemdeki şifre politikalarının zayıflığına bağlıdır. Uzun, karmaşık ve benzersiz şifreler kullanıldığında, bu tür saldırılar çok daha uzun sürebilir.Örneğin: “Password123” gibi basit bir şifre, kısa sürede kırılabilirken, “L$7fRj8VqW9@” gibi karmaşık bir şifre çok daha zor kırılır.


</Typography>

</Grid>


</Grid>

<Typography variant="body1" sx={{ fontSize: '25px', fontWeight:'bold', color: '#fff', lineHeight: 1.6, color: 'rgb(255,0,71)', marginTop:'2em', marginLeft:'16em' }}>

Teknik ve Taktikler

</Typography>


<Grid container spacing={2} style={{display: 'flex', flexWrap: 'nowrap', marginTop:'1em'}} >

    <Grid  item xs={4} md={6} className="mt">

    <Typography variant="solid" sx={{ fontSize: '18px',backgroundColor:'rgb(255,0,71)', lineHeight: 1.6, color: 'rgb(50,50,50)', fontWeight:'bold'}}>

    Tahmin Edilebilirlik

</Typography>

<Typography variant="body1" sx={{ fontSize: '15px', color: '#fff', lineHeight: 1.6, color: 'rgb(210,210,210)' }}>

Saldırgan, yaygın kullanılan şifre kombinasyonlarını dener. Örneğin, “123456”, “password” veya “admin123”.
</Typography>

    </Grid>

    <Grid  item xs={4} md={6} className="mt">

    <Typography variant="body1" sx={{ fontSize: '18px', color: '#fff', lineHeight: 1.6, color: 'rgb(50,50,50)',backgroundColor:'rgb(255,0,71)', fontWeight:'bold', marginRight:'0em' }}>

    Sözlük Saldırısı

</Typography>

<Typography variant="body1" sx={{ fontSize: '15px', color: '#fff', lineHeight: 1.6, color: 'rgb(210,210,210)' }}>

Önceden tanımlanmış bir şifre listesini kullanarak denemeler yapılır. Sözlük saldırıları, brute force saldırılarından daha hızlıdır ancak başarı oranı sınırlıdır.
</Typography>

    </Grid>

    <Grid  item xs={4} md={6} className="mt">

<Typography variant="body1" sx={{ fontSize: '18px', color: '#fff', lineHeight: 1.6, color: 'rgb(50,50,50)',backgroundColor:'rgb(255,0,71)', fontWeight:'bold', marginRight:'0em' }}>

Zaman Aşımı ve Limitleme

</Typography>

<Typography variant="body1" sx={{ fontSize: '15px', color: '#fff', lineHeight: 1.6, color: 'rgb(210,210,210)' }}>

Bazı sistemler, çok fazla başarısız girişim sonrasında hesapları kilitleyebilir veya saldırganları geçici olarak engelleyebilir.Hesap Kilitleme, birkaç başarısız girişim sonrası hedef hesap kilitlenebilir.Zaman Aşımı, hedef sistem, deneme sürelerine kısıtlamalar getirebilir ve hızlı bir şekilde brute force saldırılarını engelleyebilir.



</Typography>

</Grid>




</Grid>

<Typography variant="body1" sx={{ fontSize: '25px', fontWeight:'bold', color: '#fff', lineHeight: 1.6, color: 'rgb(255,0,71)', marginTop:'2em', marginLeft:'14em' }}>

Güvenlik Önlemleri ve Tespit

</Typography>


<Grid container spacing={2} style={{display: 'flex', flexWrap: 'nowrap', marginTop:'1em'}} >

    <Grid  item xs={4} md={6} className="mt">

    <Typography variant="solid" sx={{ fontSize: '18px',backgroundColor:'rgb(255,0,71)', lineHeight: 1.6, color: 'rgb(50,50,50)', fontWeight:'bold'}}>

IDS/IPS Tespitleri

</Typography>

<Typography variant="body1" sx={{ fontSize: '15px', color: '#fff', lineHeight: 1.6, color: 'rgb(210,210,210)' }}>

IDS/IPS sistemleri, brute force saldırılarını tespit etmek için kullanılabilir. Anormal bir giriş denemesi örüntüsü tespit edilirse, sistem güvenlik ekibini uyarabilir.Örneğin: Bir IP adresinden gelen çok sayıda başarısız giriş denemesi.

</Typography>

    </Grid>

    <Grid  item xs={4} md={6} className="mt">

    <Typography variant="body1" sx={{ fontSize: '18px', color: '#fff', lineHeight: 1.6, color: 'rgb(50,50,50)',backgroundColor:'rgb(255,0,71)', fontWeight:'bold', marginRight:'0em' }}>

Hesap Kilitleme Politikaları
</Typography>

<Typography variant="body1" sx={{ fontSize: '15px', color: '#fff', lineHeight: 1.6, color: 'rgb(210,210,210)' }}>

Birden fazla başarısız giriş denemesi sonrası hesap kilitleme veya kullanıcıyı geçici olarak engelleme önlemleri almak, brute force saldırılarını engellemeye yardımcı olabilir.

</Typography>

    </Grid>

    <Grid  item xs={4} md={6} className="mt">

<Typography variant="body1" sx={{ fontSize: '18px', color: '#fff', lineHeight: 1.6, color: 'rgb(50,50,50)',backgroundColor:'rgb(255,0,71)', fontWeight:'bold', marginRight:'0em' }}>

Hız Sınırlandırması
</Typography>

<Typography variant="body1" sx={{ fontSize: '15px', color: '#fff', lineHeight: 1.6, color: 'rgb(210,210,210)' }}>

Şifre denemelerinin hızını sınırlayan mekanizmalar, brute force saldırılarının etkisini azaltabilir.
</Typography>

</Grid>





</Grid>
    

    <Typography variant="body1" sx={{ fontSize: '18px', color: '#fff', lineHeight: 1.6, color: 'rgb(210,210,210)', marginTop:'2em' }}>

    Brute force saldırıları, özellikle zayıf şifreleme yöntemlerine karşı etkili olabilir, ancak güçlü parolalar ve güvenlik önlemleriyle bu tür saldırılar önemli ölçüde engellenebilir. Ayrıca, şifre politikalarının doğru şekilde uygulanması, brute force saldırılarının başarı şansını azaltacaktır. Güvenli bir ağ altyapısı için güçlü kimlik doğrulama, hesap kilitleme ve hız sınırlandırma gibi stratejiler kritik öneme sahiptir.



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
        BUKE
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
        HYDRA
      </Button>
    </Stack>

    </Grid>
    </Grid>
    

</Grid>



    </div>
  )
}
