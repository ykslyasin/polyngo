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
  SQLMAP
</Typography>
<Typography variant="body1" sx={{ fontSize: '18px', color: '#fff', lineHeight: 1.6, color: 'rgb(210,210,210)' }}>
  SQLMap, SQL enjeksiyonu (SQLi) güvenlik açıklarını tespit etmek ve bunları istismar etmek için kullanılan açık kaynaklı bir araçtır. Bu araç, veritabanı güvenliğini test etmek, şifreleri kırmak, veri sızdırmak veya veritabanı üzerinde komutlar çalıştırmak amacıyla kullanılır. SQLMap, otomatik olarak birçok farklı veritabanı yönetim sistemini (DBMS) destekler ve kullanıcıların, SQL enjeksiyonlarını verimli bir şekilde analiz etmelerine olanak tanır.
</Typography>

<Typography variant="body1" sx={{ fontSize: '18px', color: '#fff', lineHeight: 1.6, color: 'rgb(210,210,210)', marginTop:'2em' }}>
  SQLMap, saldırı simülasyonları sırasında çeşitli senaryoları destekler ve güvenlik uzmanlarına aşağıdaki konularda yardımcı olur:
</Typography>

<Grid container spacing={2} style={{display: 'flex', flexWrap: 'nowrap', marginTop:'1em'}}>
  <Grid item xs={6} md={6} className="mt">
    <h1 style={{marginTop:'1em'}}>
      <Typography variant="body1" sx={{ fontSize: '20px', color: '#fff', lineHeight: 1.6, color: 'rgb(50,50,50)',backgroundColor:'rgb(255,0,71)', fontWeight:'bold', marginRight:'em' }}>
        I. Veri Tabanı Türlerini Tanıma
      </Typography>
    </h1>
    <h3 style={{marginTop:'1px'}}>
      <Typography variant="body1" sx={{fontWeight:'bold', fontSize: '15px', color: '#fff', lineHeight: 1.6, color: 'rgb(210,210,210)' }}>
        -Farklı veritabanı türlerini tanımak ve doğru enjeksiyon türünü seçmek için kullanılır.
      </Typography>
    </h3>
    <h3 style={{marginTop:'1px'}}>
      <Typography variant="body1" sx={{fontWeight:'bold', fontSize: '15px', color: '#fff', lineHeight: 1.6, color: 'rgb(210,210,210)' }}>
        -MySQL, PostgreSQL, Oracle, MSSQL gibi birçok veritabanı sistemini destekler.
      </Typography>
    </h3>
  </Grid>
  <Grid item xs={6} md={6} className="mt">
    <h1 style={{ marginTop: '1em' }}>
      <Typography variant="body1" sx={{ fontSize: '20px', color: '#fff', lineHeight: 1.6, color: 'rgb(50,50,50)',backgroundColor:'rgb(255,0,71)', fontWeight:'bold', marginRight:'0em' }}>
        II. Otomatik Enjeksiyon Testi
      </Typography>
    </h1>
    <h3 style={{marginTop:'1px'}}>
      <Typography variant="body1" sx={{fontWeight:'bold', fontSize: '15px', color: '#fff', lineHeight: 1.6, color: 'rgb(210,210,210)' }}>
        -SQL enjeksiyon açıklarını otomatik olarak tespit eder.
      </Typography>
    </h3>
    <h3 style={{marginTop:'1px'}}>
      <Typography variant="body1" sx={{fontWeight:'bold', fontSize: '15px', color: '#fff', lineHeight: 1.6, color: 'rgb(210,210,210)' }}>
        -Farklı enjeksiyon türlerini test etmek için kullanıcı girdilerini manipüle eder.
      </Typography>
    </h3>
  </Grid>
</Grid>

<Grid container spacing={2} style={{display: 'flex', flexWrap: 'nowrap', marginTop:'-1.5em'}}>
  <Grid item xs={6} md={6} className="mt">
    <h1 style={{marginTop:'1em'}}>
      <Typography variant="body1" sx={{ fontSize: '20px', color: '#fff', lineHeight: 1.6, color: 'rgb(50,50,50)',backgroundColor:'rgb(255,0,71)', fontWeight:'bold', marginRight:'em' }}>
        III. Veritabanı Bilgilerini Çekme
      </Typography>
    </h1>
    <h3 style={{marginTop:'1px'}}>
      <Typography variant="body1" sx={{fontWeight:'bold', fontSize: '15px', color: '#fff', lineHeight: 1.6, color: 'rgb(210,210,210)' }}>
        -Veritabanındaki tabloları ve sütunları keşfetmek için kullanılır.
      </Typography>
    </h3>
    <h3 style={{marginTop:'1px'}}>
      <Typography variant="body1" sx={{fontWeight:'bold', fontSize: '15px', color: '#fff', lineHeight: 1.6, color: 'rgb(210,210,210)' }}>
        -Veritabanında depolanan hassas verileri sızdırma yeteneği sağlar.
      </Typography>
    </h3>
  </Grid>
  <Grid item xs={6} md={6} className="mt">
    <h1 style={{ marginTop: '1em' }}>
      <Typography variant="body1" sx={{ fontSize: '20px', color: '#fff', lineHeight: 1.6, color: 'rgb(50,50,50)',backgroundColor:'rgb(255,0,71)', fontWeight:'bold', marginRight:'0em' }}>
        IV. Şifre Çözme
      </Typography>
    </h1>
    <h3 style={{marginTop:'1px'}}>
      <Typography variant="body1" sx={{fontWeight:'bold', fontSize: '15px', color: '#fff', lineHeight: 1.6, color: 'rgb(210,210,210)' }}>
        -Veritabanı kullanıcı şifrelerini kırmak için zayıf şifreleme yöntemlerini hedefler.
      </Typography>
    </h3>
    <h3 style={{marginTop:'1px'}}>
      <Typography variant="body1" sx={{fontWeight:'bold', fontSize: '15px', color: '#fff', lineHeight: 1.6, color: 'rgb(210,210,210)' }}>
        -Hedef sistemde bulunan hash değerlerini çözerek, parolaları açığa çıkarır.
      </Typography>
    </h3>
  </Grid>
</Grid>

<Grid container spacing={2} style={{display: 'flex', flexWrap: 'nowrap', marginTop:'-1.5em'}}>
  <Grid item xs={6} md={6} className="mt">
    <h1 style={{marginTop:'1em'}}>
      <Typography variant="body1" sx={{ fontSize: '20px', color: '#fff', lineHeight: 1.6, color: 'rgb(50,50,50)',backgroundColor:'rgb(255,0,71)', fontWeight:'bold', marginRight:'-3.5em' }}>
        V. Zafiyetleri İstismar Etme
      </Typography>
    </h1>
    <h3 style={{marginTop:'1px'}}>
      <Typography variant="body1" sx={{fontWeight:'bold', fontSize: '15px', color: '#fff', lineHeight: 1.6, color: 'rgb(210,210,210)' }}>
        -Veritabanında tespit edilen güvenlik açıklarını kullanarak sistemin kontrolünü ele geçirme imkânı sağlar.
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
        <Typography variant="body1" sx={{ fontSize: '20px', color: '#fff', lineHeight: 1.6, color: 'rgb(50,50,50)', backgroundColor:'rgb(255,0,71)', fontWeight:'bold', marginRight:'em' }}>
            SQLmap Kurulumu
        </Typography>
    </h1>

    <h3 style={{marginTop:'1px'}}>
        <Typography variant="body1" sx={{ fontWeight:'bold', fontSize: '15px', color: '#fff', lineHeight: 1.6, color: 'rgb(210,210,210)' }}>
            SQLmap, web uygulamalarındaki SQL enjeksiyon açıklarını tespit etmek ve sömürmek için kullanılan popüler bir araçtır. Çoğunlukla Kali Linux gibi sızma testi dağıtımlarıyla gelir. Eğer başka bir sistemde kullanmak isterseniz, aşağıdaki komutla kurabilirsiniz:
        </Typography>
    </h3>

    <Typography variant="body1" sx={{ fontSize: '15px', lineHeight: 1.6, color: '#00ff00', backgroundColor:'#1e1e1e', fontWeight:'bold', marginTop:'1em', marginRight:'16em' }}>
        terminal@h4cktools:~$
        <Typography variant="body1" sx={{ fontSize: '15px', lineHeight: 4, color: 'rgb(210,210,210)', backgroundColor:'#1e1e1e', fontWeight:'bold', marginTop:'1em' }}>
            sudo apt-get install sqlmap
        </Typography>
    </Typography>

    <h1 style={{marginTop:'1em'}}>
        <Typography variant="body1" sx={{ fontSize: '20px', color: '#fff', lineHeight: 1.6, color: 'rgb(50,50,50)', backgroundColor:'rgb(255,0,71)', fontWeight:'bold', marginRight:'em' }}>
            SQLmap Kullanım Senaryoları ve Komutlar
        </Typography>
    </h1>

    <h3 style={{marginTop:'1px'}}>
        <Typography variant="body1" sx={{ fontWeight:'bold', fontSize: '18px', lineHeight: 1.6, color: 'rgb(255,0,71)' }}>
            Temel SQL Enjeksiyon Testi
        </Typography>
    </h3>

    <Typography variant="body1" sx={{ fontSize: '15px', lineHeight: 1.6, color: '#00ff00', backgroundColor:'#1e1e1e', fontWeight:'bold', marginTop:'1em', marginRight:'16em' }}>
        terminal@h4cktools:~$
        <Typography variant="body1" sx={{ fontSize: '15px', lineHeight: 4, color: 'rgb(210,210,210)', backgroundColor:'#1e1e1e', fontWeight:'bold', marginTop:'1em' }}>
            sqlmap -u "http://example.com/vulnerable.php?id=1" --batch
        </Typography>
    </Typography>

    <h3 style={{marginTop:'1em'}}>
        <Typography variant="body1" sx={{ fontWeight:'bold', fontSize: '18px', lineHeight: 1.6, color: 'rgb(255,0,71)' }}>
            Veritabanı Bilgilerini Çekme
        </Typography>
    </h3>

    <Typography variant="body1" sx={{ fontSize: '15px', lineHeight: 1.6, color: '#00ff00', backgroundColor:'#1e1e1e', fontWeight:'bold', marginTop:'1em', marginRight:'16em' }}>
        terminal@h4cktools:~$
        <Typography variant="body1" sx={{ fontSize: '15px', lineHeight: 4, color: 'rgb(210,210,210)', backgroundColor:'#1e1e1e', fontWeight:'bold', marginTop:'1em' }}>
            sqlmap -u "http://example.com/vulnerable.php?id=1" --dump
        </Typography>
    </Typography>

    <h3 style={{marginTop:'1em'}}>
        <Typography variant="body1" sx={{ fontWeight:'bold', fontSize: '18px', lineHeight: 1.6, color: 'rgb(255,0,71)' }}>
            Kullanıcı Adı ve Şifre Elde Etme
        </Typography>
    </h3>

    <Typography variant="body1" sx={{ fontSize: '15px', lineHeight: 1.6, color: '#00ff00', backgroundColor:'#1e1e1e', fontWeight:'bold', marginTop:'1em', marginRight:'16em' }}>
        terminal@h4cktools:~$
        <Typography variant="body1" sx={{ fontSize: '15px', lineHeight: 4, color: 'rgb(210,210,210)', backgroundColor:'#1e1e1e', fontWeight:'bold', marginTop:'1em' }}>
            sqlmap -u "http://example.com/vulnerable.php?id=1" --user-agent="Mozilla/5.0" --passwords
        </Typography>
    </Typography>

    <h3 style={{marginTop:'1em'}}>
        <Typography variant="body1" sx={{ fontWeight:'bold', fontSize: '18px', lineHeight: 1.6, color: 'rgb(255,0,71)' }}>
            Dosya Yükleme
        </Typography>
    </h3>

    <Typography variant="body1" sx={{ fontSize: '15px', lineHeight: 1.6, color: '#00ff00', backgroundColor:'#1e1e1e', fontWeight:'bold', marginTop:'1em', marginRight:'16em'}}>
        terminal@h4cktools:~$
        <Typography variant="body1" sx={{ fontSize: '15px', lineHeight: 4, color: 'rgb(210,210,210)', backgroundColor:'#1e1e1e', fontWeight:'bold', marginTop:'1em' }}>
            sqlmap -u "http://example.com/vulnerable.php?id=1" --file-write=/path/to/file --file-dest=/path/to/destination
        </Typography>
    </Typography>

    <h3 style={{marginTop:'1em'}}>
        <Typography variant="body1" sx={{ fontWeight:'bold', fontSize: '18px', lineHeight: 1.6, color: 'rgb(255,0,71)' }}>
            HTTP Başlıklarını Manipüle Etme
        </Typography>
    </h3>

    <Typography variant="body1" sx={{ fontSize: '15px', lineHeight: 1.6, color: '#00ff00', backgroundColor:'#1e1e1e', fontWeight:'bold', marginTop:'1em', marginRight:'16em' }}>
        terminal@h4cktools:~$
        <Typography variant="body1" sx={{ fontSize: '15px', lineHeight: 4, color: 'rgb(210,210,210)', backgroundColor:'#1e1e1e', fontWeight:'bold', marginTop:'1em' }}>
            sqlmap -u "http://example.com/vulnerable.php?id=1" --headers="X-Injected-Header: test"
        </Typography>
    </Typography>

</Grid>

<Grid className="parametre-tablosu" marginTop={5}>
    <div>
        <Sheet sx={{ height: 300, overflow: 'auto', backgroundColor:'#1e1e1e' }}>
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
                        <td style={{color:'rgb(255,0,71)',backgroundColor:'#1e1e1e', borderColor:'rgb(210,210,210)'}}>--url &lt;URL&gt;</td>
                        <td style={{color:'rgb(210,210,210)',backgroundColor:'#1e1e1e', borderColor:'rgb(255,0,71)'}}>Hedef URL’yi belirtir.</td>
                    </tr>
                    <tr>
                        <td style={{color:'rgb(255,0,71)',backgroundColor:'#1e1e1e', borderColor:'rgb(210,210,210)'}}>--batch</td>
                        <td style={{color:'rgb(210,210,210)',backgroundColor:'#1e1e1e', borderColor:'rgb(255,0,71)'}}>Yapılacak işlemler için onay istemez.</td>
                    </tr>
                    <tr>
                        <td style={{color:'rgb(255,0,71)',backgroundColor:'#1e1e1e', borderColor:'rgb(210,210,210)'}}>--dump</td>
                        <td style={{color:'rgb(210,210,210)',backgroundColor:'#1e1e1e', borderColor:'rgb(255,0,71)'}}>Veritabanındaki tüm verileri döker.</td>
                    </tr>
                    <tr>
                        <td style={{color:'rgb(255,0,71)',backgroundColor:'#1e1e1e', borderColor:'rgb(210,210,210)'}}>--passwords</td>
                        <td style={{color:'rgb(210,210,210)',backgroundColor:'#1e1e1e', borderColor:'rgb(255,0,71)'}}>Kullanıcı adı ve şifre bilgilerini elde eder.</td>
                    </tr>
                    <tr>
                        <td style={{color:'rgb(255,0,71)',backgroundColor:'#1e1e1e', borderColor:'rgb(210,210,210)'}}>--file-write &lt;file&gt;</td>
                        <td style={{color:'rgb(210,210,210)',backgroundColor:'#1e1e1e', borderColor:'rgb(255,0,71)'}}>Dosya yazma işlemi yapar.</td>
                    </tr>
                    <tr>
                        <td style={{color:'rgb(255,0,71)',backgroundColor:'#1e1e1e', borderColor:'rgb(210,210,210)'}}>--headers &lt;header&gt;</td>
                        <td style={{color:'rgb(210,210,210)',backgroundColor:'#1e1e1e', borderColor:'rgb(255,0,71)'}}>Özel HTTP başlıkları ekler.</td>
                    </tr>
                </tbody>
            







    

        </Table>
      </Sheet>
    </div>
    </Grid>

    <Grid className="aireplay-egzersizler">
  <Grid item>
    <h1 style={{ marginTop: '1em' }}>
      <Typography 
        variant="body1" 
        sx={{ 
          fontSize: '20px', 
          color: '#fff', 
          lineHeight: 1.6, 
          backgroundColor: 'rgb(255,0,71)', 
          fontWeight: 'bold', 
          marginRight: 'em' 
        }}
      >
        Egzersizler
      </Typography>
    </h1>

    <h3 style={{ marginTop: '1px' }}>
      <Typography 
        variant="body1" 
        sx={{ 
          fontWeight: 'bolder', 
          fontSize: '18px', 
          color: '#fff', 
          lineHeight: 1.6, 
          color: 'rgb(255,0,71)' 
        }}
      >
        Egzersiz 1
      </Typography>
    </h3>

    <h3 style={{ marginTop: '1px' }}>
      <Typography 
        variant="body1" 
        sx={{ 
          fontWeight: 'bold', 
          fontSize: '15px', 
          color: '#fff', 
          lineHeight: 1.6, 
          color: 'rgb(210,210,210)' 
        }}
      >
        SQLMap kullanarak bir web uygulamasındaki SQL Injection açığını test edin. Hedef URL `http://example.com/vulnerable.php?id=1` olsun. SQLMap ile hedef URL'yi test ederek, uygulamanın veritabanını keşfedin ve örnek bir veri çekme işlemi gerçekleştirin.
      </Typography>
    </h3>

    <Terminal marginTop="1em" activeTool="sqlmap1" />
  </Grid>

  <Grid item>
    <h3 style={{ marginTop: '1em' }}>
      <Typography 
        variant="body1" 
        sx={{ 
          fontWeight: 'bolder', 
          fontSize: '18px', 
          color: '#fff', 
          lineHeight: 1.6, 
          color: 'rgb(255,0,71)' 
        }}
      >
        Egzersiz 2
      </Typography>
    </h3>

    <h3 style={{ marginTop: '1em' }}>
      <Typography 
        variant="body1" 
        sx={{ 
          fontWeight: 'bold', 
          fontSize: '15px', 
          color: '#fff', 
          lineHeight: 1.6, 
          color: 'rgb(210,210,210)' 
        }}
      >
        SQLMap ile bir web uygulamasındaki veritabanına bağlı SQL Injection açığını tespit edin. Hedef URL `http://example.com/products.php?id=2` olsun. SQLMap kullanarak, SQL Injection açığının veri sızıntısına neden olup olmadığını kontrol edin ve veritabanındaki kullanıcı bilgilerini çıkarın.
      </Typography>
    </h3>

    <Terminal marginTop="1em" activeTool="sqlmap2" />
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
        BBQSQL
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
