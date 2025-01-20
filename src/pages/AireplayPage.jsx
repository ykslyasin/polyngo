import React from 'react'
import { Link } from 'react-router-dom'
import { Grid, Typography, Button } from '@mui/joy';
import Box from '@mui/material/Box'
import '../App.css';
import Stack from '@mui/joy/Stack';
import Terminal from '../Terminal.js'
import { colors } from '@mui/material';
import { Paper } from "@mui/material";
import FormLabel from '@mui/joy/FormLabel';
import Radio from '@mui/joy/Radio';
import RadioGroup from '@mui/joy/RadioGroup';
import Sheet from '@mui/joy/Sheet';
import Table from '@mui/joy/Table';


export default function Aireplay() {

  var cmd_one="sudo apt-get install aircrack-ng";
  var cmd_two="aireplay-ng --deauth <sayı> -a <AP MAC> -c <Client MAC> <Wi-Fi arayüzü>";
  var cmd_three="aireplay-ng --fakeauth <süre> -a <AP MAC> -h <sahte MAC> <Wi-Fi arayüzü>";
  var cmd_four="aireplay-ng --arpreplay -b <AP MAC> -h <sahte MAC> <Wi-Fi arayüzü>";
  var cmd_five="";
  

  return (
    <div>

<Grid container spacing={2} justifyContent="center" className="home-grid-container">

  <Grid item xs={8} md={8} className="mt">
    <Typography variant="h4" className="mb-0" sx={{ fontSize:'55px', fontWeight: 'bold', color: 'rgb(255,0,71)' }}>
    AIREPLAY
    </Typography>
    <Typography variant="body1" sx={{ fontSize: '18px', color: '#fff', lineHeight: 1.6, color: 'rgb(210,210,210)' }}>
    Aireplay-ng, Wi-Fi ağlarının güvenliğini test etmek için kullanılan açık kaynaklı bir araçtır ve popüler Aircrack-ng araç takımının bir parçasıdır. Aireplay-ng, özellikle kablosuz ağlar üzerinde paket enjeksiyonu yaparak ağların güvenlik açıklarını keşfetmeyi ve ağ davranışlarını analiz etmeyi mümkün kılar. Bu araç, Wi-Fi şifreleme yöntemlerinin zayıf yönlerini test etmek, trafiği manipüle etmek ve sahte istemci bağlantıları oluşturarak ağların saldırılara karşı dayanıklılığını değerlendirmek için kullanılır.



    </Typography>

    <Typography variant="body1" sx={{ fontSize: '18px', color: '#fff', lineHeight: 1.6, color: 'rgb(210,210,210)', marginTop:'2em' }}>
    Aireplay-ng, saldırı simülasyonları sırasında çeşitli senaryoları destekler ve ağ güvenliği uzmanlarına aşağıdaki konularda yardımcı olur:

    </Typography>


    
    <Grid container spacing={2} style={{display: 'flex', flexWrap: 'nowrap', marginTop:'1em'}}>
    <Grid item xs={6} md={6} className="mt">
    <h1 style={{marginTop:'1em'}}>
      <Typography variant="body1" sx={{ fontSize: '20px', color: '#fff', lineHeight: 1.6, color: 'rgb(50,50,50)',backgroundColor:'rgb(255,0,71)', fontWeight:'bold', marginRight:'em' }}>
      I. Bağlantı Kesme (Deauthentication) Saldırıları
      </Typography>
      </h1>

      <h3 style={{marginTop:'1px'}}>
      <Typography variant="body1" sx={{fontWeight:'bold', fontSize: '15px', color: '#fff', lineHeight: 1.6, color: 'rgb(210,210,210)' }}>
      -Belirli bir istemciyi ağdan geçici olarak koparmak için kullanılır.
      </Typography>
      </h3>

      <h3 style={{marginTop:'1px'}}>
      <Typography variant="body1" sx={{fontWeight:'bold', fontSize: '15px', color: '#fff', lineHeight: 1.6, color: 'rgb(210,210,210)' }}>
      -WPA/WPA2 şifrelerinin kırılması için gerekli olan handshake (el sıkışma) bilgisini yakalamayı sağlar.
      </Typography>
        </h3>

        </Grid>
        <Grid item xs={6} md={6} className="mt">

      <h1 style={{ marginTop: '1em' }}>
      <Typography variant="body1" sx={{ fontSize: '20px', color: '#fff', lineHeight: 1.6, color: 'rgb(50,50,50)',backgroundColor:'rgb(255,0,71)', fontWeight:'bold', marginRight:'0em' }}>
      II. Sahte Kimlik Doğrulama (Fake Authentication)
      </Typography>
      </h1>

      <h3 style={{marginTop:'1px'}}>
      <Typography variant="body1" sx={{fontWeight:'bold', fontSize: '15px', color: '#fff', lineHeight: 1.6, color: 'rgb(210,210,210)' }}>
      -Gerçek bir istemci gibi davranarak ağda yetkisiz bağlantı gerçekleştirme imkânı sunar.
      </Typography> 
      </h3>

      <h3 style={{marginTop:'1px'}}>
      <Typography variant="body1" sx={{fontWeight:'bold', fontSize: '15px', color: '#fff', lineHeight: 1.6, color: 'rgb(210,210,210)' }}>
      -Özellikle WPA/WEP ağlarda sahte istemci gibi bağlanarak saldırı trafiği oluşturmak için kullanılır.
      </Typography> 
      </h3>

      </Grid>
      </Grid>
  
      <Grid container spacing={2} style={{display: 'flex', flexWrap: 'nowrap', marginTop:'-1.5em'}}>
    <Grid item xs={6} md={6} className="mt">
    <h1 style={{marginTop:'1em'}}>
      <Typography variant="body1" sx={{ fontSize: '20px', color: '#fff', lineHeight: 1.6, color: 'rgb(50,50,50)',backgroundColor:'rgb(255,0,71)', fontWeight:'bold', marginRight:'em' }}>
      III. ARP Replay (Yeniden Yayınlama) Saldırıları
      </Typography>
      </h1>

      <h3 style={{marginTop:'1px'}}>
      <Typography variant="body1" sx={{fontWeight:'bold', fontSize: '15px', color: '#fff', lineHeight: 1.6, color: 'rgb(210,210,210)' }}>
      -Ağ trafiğini artırarak veri paketlerini yakalama şansını yükseltir.
      </Typography>
      </h3>

      <h3 style={{marginTop:'1px'}}>
      <Typography variant="body1" sx={{fontWeight:'bold', fontSize: '15px', color: '#fff', lineHeight: 1.6, color: 'rgb(210,210,210)' }}>
      -Genellikle WEP şifreleme ile korunmuş ağlarda şifreyi çözmek için gerekli IV (Initialization Vector) verilerini toplamak amacıyla kullanılır.
      </Typography>
        </h3>

        </Grid>
        <Grid item xs={6} md={6} className="mt">

      <h1 style={{ marginTop: '1em' }}>
      <Typography variant="body1" sx={{ fontSize: '20px', color: '#fff', lineHeight: 1.6, color: 'rgb(50,50,50)',backgroundColor:'rgb(255,0,71)', fontWeight:'bold', marginRight:'0em' }}>
      IV. Paket Tekrarı (Packet Replay)
      </Typography>
      </h1>

      <h3 style={{marginTop:'1px'}}>
      <Typography variant="body1" sx={{fontWeight:'bold', fontSize: '15px', color: '#fff', lineHeight: 1.6, color: 'rgb(210,210,210)' }}>
      -Gerçek bir istemci gibi davranarak ağda yetkisiz bağlantı gerçekleştirme imkânı sunar.
      </Typography> 
      </h3>

      <h3 style={{marginTop:'1px'}}>
      <Typography variant="body1" sx={{fontWeight:'bold', fontSize: '15px', color: '#fff', lineHeight: 1.6, color: 'rgb(210,210,210)' }}>
      -Özellikle WPA/WEP ağlarda sahte istemci gibi bağlanarak saldırı trafiği oluşturmak için kullanılır.
      </Typography> 
      </h3>

      </Grid>

      </Grid>

      <Grid container spacing={2} style={{display: 'flex', flexWrap: 'nowrap', marginTop:'-1.5em'}}>
    <Grid item xs={6} md={6} className="mt">
    <h1 style={{marginTop:'1em'}}>
      <Typography variant="body1" sx={{ fontSize: '20px', color: '#fff', lineHeight: 1.6, color: 'rgb(50,50,50)',backgroundColor:'rgb(255,0,71)', fontWeight:'bold', marginRight:'-3.5em' }}>
      V. Erişim Noktasına Doğrudan Saldırılar (Access Point Attacks)
      </Typography>
      </h1>

      <h3 style={{marginTop:'1px'}}>
      <Typography variant="body1" sx={{fontWeight:'bold', fontSize: '15px', color: '#fff', lineHeight: 1.6, color: 'rgb(210,210,210)' }}>
      Erişim noktası üzerinde çeşitli kimlik doğrulama veya trafik manipülasyonu işlemleri gerçekleştirerek sistemin zayıflıklarını test eder.
      </Typography>
      </h3>


        </Grid>
        <Grid item xs={6} md={6} className="mt">
      </Grid>



      </Grid>

      <Typography variant="h4" className="mb-0" sx={{ fontSize:'30px', fontWeight: 'bold', color: 'rgb(255,0,71)', marginTop:'2em' }}>
    NASIL KULLANILIR
    </Typography>
      
      <Grid item>
    <h1 style={{marginTop:'1em'}}>
      <Typography variant="body1" sx={{ fontSize: '20px', color: '#fff', lineHeight: 1.6, color: 'rgb(50,50,50)',backgroundColor:'rgb(255,0,71)', fontWeight:'bold', marginRight:'em' }}>
      Aireplay-ng Kurulumu
      </Typography>
      </h1>

      <h3 style={{marginTop:'1px'}}>
      <Typography variant="body1" sx={{fontWeight:'bold', fontSize: '15px', color: '#fff', lineHeight: 1.6, color: 'rgb(210,210,210)' }}>
      Aireplay-ng, genellikle Kali Linux gibi sızma testi araçlarını içeren dağıtımlarla birlikte gelir. Ancak başka bir sistemde kullanmak istiyorsanız, aşağıdaki komutla kurabilirsiniz:      </Typography>
      </h3>



        </Grid>

            <Typography variant="body1" sx={{ fontSize: '15px', lineHeight: 1.6, color: '#00ff00',backgroundColor:'#1e1e1e', fontWeight:'bold', marginTop:'1em', marginRight:'16em' }}>
            terminal@h4cktools:~$ 
            <Typography variant="body1" sx={{ fontSize: '15px', lineHeight: 4, color: 'rgb(210,210,210)',backgroundColor:'#1e1e1e', fontWeight:'bold', marginTop:'1em' }}>
            {cmd_one}
              </Typography>
      </Typography>

      <Grid item>
    <h1 style={{marginTop:'1em'}}>
      <Typography variant="body1" sx={{ fontSize: '20px', color: '#fff', lineHeight: 1.6, color: 'rgb(50,50,50)',backgroundColor:'rgb(255,0,71)', fontWeight:'bold', marginRight:'em' }}>
      Aireplay-ng Kullanım Senaryoları ve Komutlar
            </Typography>
      </h1>

      <h3 style={{marginTop:'1px'}}>
      <Typography variant="body1" sx={{fontWeight:'bold', fontSize: '18px', lineHeight: 1.6, color: 'rgb(255,0,71)' }}>
      Deauthentication Attack(Bağlantı Kesme Saldırısı)
           </Typography>
      </h3>      

      <h3 style={{marginTop:'1px'}}>
      {/*<Typography variant="body1" sx={{fontWeight:'bold', fontSize: '15px', color: '#fff', lineHeight: 1.6, color: 'rgb(210,210,210)' }}>
      Bir istemciyi hedef ağdan koparmak için kullanılır. Bu saldırı, genellikle WPA/WPA2 şifrelerini yakalamak için kullanılır.
      
            </Typography>*/}
      </h3>

      <Typography variant="body1" sx={{ fontSize: '15px', lineHeight: 1.6, color: '#00ff00',backgroundColor:'#1e1e1e', fontWeight:'bold', marginTop:'1em', marginRight:'16em' }}>
            terminal@h4cktools:~$ 
            <Typography variant="body1" sx={{ fontSize: '15px', lineHeight: 4, color: 'rgb(210,210,210)',backgroundColor:'#1e1e1e', fontWeight:'bold', marginTop:'1em' }}>

            {cmd_two}

            </Typography>
      </Typography>

      <h3 style={{marginTop:'1em'}}>
      <Typography variant="body1" sx={{fontWeight:'bold', fontSize: '18px', lineHeight: 1.6, color: 'rgb(255,0,71)' }}>
      Fake Authentication Attack (Sahte Bağlantı Saldırısı)       
          </Typography>
      </h3>      

      <h3 style={{marginTop:'1px'}}>
       {/*<Typography variant="body1" sx={{fontWeight:'bold', fontSize: '15px', color: '#fff', lineHeight: 1.6, color: 'rgb(210,210,210)' }}>
      Şifreleme bilgilerini toplamak veya bir ağa yetkisiz olarak bağlanmak için sahte istemci kimliği kullanılır.
      
            </Typography>*/}
      </h3>

      <Typography variant="body1" sx={{ fontSize: '15px', lineHeight: 1.6, color: '#00ff00',backgroundColor:'#1e1e1e', fontWeight:'bold', marginTop:'1em', marginRight:'16em' }}>
            terminal@h4cktools:~$ 
            <Typography variant="body1" sx={{ fontSize: '15px', lineHeight: 4, color: 'rgb(210,210,210)',backgroundColor:'#1e1e1e', fontWeight:'bold', marginTop:'1em' }}>

            {cmd_three}

            </Typography>
      </Typography>

      <h3 style={{marginTop:'1em'}}>
      <Typography variant="body1" sx={{fontWeight:'bold', fontSize: '18px', lineHeight: 1.6, color: 'rgb(255,0,71)' }}>
      ARP Request Replay Attack
                </Typography>
      </h3>      

      <h3 style={{marginTop:'1px'}}>
       {/*<Typography variant="body1" sx={{fontWeight:'bold', fontSize: '15px', color: '#fff', lineHeight: 1.6, color: 'rgb(210,210,210)' }}>
      Bu yöntem, veri yakalama ve analiz için ağ trafiğini artırır.
      
            </Typography>*/}
      </h3>

      <Typography variant="body1" sx={{ fontSize: '15px', lineHeight: 1.6, color: '#00ff00',backgroundColor:'#1e1e1e', fontWeight:'bold', marginTop:'1em', marginRight:'16em' }}>
            terminal@h4cktools:~$ 
            <Typography variant="body1" sx={{ fontSize: '15px', lineHeight: 4, color: 'rgb(210,210,210)',backgroundColor:'#1e1e1e', fontWeight:'bold', marginTop:'1em' }}>

            {cmd_four}

            </Typography>
      </Typography>



        </Grid>
<Grid className="parametre-tablosu" marginTop={5}>
<div>
      <Sheet sx={{ height: 300, overflow: 'auto', backgroundColor:'#1e1e1e'}}>
        <Table
          aria-label="table with sticky header"
          stickyHeader
          stickyFooter
          variant='solid'
          sx={{fontFamily:'Ubuntu Mono, monospace', fontSize:'15px'}}
        >
          <thead>
            <tr>
              <th style={{color:'rgb(255,0,71)', width:'20%', borderColor:'rgb(255,0,71)'}}>Parametreler</th>
              <th style={{color:'rgb(210,210,210)', width:'80%', borderColor:'rgb(210,210,210)'}}>Açıklama</th>
            </tr>
          </thead>
          <tbody>
            
              <tr>
                <td style={{color:'rgb(255,0,71)',backgroundColor:'#1e1e1e', borderColor:'rgb(210,210,210)'}}>--deauth &lt;sayı&gt;</td>
                <td style={{color:'rgb(210,210,210)',backgroundColor:'#1e1e1e', borderColor:'rgb(255,0,71)'}}>Deauthentication paketlerini gönderir.</td>
              </tr>

              <tr>
                <td style={{color:'rgb(255,0,71)',backgroundColor:'#1e1e1e', borderColor:'rgb(210,210,210)'}}>--fakeauth &lt;süre&gt;</td>
                <td style={{color:'rgb(210,210,210)',backgroundColor:'#1e1e1e', borderColor:'rgb(255,0,71)'}}>Sahte bağlantı gerçekleştirir.</td>
              </tr>

              <tr>
                <td style={{color:'rgb(255,0,71)',backgroundColor:'#1e1e1e', borderColor:'rgb(210,210,210)'}}>--arpreplay</td>
                <td style={{color:'rgb(210,210,210)',backgroundColor:'#1e1e1e', borderColor:'rgb(255,0,71)'}}>ARP paketlerini tekrar gönderir.</td>
              </tr>

              <tr>
                <td style={{color:'rgb(255,0,71)',backgroundColor:'#1e1e1e', borderColor:'rgb(210,210,210)'}}>--test</td>
                <td style={{color:'rgb(210,210,210)',backgroundColor:'#1e1e1e', borderColor:'rgb(255,0,71)'}}>Paket enjeksiyonunu test eder.</td>
              </tr>

              <tr>
                <td style={{color:'rgb(255,0,71)',backgroundColor:'#1e1e1e', borderColor:'rgb(210,210,210)'}}>--fragment</td>
                <td style={{color:'rgb(210,210,210)',backgroundColor:'#1e1e1e', borderColor:'rgb(255,0,71)'}}>Parçalanmış paket saldırısı gerçekleştirir.</td>
              </tr>

              <tr>
                <td style={{color:'rgb(255,0,71)',backgroundColor:'#1e1e1e', borderColor:'rgb(210,210,210)'}}>-a &lt;AP MAC&gt;</td>
                <td style={{color:'rgb(210,210,210)',backgroundColor:'#1e1e1e', borderColor:'rgb(255,0,71)'}}>Erişim noktasının MAC adresini belirtir.</td>
              </tr>

              <tr>
                <td style={{color:'rgb(255,0,71)',backgroundColor:'#1e1e1e', borderColor:'rgb(210,210,210)'}}>-c &lt;Client MAC&gt;</td>
                <td style={{color:'rgb(210,210,210)',backgroundColor:'#1e1e1e', borderColor:'rgb(255,0,71)'}}>Belirli bir istemciyi hedefler.</td>
              </tr>

              <tr>
                <td style={{color:'rgb(255,0,71)',backgroundColor:'#1e1e1e', borderColor:'rgb(210,210,210)'}}>-h &lt;Sahte MAC&gt;</td>
                <td style={{color:'rgb(210,210,210)',backgroundColor:'#1e1e1e', borderColor:'rgb(255,0,71)'}}>Sahte istemci MAC adresini belirtir.</td>
              </tr>







            
          </tbody>

        </Table>
      </Sheet>
    </div>
    </Grid>

      <Grid classname="aireplay-egzersizler">
      <Grid item>
    <h1 style={{marginTop:'1em'}}>
      <Typography variant="body1" sx={{ fontSize: '20px', color: '#fff', lineHeight: 1.6, color: 'rgb(50,50,50)',backgroundColor:'rgb(255,0,71)', fontWeight:'bold', marginRight:'em' }}>
      Egzersizler
      </Typography>
      </h1>

      <h3 style={{marginTop:'1px'}}>
      <Typography variant="body1" sx={{fontWeight:'bolder', fontSize: '18px', color: '#fff', lineHeight: 1.6, color: 'rgb(255,0,71)' }}>
      Egzersiz 1
       </Typography>
      </h3>

      <h3 style={{marginTop:'1px'}}>
      <Typography variant="body1" sx={{fontWeight:'bold', fontSize: '15px', color: '#fff', lineHeight: 1.6, color: 'rgb(210,210,210)' }}>
      Aireplay-ng kullanarak 00:11:22:33:44:55 MAC adresine sahip bir erişim noktasındaki 66:77:88:99:AA:BB MAC adresli istemciye sürekli deauthentication paketleri gönderin. Kablosuz ağ arayüzünüzün wlan0mon olduğunu varsayın.       
       </Typography>
      </h3>

      <Terminal marginTop="1em" activeTool="aireplay1"/>

        </Grid>

        <Grid item>

        <h3 style={{marginTop:'1em'}}>
      <Typography variant="body1" sx={{fontWeight:'bolder', fontSize: '18px', color: '#fff', lineHeight: 1.6, color: 'rgb(255,0,71)' }}>
      Egzersiz 2
       </Typography>
      </h3>

      <h3 style={{marginTop:'1em'}}>
      <Typography variant="body1" sx={{fontWeight:'bold', fontSize: '15px', color: '#fff', lineHeight: 1.6, color: 'rgb(210,210,210)' }}>
      Aireplay-ng ile sahte kimlik doğrulama gerçekleştirin. Hedef erişim noktasının MAC adresi 00:11:22:33:44:55 ve sizin sahte MAC adresiniz 12:34:56:78:9A:BC olsun. Kablosuz ağ arayüzünüz ise wlan0mon.

</Typography>
      </h3>

      <Terminal marginTop="1em" activeTool="aireplay2"/>

        </Grid>
        </Grid>

    
  </Grid>











<Grid sx={{position:'sticky'}}>
  <Grid item xs={4} md={4} className="mt" sx={{position:'sticky', top: 0}}>

  <Typography variant="h4" className="mb-0" sx={{ fontSize:'40px', fontWeight: 'bold', color: 'rgb(255,0,71)', marginLeft:'0.6em' }}>
    Benzer Araçlar
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
        HPing3
      </Button>
    </Stack>

    </Grid>
    </Grid>
    

</Grid>

<Grid marginLeft={43.5}>


</Grid>
    </div>
  )
}
