import React from 'react'
import { useState } from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import   { useContext } from "react";
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import { ColorModeContext } from "../../theme";
import { Box, Container, IconButton, Stack, Typography, useTheme } from "@mui/material";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import { DarkModeOutlined, ExpandMore, LightModeOutlined } from "@mui/icons-material";



const options = [
  'AR',
  'ENG',
  'GER',
  
  'FRE',
];



const Header1 = ()=>{
  const colorMode = useContext(ColorModeContext);
  const theme = useTheme();
  const [anchorEl, setAnchorEl] = useState(null)
  const [selectedIndex, setSelectedIndex] = useState(1);
  const open = Boolean(anchorEl);
  const handleClickListItem = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (
    event,
    index,
  ) => {
    setSelectedIndex(index);
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

    return (
      
      <Box sx={{
        bgcolor:"#2B3410",
        py:"4px",
        borderBottomRightRadius:'4px',
        borderBottomLeftRadius:'4px',

      }}>
    <Container>
         <Stack direction={"row"} alignItems={"center"}  >

         <Typography
         
         sx={{
          mr:2,
          p:'3px 10px',
          bgcolor : "#D23F57",
          borderRadius:"12px",
          fontSize:"10px",
          fontWeight:"bold",
          color : "#fff"

         }}
         variant="body2"> Hot </Typography>
         <Typography
         sx={{
          fontSize : "12px",
          fontWeight:300,
          color:"red",
         }}
         variant = "body2"
         
         >
          Free Express Shipping
         </Typography>

         

         
     <Box flexGrow={1} />

        

      <div>
      {theme.palette.mode === "light" ? (
        <IconButton
          onClick={() => {
            localStorage.setItem(
              "mode",
              theme.palette.mode === "dark" ? "light" : "dark"
            );
            colorMode.toggleColorMode();
          }}
          color="inherit"
        >
          <LightModeOutlinedIcon fontSize='small' />
        </IconButton>
      ) : (
        <IconButton
          onClick={() => {
            localStorage.setItem(
              "mode",
              theme.palette.mode === "dark" ? "light" : "dark"
            );
            colorMode.toggleColorMode();
          }}
          color="inherit"
        >
          <DarkModeOutlined fontSize='small' />
        </IconButton>
      )}
      </div>










      <List
        component="nav"
        aria-label="Device settings"
        sx={{p:0,m:0}}
        
      >
        <ListItemButton
          id="lock-button"
          aria-haspopup="listbox"
          aria-controls="lock-menu"
          aria-label="when device is locked"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClickListItem}
          sx={{'&:hover':{cursor:'pointer' },px:1 }}
        >
          <ListItemText
          sx={{".MuiTypography-root" : {fontSize:"11px",color:'#fff'} }}
            
            secondary={options[selectedIndex]}
          />
          <ExpandMore sx={{fontSize:'16px'}} />
        </ListItemButton>
      </List>
      <Menu
        id="lock-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'lock-button',
          role: 'listbox',
        }}
      >
        {options.map((option, index) => (
          <MenuItem
          sc={{fontSize:'11px' , p:'3px 10px' , minHeight:'10px'}}
            key={option}
            
            selected={index === selectedIndex}
            onClick={(event) => handleMenuItemClick(event, index)}
          >
            {option}
          </MenuItem>
        ))}
      </Menu>
















       <FacebookIcon
       sx={{fontSize : '16px',
        color: '#fff',
        mx:1
       }}
       
       />
       <InstagramIcon
       sx={{
        fontSize:'16px',
        color:'#fff'
       }}
       />
       <TwitterIcon
        sx={{fontSize: '16px' ,
          color: '#fff'
        }}

       />

      </Stack>
      </Container>

    </Box>
    )
}
export default Header1;