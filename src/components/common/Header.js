import React, { useState } from 'react'

import { AppBar, Toolbar, styled, Box, Typography,InputBase } from '@mui/material';
import { BookmarkAdd, ExpandMore, Menu } from '@mui/icons-material';
import { logoURL } from '../../constants/constants';

// component

import HeaderMenu from './HeaderMenu';
import { useNavigate } from 'react-router-dom';

const StyleToolbar = styled(Toolbar)`
    background: #121212;
    min-height: 56px !important;
    padding: 0 115px !important;
    justify-content: space-between;

    & > * {
        padding: 0 16px;
    }
    & > div {
        display: flex;
        align-items: center;
        cursor: pointer;
        & > p {
            font-size : 14px;
            font-weight: 600;
        }
    }
    & > p {
        font-size : 14px;
        font-weight: 600;
    }
`

const InputSearchField = styled(InputBase)`
    background: #FFFFFF;
    height: 30px;
    width: 55%;
    border-radius: 5px;
`

const Logo = styled('img')({
    width: 64,
    cursor: 'pointer'
})

const Header = () => {

    const [open, setOpen] = useState(null);

    const navigate = useNavigate();

    const handleClick = (e) =>{
        setOpen(e.currentTarget);
    }

    const handleClose = () =>{
        setOpen(null);
    }

  return (
    <>
        <AppBar position='static'>
            <StyleToolbar>
                <Logo src={logoURL} alt="logo" onClick={()=> navigate('/')}/>
                <Box onClick = {handleClick}>
                    <Menu/>
                    <Typography>Menu</Typography>
                </Box>
                <HeaderMenu open = {open} handleClose = {handleClose}/>
                <InputSearchField/>
                <Typography>IMDb<Box component="span" style={{color: 'blue'}}>Pro</Box></Typography>
                <Box>
                    <BookmarkAdd/>
                    <Typography>Watchlist</Typography>
                </Box>
                <Typography>SignIn</Typography>
                <Box>
                    <Typography>EN</Typography>
                    <ExpandMore/>
                </Box>
            </StyleToolbar>
        </AppBar>
    </>
  )
}

export default Header