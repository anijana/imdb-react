import { Menu, MenuItem } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom';

const HeaderMenu = ({open, handleClose}) => {

    const openMenu = Boolean(open);
  return (
    <>
        <Menu
        id='basic-menu'
        anchorEl={open}
        open = {openMenu}
        onClose = {handleClose}
        MenuListProps = {{
            'aria-labelledby' : 'basic-button',
        }}
        >
          <Link to='/categories?category=popular' style={{textDecoration:'none', color:'inherit'}}>
            <MenuItem onClick={handleClose}>Popular</MenuItem>
          </Link>

          <Link to='/categories?category=toprated' style={{textDecoration:'none', color:'inherit'}}>
            <MenuItem onClick={handleClose}>Top Rated</MenuItem>
          </Link>

          <Link to='/categories?category=upcoming' style={{textDecoration:'none', color:'inherit'}}>
            <MenuItem onClick={handleClose}>Upcoming</MenuItem>
          </Link>
            
        </Menu>
    </>
  )
}

export default HeaderMenu