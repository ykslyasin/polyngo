import React, { useState, useEffect } from 'react';
import Box from '@mui/joy/Box';
import Drawer from '@mui/joy/Drawer';
import Button from '@mui/joy/Button';
import List from '@mui/joy/List';
import DialogTitle from '@mui/joy/DialogTitle';
import ListItem from '@mui/joy/ListItem';
import ListItemButton from '@mui/joy/ListItemButton';
import Divider from '@mui/joy/Divider';
import Menu from 'semantic-ui-react/dist/commonjs/collections/Menu';
import SignedOut from './SignedOut';
import SignedIn from './SignedIn';
import categoryService from '../services/categoryService';
import { useNavigate } from 'react-router-dom';
import ButtonGroup from '@mui/joy/ButtonGroup';
import Stack from '@mui/joy/Stack';


export default function Navi({ isAuthenticated, handleSignOut, kullaniciAdi, setLevel, falseCount, trueCount, userPoints }) {
  const [open, setOpen] = useState(false);
  const [buttonOffset, setButtonOffset] = useState(0); // Butonun pozisyonu için state
  const [categories, setCategories] = useState([]);

  const categoryIds = [14,12, 10, 8, 7, 6, 5, 4, 1, 21, 20, 27, 26, 25];

  // Drawer açma/kapatma fonksiyonu
  const toggleDrawer = (inOpen) => () => {
    setOpen(inOpen);
    // Eğer drawer açıksa butonu kaydır, kapalıysa eski yerine getir
    setButtonOffset(inOpen ? 300 : 0);
  };

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const categoryPromises = categoryIds.map((id) =>
          categoryService.getCategoryById(id).then((response) => response.data.data)
        );
        const results = await Promise.all(categoryPromises);
        setCategories(results);
      } catch (error) {
        console.error("Kategoriler alınırken bir hata oluştu:", error);
      }
    };

    fetchCategories();
  }, []);


  const navigate = useNavigate();

  // Tıklama olayında yönlendirme yapılacak sayfa URL'lerini dinamik olarak almak
  const handleItemClick = (url) => {
    navigate(url); // Butona ait URL'ye yönlendir
  };

  

  return (
    <div>
      <Menu inverted borderless style={{ backgroundColor: 'rgb(255,0,71)', color: "#FFF" }}>
        <Box sx={{ display: 'flex', alignItems: 'center', height: 60, backgroundColor: 'rgb(255,0,71)' }}>


        <Button
      variant="solid"
      onClick={() => navigate("/")} // `/` sayfasına yönlendirir
      sx={{
        backgroundColor: "rgb(255,0,71)",
        "&:hover": { backgroundColor: "rgba(255,255,255,0.2)" },
        position: "relative",
        left: buttonOffset, // Dinamik pozisyon
        transition: "left 0.3s ease", // Yumuşak kaydırma
        color: "white", // Orijinal renk ayarları
        padding: 1, // Kenar boşluklarını kaldır
        borderRadius: 2, // PNG'nin tam uyumu için köşeleri yuvarla
        maxWidth: 1080, // Butonun genişliğini resimle sınırla
      }}
    >
      <img
        src="../../images/h4cktools3.png" // PNG resminizin yolu
        alt="H4cktools Logo"
        style={{
          width: "100px",
          height: "40px",
          objectFit: "contain",
        }}
      />
    </Button>


          <Button
            variant="solid"
            onClick={toggleDrawer(!open)}
            sx={{
              backgroundColor: 'rgb(255,0,71)',
              '&:hover': { backgroundColor: 'rgba(255,255,255,0.2)' },
              fontFamily: 'Courier New',
              fontSize: '18px',
              position: 'relative',
              left: buttonOffset, // Dinamik pozisyon
              transition: 'left 0.3s ease', // Yumuşak kaydırma
              color: 'white', // Orijinal renk ayarları
            }}
          >
            H 4 C K T O O L S
          </Button>

          <Button
            variant="solid"
            onClick={() => handleItemClick(`komut-uret`)}
            sx={{
              backgroundColor: 'rgb(255,0,71)',
              '&:hover': { backgroundColor: 'rgba(255,255,255,0.2)' },
              fontFamily: 'Courier New',
              fontSize: '15px',
              fontWeight:'normal',
              position: 'relative',
              marginLeft:'4em',
              left: buttonOffset, // Dinamik pozisyon
              transition: 'left 0.3s ease', // Yumuşak kaydırma
              color: 'rgb()', // Orijinal renk ayarları
              
            }}
          >
            Komut Üret
          </Button>


          <Drawer
            open={open}
            onClose={toggleDrawer(false)}
            invertedColors={false}
            size="sm"
            anchor="left"
            hideBackdrop={false}
            variant='solid'
            disableEnforceFocus
          >
  
  <Box
    role="presentation"
    onClick={toggleDrawer(false)}
    onKeyDown={toggleDrawer(false)}
    sx={{ paddingLeft: '15px', paddingTop: '10px', backgroundColor:'rgb(255,0,71)'}}
    minHeight={'255vh'}
    
  >
    <DialogTitle sx={{color:'rgb(50,50,50)',fontFamily:'Ubuntu Mono, monospace', fontWeight:'bold', fontSize: 17}}>{categories.find((c) => c.categoryId === categoryIds[0])?.categoryName} </DialogTitle>
    <List>
      {[categories.find((c) => c.categoryId === categoryIds[0])?.categoryTechnique].map((text) => (
        <ListItem key={text} >
          <ListItemButton sx={{color:'rgb(230,230,230)',fontFamily:'Ubuntu Mono, monospace', fontWeight:'normal', fontSize: 15}} onClick={() => handleItemClick(`active-scanning`)} >{text}</ListItemButton>
        </ListItem>
      ))}
    </List>

    <List>
        <ListItem>
          <ListItemButton sx={{color:'rgb(230,230,230)',fontFamily:'Ubuntu Mono, monospace', fontWeight:'normal', fontSize: 15}} onClick={() => handleItemClick(`search-open-technical-databases`)} >Search Open Technical Databases</ListItemButton>
        </ListItem>

        <ListItem>
<ListItemButton sx={{color:'rgb(230,230,230)',fontFamily:'Ubuntu Mono, monospace', fontWeight:'normal', fontSize: 15}}>Search Victim-Owned Websites</ListItemButton>
</ListItem>

<ListItem>
<ListItemButton sx={{color:'rgb(230,230,230)',fontFamily:'Ubuntu Mono, monospace', fontWeight:'normal', fontSize: 15}}>Search Closed Sources</ListItemButton>
</ListItem>

<ListItem>
<ListItemButton sx={{color:'rgb(230,230,230)',fontFamily:'Ubuntu Mono, monospace', fontWeight:'normal', fontSize: 15}}>Phishing for Information</ListItemButton>
</ListItem>
      
    </List>

    <DialogTitle sx={{color:'rgb(50,50,50)', fontFamily:'Ubuntu Mono, monospace', fontWeight:'bold', fontSize: 17}} >{categories.find((c) => c.categoryId === categoryIds[1])?.categoryName} </DialogTitle>
    {/*<List>
      {[categories.find((c) => c.categoryId === categoryIds[1])?.categoryTechnique].map((text) => (
        <ListItem key={text}>
          <ListItemButton sx={{color:'rgb(230,230,230)',fontFamily:'Ubuntu Mono, monospace', fontWeight:'normal', fontSize: 15}} onClick={() => handleItemClick(`/`)} >{text}</ListItemButton>
        </ListItem>
      ))}
    </List>*/}

<List>

<ListItem>
<ListItemButton sx={{color:'rgb(230,230,230)',fontFamily:'Ubuntu Mono, monospace', fontWeight:'normal', fontSize: 15}}>Acquire Access</ListItemButton>
</ListItem>

<ListItem>
<ListItemButton sx={{color:'rgb(230,230,230)',fontFamily:'Ubuntu Mono, monospace', fontWeight:'normal', fontSize: 15}}>Compromise Accounts</ListItemButton>
</ListItem>

<ListItem>
<ListItemButton sx={{color:'rgb(230,230,230)',fontFamily:'Ubuntu Mono, monospace', fontWeight:'normal', fontSize: 15}}>Obtain Capabilities</ListItemButton>
</ListItem>

</List>

    <DialogTitle sx={{color:'rgb(50,50,50)', fontFamily:'Ubuntu Mono, monospace', fontWeight:'bold', fontSize: 17}} >{categories.find((c) => c.categoryId === categoryIds[2])?.categoryName} </DialogTitle>
    <List>
      {[categories.find((c) => c.categoryId === categoryIds[2])?.categoryTechnique].map((text) => (
        <ListItem key={text}>
          <ListItemButton sx={{color:'rgb(230,230,230)',fontFamily:'Ubuntu Mono, monospace', fontWeight:'normal', fontSize: 15}} onClick={() => handleItemClick(`exploit-public-facing-application`)}>{text}</ListItemButton>
        </ListItem>
      ))}

<ListItem>
<ListItemButton sx={{color:'rgb(230,230,230)',fontFamily:'Ubuntu Mono, monospace', fontWeight:'normal', fontSize: 15}}>Content Injection</ListItemButton>
</ListItem>

<ListItem>
<ListItemButton sx={{color:'rgb(230,230,230)',fontFamily:'Ubuntu Mono, monospace', fontWeight:'normal', fontSize: 15}}>Hardware Additions</ListItemButton>
</ListItem>

<ListItem>
<ListItemButton sx={{color:'rgb(230,230,230)',fontFamily:'Ubuntu Mono, monospace', fontWeight:'normal', fontSize: 15}}>Phishing</ListItemButton>
</ListItem>

    </List>

    <DialogTitle sx={{color:'rgb(50,50,50)', fontFamily:'Ubuntu Mono, monospace', fontWeight:'bold', fontSize: 17}} >{categories.find((c) => c.categoryId === categoryIds[3])?.categoryName} </DialogTitle>
    {/*<List>
      {[categories.find((c) => c.categoryId === categoryIds[3])?.categoryTechnique].map((text) => (
        <ListItem key={text}>
          <ListItemButton>{text}</ListItemButton>
        </ListItem>
      ))}
    </List>*/}

<List>

<ListItem>
<ListItemButton sx={{color:'rgb(230,230,230)',fontFamily:'Ubuntu Mono, monospace', fontWeight:'normal', fontSize: 15}}>Serverless Execution</ListItemButton>
</ListItem>

<ListItem>
<ListItemButton sx={{color:'rgb(230,230,230)',fontFamily:'Ubuntu Mono, monospace', fontWeight:'normal', fontSize: 15}}>Native API</ListItemButton>
</ListItem>

<ListItem>
<ListItemButton sx={{color:'rgb(230,230,230)',fontFamily:'Ubuntu Mono, monospace', fontWeight:'normal', fontSize: 15}}>Shared Modules</ListItemButton>
</ListItem>

</List>

    <DialogTitle sx={{color:'rgb(50,50,50)', fontFamily:'Ubuntu Mono, monospace', fontWeight:'bold', fontSize: 17}} >{categories.find((c) => c.categoryId === categoryIds[4])?.categoryName} </DialogTitle>
    {/*<List>
      {[categories.find((c) => c.categoryId === categoryIds[4])?.categoryTechnique].map((text) => (
        <ListItem key={text}>
          <ListItemButton>{text}</ListItemButton>
        </ListItem>
      ))}
    </List>*/}

<List>

<ListItem>
<ListItemButton sx={{color:'rgb(230,230,230)',fontFamily:'Ubuntu Mono, monospace', fontWeight:'normal', fontSize: 15}}>Implant Internal Image</ListItemButton>
</ListItem>

<ListItem>
<ListItemButton sx={{color:'rgb(230,230,230)',fontFamily:'Ubuntu Mono, monospace', fontWeight:'normal', fontSize: 15}}>External Remote Services</ListItemButton>
</ListItem>

<ListItem>
<ListItemButton sx={{color:'rgb(230,230,230)',fontFamily:'Ubuntu Mono, monospace', fontWeight:'normal', fontSize: 15}}>Browser Extensions</ListItemButton>
</ListItem>

</List>

    <DialogTitle sx={{color:'rgb(50,50,50)', fontFamily:'Ubuntu Mono, monospace', fontWeight:'bold', fontSize: 17}} >{categories.find((c) => c.categoryId === categoryIds[5])?.categoryName} </DialogTitle>
    {/*<List>
      {[categories.find((c) => c.categoryId === categoryIds[5])?.categoryTechnique].map((text) => (
        <ListItem key={text}>
          <ListItemButton>{text}</ListItemButton>
        </ListItem>
      ))}
    </List>*/}

<List>

<ListItem>
<ListItemButton sx={{color:'rgb(230,230,230)',fontFamily:'Ubuntu Mono, monospace', fontWeight:'normal', fontSize: 15}}>Escape to Host</ListItemButton>
</ListItem>

<ListItem>
<ListItemButton sx={{color:'rgb(230,230,230)',fontFamily:'Ubuntu Mono, monospace', fontWeight:'normal', fontSize: 15}}>Event Triggered Execution</ListItemButton>
</ListItem>

<ListItem>
<ListItemButton sx={{color:'rgb(230,230,230)',fontFamily:'Ubuntu Mono, monospace', fontWeight:'normal', fontSize: 15}}>Process Injection</ListItemButton>
</ListItem>

</List>

    <DialogTitle sx={{color:'rgb(50,50,50)', fontFamily:'Ubuntu Mono, monospace', fontWeight:'bold', fontSize: 17}} >{categories.find((c) => c.categoryId === categoryIds[6])?.categoryName} </DialogTitle>
    {/*<List>
      {[categories.find((c) => c.categoryId === categoryIds[6])?.categoryTechnique].map((text) => (
        <ListItem key={text}>
          <ListItemButton>{text}</ListItemButton>
        </ListItem>
      ))}
    </List>*/}

      <List>

        <ListItem>
      <ListItemButton sx={{color:'rgb(230,230,230)',fontFamily:'Ubuntu Mono, monospace', fontWeight:'normal', fontSize: 15}}>File and Directory Permissions Modification</ListItemButton>
    </ListItem>

    <ListItem>
      <ListItemButton sx={{color:'rgb(230,230,230)',fontFamily:'Ubuntu Mono, monospace', fontWeight:'normal', fontSize: 15}}>Impair Defenses</ListItemButton>
    </ListItem>

    <ListItem>
      <ListItemButton sx={{color:'rgb(230,230,230)',fontFamily:'Ubuntu Mono, monospace', fontWeight:'normal', fontSize: 15}}>Indirect Command Execution</ListItemButton>
    </ListItem>
        
    </List>

    <DialogTitle sx={{color:'rgb(50,50,50)', fontFamily:'Ubuntu Mono, monospace', fontWeight:'bold', fontSize: 17}}>{categories.find((c) => c.categoryId === categoryIds[7])?.categoryName} </DialogTitle>
    <List>
      {[categories.find((c) => c.categoryId === categoryIds[7])?.categoryTechnique].map((text) => (
        <ListItem key={text}>
          <ListItemButton sx={{color:'rgb(230,230,230)',fontFamily:'Ubuntu Mono, monospace', fontWeight:'normal', fontSize: 15}} onClick={() => handleItemClick(`network-sniffing`)} >{text}</ListItemButton>
        </ListItem>
      ))}
    </List>

    <List>
        <ListItem>
          <ListItemButton sx={{color:'rgb(230,230,230)',fontFamily:'Ubuntu Mono, monospace', fontWeight:'normal', fontSize: 15}} onClick={() => handleItemClick(`brute-force`)} >Brute Force</ListItemButton>
        </ListItem>

        <ListItem>
      <ListItemButton sx={{color:'rgb(230,230,230)',fontFamily:'Ubuntu Mono, monospace', fontWeight:'normal', fontSize: 15}}>Credentials from Password Stores</ListItemButton>
    </ListItem>

    <ListItem>
      <ListItemButton sx={{color:'rgb(230,230,230)',fontFamily:'Ubuntu Mono, monospace', fontWeight:'normal', fontSize: 15}}>Forced Authentication</ListItemButton>
    </ListItem>

    <ListItem>
      <ListItemButton sx={{color:'rgb(230,230,230)',fontFamily:'Ubuntu Mono, monospace', fontWeight:'normal', fontSize: 15}}>Input Capture</ListItemButton>
    </ListItem>
        
    </List>

    <DialogTitle sx={{color:'rgb(50,50,50)', fontFamily:'Ubuntu Mono, monospace', fontWeight:'bold', fontSize: 17}} >{categories.find((c) => c.categoryId === categoryIds[8])?.categoryName} </DialogTitle>
    <List>
      {[categories.find((c) => c.categoryId === categoryIds[8])?.categoryTechnique].map((text) => (
        <ListItem key={text}>
          <ListItemButton sx={{color:'rgb(230,230,230)',fontFamily:'Ubuntu Mono, monospace', fontWeight:'normal', fontSize: 15}} onClick={() => handleItemClick(`file-and-directory-discovery`)} >{text}</ListItemButton>
        </ListItem>
      ))}

    <ListItem>
      <ListItemButton sx={{color:'rgb(230,230,230)',fontFamily:'Ubuntu Mono, monospace', fontWeight:'normal', fontSize: 15}}>Account Discovery</ListItemButton>
    </ListItem>

    <ListItem>
      <ListItemButton sx={{color:'rgb(230,230,230)',fontFamily:'Ubuntu Mono, monospace', fontWeight:'normal', fontSize: 15}}>Log Enumeration</ListItemButton>
    </ListItem>

    <ListItem>
      <ListItemButton sx={{color:'rgb(230,230,230)',fontFamily:'Ubuntu Mono, monospace', fontWeight:'normal', fontSize: 15}}>Network Service Discovery</ListItemButton>
    </ListItem>

    </List>

    <DialogTitle sx={{color:'rgb(50,50,50)', fontFamily:'Ubuntu Mono, monospace', fontWeight:'bold', fontSize: 17}} >{categories.find((c) => c.categoryId === categoryIds[9])?.categoryName} </DialogTitle>
    {/*<List>
      {[categories.find((c) => c.categoryId === categoryIds[9])?.categoryTechnique].map((text) => (
        <ListItem key={text}>
          <ListItemButton>{text}</ListItemButton>
        </ListItem>
      ))}
    </List>*/}
   <List>

      <ListItem>
      <ListItemButton sx={{color:'rgb(230,230,230)',fontFamily:'Ubuntu Mono, monospace', fontWeight:'normal', fontSize: 15}}>Exploitation of Remote Services</ListItemButton>
    </ListItem>

    <ListItem>
      <ListItemButton sx={{color:'rgb(230,230,230)',fontFamily:'Ubuntu Mono, monospace', fontWeight:'normal', fontSize: 15}}>Internal Spearphishing</ListItemButton>
    </ListItem>

    <ListItem>
      <ListItemButton sx={{color:'rgb(230,230,230)',fontFamily:'Ubuntu Mono, monospace', fontWeight:'normal', fontSize: 15}}>Lateral Tool Transfer</ListItemButton>
    </ListItem>
      </List>


    <DialogTitle sx={{color:'rgb(50,50,50)', fontFamily:'Ubuntu Mono, monospace', fontWeight:'bold', fontSize: 17}} >{categories.find((c) => c.categoryId === categoryIds[10])?.categoryName} </DialogTitle>
    <List>
      {[categories.find((c) => c.categoryId === categoryIds[10])?.categoryTechnique].map((text) => (
        <ListItem key={text}>
          <ListItemButton sx={{color:'rgb(230,230,230)',fontFamily:'Ubuntu Mono, monospace', fontWeight:'normal', fontSize: 15}} onClick={() => handleItemClick(`data-from-information-repository`)} >{text}</ListItemButton>
        </ListItem>
      ))}

        <ListItem>
          <ListItemButton sx={{color:'rgb(230,230,230)',fontFamily:'Ubuntu Mono, monospace', fontWeight:'normal', fontSize: 15}}>Automated Collection</ListItemButton>
        </ListItem>

        <ListItem>
          <ListItemButton sx={{color:'rgb(230,230,230)',fontFamily:'Ubuntu Mono, monospace', fontWeight:'normal', fontSize: 15}}>Data from Local System</ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton sx={{color:'rgb(230,230,230)',fontFamily:'Ubuntu Mono, monospace', fontWeight:'normal', fontSize: 15}}>Data from Removable Media</ListItemButton>
        </ListItem>

    </List>

    <DialogTitle sx={{color:'rgb(50,50,50)', fontFamily:'Ubuntu Mono, monospace', fontWeight:'bold', fontSize: 17}} >{categories.find((c) => c.categoryId === categoryIds[11])?.categoryName} </DialogTitle>
    {/*<List>
      {[categories.find((c) => c.categoryId === categoryIds[11])?.categoryTechnique].map((text) => (
        <ListItem key={text}>
          <ListItemButton sx={{color:'rgb(230,230,230)',fontFamily:'Ubuntu Mono, monospace', fontWeight:'normal', fontSize: 15}} onClick={() => handleItemClick(`/`)} >{text}</ListItemButton>
        </ListItem>
      ))}
    </List>*/}
    

    <List>

    <ListItem>
          <ListItemButton sx={{color:'rgb(230,230,230)',fontFamily:'Ubuntu Mono, monospace', fontWeight:'normal', fontSize: 15}}>Application Layer Protocol</ListItemButton>
        </ListItem>

        <ListItem>
          <ListItemButton sx={{color:'rgb(230,230,230)',fontFamily:'Ubuntu Mono, monospace', fontWeight:'normal', fontSize: 15}}>Hide Infrastructure</ListItemButton>
        </ListItem>
    </List>

    <DialogTitle sx={{color:'rgb(50,50,50)', fontFamily:'Ubuntu Mono, monospace', fontWeight:'bold', fontSize: 17}} >{categories.find((c) => c.categoryId === categoryIds[12])?.categoryName} </DialogTitle>
    {/*<List>
      {[categories.find((c) => c.categoryId === categoryIds[12])?.categoryTechnique].map((text) => (
        <ListItem key={text}>
          <ListItemButton>{text}</ListItemButton>
        </ListItem>
      ))}
    </List>*/}
    <List>
        <ListItem>
          <ListItemButton sx={{color:'rgb(230,230,230)',fontFamily:'Ubuntu Mono, monospace', fontWeight:'normal', fontSize: 15}}>Fallback Channels</ListItemButton>
        </ListItem>

        <ListItem>
          <ListItemButton sx={{color:'rgb(230,230,230)',fontFamily:'Ubuntu Mono, monospace', fontWeight:'normal', fontSize: 15}}>Scheduled Transfer</ListItemButton>
        </ListItem>

        <ListItem>
          <ListItemButton sx={{color:'rgb(230,230,230)',fontFamily:'Ubuntu Mono, monospace', fontWeight:'normal', fontSize: 15}}>Automated Exfiltration</ListItemButton>
        </ListItem>

    </List>

    <DialogTitle sx={{color:'rgb(50,50,50)', fontFamily:'Ubuntu Mono, monospace', fontWeight:'bold', fontSize: 17}} >{categories.find((c) => c.categoryId === categoryIds[13])?.categoryName} </DialogTitle>
    <List>
      {[categories.find((c) => c.categoryId === categoryIds[13])?.categoryTechnique].map((text) => (
        <ListItem key={text}>
          <ListItemButton sx={{color:'rgb(230,230,230)',fontFamily:'Ubuntu Mono, monospace', fontWeight:'normal', fontSize: 15}} onClick={() => handleItemClick(`network-denial-of-service`)} >{text}</ListItemButton>
        </ListItem>
      ))}

        <ListItem>
          <ListItemButton sx={{color:'rgb(230,230,230)',fontFamily:'Ubuntu Mono, monospace', fontWeight:'normal', fontSize: 15}}>Resource Hijacking</ListItemButton>
        </ListItem>

        <ListItem>
          <ListItemButton sx={{color:'rgb(230,230,230)',fontFamily:'Ubuntu Mono, monospace', fontWeight:'normal', fontSize: 15}}>Firmware Corruption</ListItemButton>
        </ListItem>

        <ListItem>
          <ListItemButton sx={{color:'rgb(230,230,230)',fontFamily:'Ubuntu Mono, monospace', fontWeight:'normal', fontSize: 15}}>Financial Theft</ListItemButton>
        </ListItem>
    </List>

    <Divider />
  </Box>

          </Drawer>
        </Box>
        <Menu.Menu position="right" style={{ marginTop: "6px" }}>
          {isAuthenticated ? (
            <SignedIn
              userPoints={userPoints}
              falseCount={falseCount}
              trueCount={trueCount}
              setLevel={setLevel}
              handleSignOut={handleSignOut}
              kullaniciAdi={kullaniciAdi}
            />
          ) : (
            <SignedOut />
          )}
        </Menu.Menu>


      </Menu>
    </div>
  );
}
