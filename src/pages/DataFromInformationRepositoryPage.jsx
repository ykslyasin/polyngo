import React from 'react'
import { Link } from 'react-router-dom'
import { Grid, Typography, Button } from '@mui/joy';
import Box from '@mui/material/Box'
import '../App.css';
import Stack from '@mui/joy/Stack';

export default function DataFromInformationRepository() {
  return (
    <div>

<Grid container spacing={2} justifyContent="center" className="home-grid-container">

  <Grid item xs={8} md={8} className="mt">
    <Typography variant="h4" className="mb-0" sx={{ fontSize:'55px', fontWeight: 'bold', color: 'rgb(255,0,71)' }}>
    Data from Information Repositories
    </Typography>
    <Typography variant="body1" sx={{ fontSize: '18px', color: '#fff', lineHeight: 1.6, color: 'rgb(210,210,210)' }}>
    Data from Information Repositories, MITRE ATT&CK framework'ünde Collection (Toplama) taktiği altında yer alan bir tekniktir. Bu teknik, saldırganların hedef sistemde bulunan ve çeşitli kaynaklarda saklanan bilgileri toplamak amacıyla kullanılır. Bu tür veri depoları, genellikle kurumsal veritabanları, dosya sistemleri, yedekleme çözümleri veya bulut tabanlı hizmetler gibi çeşitli kaynakları içerebilir. Bu bilgi kaynaklarından elde edilen veriler, saldırganlar için kritik olabilir, özellikle hedefin zayıf noktalarını keşfetme, kimlik bilgileri toplama veya sistemin işleyişini anlamada önemli rol oynar.


    </Typography>

    <Typography variant="body1" sx={{ fontSize: '25px', fontWeight:'bold', color: '#fff', lineHeight: 1.6, color: 'rgb(255,0,71)', marginTop:'2em', marginLeft:'16em' }}>

    Temel Özellikler


    </Typography>


    <Grid container spacing={2} style={{display: 'flex', flexWrap: 'nowrap', marginTop:'1em'}} >

        <Grid  item xs={4} md={6} className="mt">

        <Typography variant="solid" sx={{ fontSize: '18px',backgroundColor:'rgb(255,0,71)', lineHeight: 1.6, color: 'rgb(50,50,50)', fontWeight:'bold'}}>

        Hedef Bilgi Depoları

</Typography>

<Typography variant="body1" sx={{ fontSize: '15px', color: '#fff', lineHeight: 1.6, color: 'rgb(210,210,210)' }}>

Bu teknik, saldırganların belirli bir hedefin sisteminde veya ağında depolanan verileri hedef almasına dayanır. Veriler, genellikle veritabanları, dosya sunucuları, yedeklemeler veya bulut sistemlerinde saklanır.Örneğin: Bir saldırgan, şirketin dosya sunucusuna erişim sağlayarak, içindeki hassas dosyaları arayabilir.


</Typography>

        </Grid>

        <Grid  item xs={4} md={6} className="mt">

        <Typography variant="body1" sx={{ fontSize: '18px', color: '#fff', lineHeight: 1.6, color: 'rgb(50,50,50)',backgroundColor:'rgb(255,0,71)', fontWeight:'bold', marginRight:'0em' }}>

        Veritabanı ve Dosya Sistemi

</Typography>

<Typography variant="body1" sx={{ fontSize: '15px', color: '#fff', lineHeight: 1.6, color: 'rgb(210,210,210)' }}>

Bu tür bilgi depoları, verilerin düzenli bir şekilde depolandığı yapılar olabilir. Veritabanları (SQL veya NoSQL) ve dosya sistemleri, bilgilerin hızlı bir şekilde erişilebileceği ve organize edilebileceği yerlerdir.Örneğin: Bir SQL veritabanındaki kullanıcı hesap bilgileri veya dosya sistemindeki önemli proje dosyaları hedef alınabilir.

</Typography>

        </Grid>

        <Grid  item xs={4} md={6} className="mt">

<Typography variant="body1" sx={{ fontSize: '18px', color: '#fff', lineHeight: 1.6, color: 'rgb(50,50,50)',backgroundColor:'rgb(255,0,71)', fontWeight:'bold', marginRight:'0em' }}>

Yedekleme ve Depolama

</Typography>

<Typography variant="body1" sx={{ fontSize: '15px', color: '#fff', lineHeight: 1.6, color: 'rgb(210,210,210)' }}>

Yedekleme çözümleri ve bulut hizmetleri (örneğin AWS, Google Cloud veya Azure), büyük miktarda veriyi depolamak için kullanılır. Saldırganlar bu verilere erişerek, hedefin geçmişteki verilerine ulaşabilir.
Örneğin: Bir saldırgan, bulut ortamında depolanan eski kullanıcı verilerini çekebilir ve kimlik avı saldırıları için kullanabilir.

</Typography>

</Grid>


</Grid>

<Typography variant="body1" sx={{ fontSize: '25px', fontWeight:'bold', color: '#fff', lineHeight: 1.6, color: 'rgb(255,0,71)', marginTop:'2em', marginLeft:'16em' }}>

Teknik ve Taktikler

</Typography>


<Grid container spacing={2} style={{display: 'flex', flexWrap: 'nowrap', marginTop:'1em'}} >

    <Grid  item xs={4} md={6} className="mt">

    <Typography variant="solid" sx={{ fontSize: '18px',backgroundColor:'rgb(255,0,71)', lineHeight: 1.6, color: 'rgb(50,50,50)', fontWeight:'bold'}}>

    Veritabanı Erişimi

</Typography>

<Typography variant="body1" sx={{ fontSize: '15px', color: '#fff', lineHeight: 1.6, color: 'rgb(210,210,210)' }}>

Veritabanlarına erişim, genellikle SQL enjeksiyonları veya zayıf kimlik doğrulama yöntemleri kullanılarak yapılır.SQL Enjeksiyonu, saldırgan, zayıf veya hatalı yapılandırılmış bir web uygulaması aracılığıyla veritabanına sorgular gönderir.Kimlik Doğrulama Zafiyetleri: Zayıf parolalar veya kimlik doğrulama sistemlerinin hataları, veritabanına yetkisiz erişimi mümkün kılar.



</Typography>

    </Grid>

    <Grid  item xs={4} md={6} className="mt">

    <Typography variant="body1" sx={{ fontSize: '18px', color: '#fff', lineHeight: 1.6, color: 'rgb(50,50,50)',backgroundColor:'rgb(255,0,71)', fontWeight:'bold', marginRight:'0em' }}>

    Dosya Sistemi Taraması

</Typography>

<Typography variant="body1" sx={{ fontSize: '15px', color: '#fff', lineHeight: 1.6, color: 'rgb(210,210,210)' }}>

Saldırganlar, dosya sisteminde hassas verileri aramak için çeşitli dosya tarama ve inceleme teknikleri kullanabilirler.Arama ve Tarama Araçları, yedekleme dosyalarını, kimlik bilgilerini veya belirli sistem yapılandırmalarını aramak için gelişmiş arama araçları kullanılır.Rsync, dosya senkronizasyonu için kullanılan bu araç, ağ üzerinden dosyaların yedeklenmesi veya taşınması amacıyla kullanılabilir.



</Typography>

    </Grid>

    <Grid  item xs={4} md={6} className="mt">

<Typography variant="body1" sx={{ fontSize: '18px', color: '#fff', lineHeight: 1.6, color: 'rgb(50,50,50)',backgroundColor:'rgb(255,0,71)', fontWeight:'bold', marginRight:'0em' }}>

Bulut Taraması

</Typography>

<Typography variant="body1" sx={{ fontSize: '15px', color: '#fff', lineHeight: 1.6, color: 'rgb(210,210,210)' }}>

Bulut depolama çözümleri, doğru yapılandırılmadığı takdirde veri sızıntılarına yol açabilir.Yanlış Yapılandırılmış Erişim Kontrolleri, erişim kontrol listelerinin (ACL) hatalı yapılandırılması, saldırganların bulut ortamına erişmesine olanak tanır.API Anahtarları ve Erişim Verileri, API anahtarları veya bulut kimlik doğrulama bilgileri genellikle uygulamalarla entegre edilmiş olabilir ve bu da onları hedef almak için fırsatlar sunar.



</Typography>

</Grid>




</Grid>

<Typography variant="body1" sx={{ fontSize: '25px', fontWeight:'bold', color: '#fff', lineHeight: 1.6, color: 'rgb(255,0,71)', marginTop:'2em', marginLeft:'14em' }}>

Güvenlik Önlemleri ve Tespit

</Typography>


<Grid container spacing={2} style={{display: 'flex', flexWrap: 'nowrap', marginTop:'1em'}} >

    <Grid  item xs={4} md={6} className="mt">

    <Typography variant="solid" sx={{ fontSize: '18px',backgroundColor:'rgb(255,0,71)', lineHeight: 1.6, color: 'rgb(50,50,50)', fontWeight:'bold'}}>

Erişim Kontrolleri

</Typography>

<Typography variant="body1" sx={{ fontSize: '15px', color: '#fff', lineHeight: 1.6, color: 'rgb(210,210,210)' }}>

Veritabanları, dosya sistemleri ve bulut depolama alanları üzerinde güçlü erişim kontrolleri uygulanmalıdır. Sadece yetkilendirilmiş kullanıcılar verilere erişebilmelidir.Role-Based Access Control (RBAC): Kullanıcıların sadece ihtiyaç duydukları verilere erişebilmesi sağlanmalıdır.

</Typography>

    </Grid>

    <Grid  item xs={4} md={6} className="mt">

    <Typography variant="body1" sx={{ fontSize: '18px', color: '#fff', lineHeight: 1.6, color: 'rgb(50,50,50)',backgroundColor:'rgb(255,0,71)', fontWeight:'bold', marginRight:'0em' }}>

Şifreleme ve Veri Koruma

</Typography>

<Typography variant="body1" sx={{ fontSize: '15px', color: '#fff', lineHeight: 1.6, color: 'rgb(210,210,210)' }}>

Hem veri saklama hem de veri aktarımı sırasında şifreleme kullanarak verilerin güvenliğini sağlamak önemlidir.End-to-End Şifreleme, verilerin ağ üzerinde güvenli bir şekilde iletilmesini sağlar.Veritabanı Şifreleme, veritabanındaki verilerin şifrelenmesi, veri hırsızlığını önler.



</Typography>

    </Grid>

    <Grid  item xs={4} md={6} className="mt">

<Typography variant="body1" sx={{ fontSize: '18px', color: '#fff', lineHeight: 1.6, color: 'rgb(50,50,50)',backgroundColor:'rgb(255,0,71)', fontWeight:'bold', marginRight:'0em' }}>

Yedekleme ve İzleme

</Typography>

<Typography variant="body1" sx={{ fontSize: '15px', color: '#fff', lineHeight: 1.6, color: 'rgb(210,210,210)' }}>

Yedekleme dosyaları doğru şekilde korunmalı ve izlenmelidir.Yedekleme Yönetimi, yedeklemelerin şifreli ve erişim kontrolü altında yapılması gereklidir.Anomali Tespiti, sadece doğru kullanıcıların verilere erişebileceğinden emin olmak için anomali tespit sistemleri kurulabilir.


</Typography>

</Grid>





</Grid>
    

    <Typography variant="body1" sx={{ fontSize: '18px', color: '#fff', lineHeight: 1.6, color: 'rgb(210,210,210)', marginTop:'2em' }}>

    Data from Information Repositories tekniği, veritabanlarından, dosya sistemlerinden veya bulut ortamlarından bilgi toplama amacı güder. Bu teknik, güçlü güvenlik önlemleri ve yapılandırmalar gerektirir. Veritabanları, dosya sistemleri ve bulut ortamlarının doğru şekilde yönetilmesi, bu tür saldırıların önüne geçilmesini sağlar. Ayrıca, erişim kontrolleri, şifreleme ve ağ trafiği izleme gibi güvenlik önlemleri, bu tür saldırıları engellemek için kritik öneme sahiptir.


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
        to="/sqlmap"
        variant="solid"
        sx={{backgroundColor:'rgb(255,0,71)',
             '&:hover': {backgroundColor:'rgb(120,120,120)', color:'rgb(255,255,255)'},
             fontFamily:'Ubunto Mono, monospace',
             
        }}
      >
        SQLMAP
      </Button>
      <Button
        component={Link}
        to="/Bbqsql"
        variant="solid"
        //onClick={signIn}
        sx={{backgroundColor:'rgb(255,0,71)',
            '&:hover': {backgroundColor:'rgb(120,120,120)', color:'rgb(255,255,255)'},
            fontFamily:'Ubunto Mono, monospace',
            
       }}
      >
        BBQSQL
      </Button>
    </Stack>

    </Grid>
    </Grid>
    

</Grid>



    </div>
  )
}
