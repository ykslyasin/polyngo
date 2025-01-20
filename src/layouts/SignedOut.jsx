import React from 'react'
//import { Button, Menu } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import Button from '@mui/joy/Button';
import Stack from '@mui/joy/Stack';
import App from '../App.css'


export default function SignedOut({signIn}) {
    return (
        <div>
            
            {/*<Menu.Item>
                <Button as={Link} to='/sign-up' primary>Sign Up</Button>
                <Button as={Link} to='/sign-in' grey style={{marginLeft:'0.5em'}} onClick={signIn} >Sign In</Button>
            </Menu.Item>*/}

    <Stack direction="row" spacing={2} marginTop={1} marginRight={10}>
      <Button
        component={Link}
        to="/sign-up"
        variant="solid"
        sx={{backgroundColor:'rgb(60,60,60)',
             '&:hover': {backgroundColor:'rgb(120,120,120)', color:'rgb(255,255,255)'},
             fontFamily:'Ubunto Mono, monospace',
             
        }}
      >
        Kayıt ol
      </Button>
      <Button
        component={Link}
        to="/sign-in"
        variant="solid"
        onClick={signIn}
        sx={{backgroundColor:'rgb(60,60,60)',
            '&:hover': {backgroundColor:'rgb(120,120,120)', color:'rgb(255,255,255)'},
            fontFamily:'Ubunto Mono, monospace',
            
       }}
      >
        Giriş yap
      </Button>
    </Stack>


        </div>
    )
}
