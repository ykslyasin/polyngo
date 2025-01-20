import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Menu, MenuItem, Typography } from '@mui/joy';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import LogoutIcon from '@mui/icons-material/Logout';
import StarIcon from '@mui/icons-material/Star';


export default function SignedIn({ handleSignOut, kullaniciAdi }) {
    const navigate = useNavigate();
    const [anchorEl, setAnchorEl] = useState(null);

    // Menü açma ve kapatma işlemleri
    const handleToggleMenu = (event) => {
        setAnchorEl((prev) => (prev ? null : event.currentTarget)); // Açık mı kapalı mı kontrol et
    };

    const handleCloseMenu = () => {
        setAnchorEl(null); // Menü kapat
    };

    return (
        <div className="flex items-center">
            <Button
                variant="solid"
                onClick={handleToggleMenu}
                endDecorator={<ArrowDropDownIcon />}
                sx={{ fontFamily:'Ubuntu Mono, monospace', fontSize: '20px', fontWeight: 'bold', textTransform: 'none', marginRight:10, backgroundColor:'rgb(60,60,60)', '&:hover': { backgroundColor: 'rgb(120,120,120)' }  }}
            >
                {kullaniciAdi}
            </Button>

            <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleCloseMenu}
                placement="bottom-start"
                sx={{backgroundColor:'rgb(60,60,60)', borderColor:'rgb(60,60,60)' }}
            >

                <MenuItem
                    
                    sx={{color:'rgb(255,255,255)',
                        '&:hover': {pointerEvents:'auto', '&:hover': { backgroundColor: 'rgb(120,120,120)'}}
                    }}
                    onClick={() => {
                        navigate('favorites'); // Çıkış yap ve anasayfaya yönlendir
                    }}
                >
                    <StarIcon sx={{ marginRight: '8px', '&:hover': { backgroundColor: 'rgb(120,120,120)' } }} />
                    Favorilerim
                </MenuItem>

                <MenuItem
                    
                    sx={{color:'rgb(255,255,255)',
                        '&:hover': {pointerEvents:'auto', '&:hover': { backgroundColor: 'rgb(120,120,120)'}}
                    }}
                    onClick={() => {
                        handleSignOut();
                        navigate('/'); // Çıkış yap ve anasayfaya yönlendir
                    }}
                >
                    <LogoutIcon sx={{ marginRight: '8px', '&:hover': { backgroundColor: 'rgb(120,120,120)' } }} />
                    Çıkış Yap
                </MenuItem>

                
            </Menu>
        </div>
    );
}
