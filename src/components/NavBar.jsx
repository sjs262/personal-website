import React, { useState, useContext } from 'react';
import {
  AppBar,
  Box,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  Toolbar,
  Typography,
  Button,
} from '@mui/material';
import {
  Menu,
	Brightness4,
	Brightness7,
  GitHub,
  Home,
  FolderSpecial,
  PhotoLibrary,
  ContactPage,
} from '@mui/icons-material';
import { useNavigate, useLocation } from "react-router";
import { ThemeContext } from '../context/ThemeContext';

const navItems = ['home', 'projects', 'artwork', 'contact'];
const pathIcons = {
  '/home': <Home sx={{height: '100%'}} />,
  '/projects': <FolderSpecial sx={{height: '100%'}} />,
  '/artwork': <PhotoLibrary sx={{height: '100%'}} />,
  '/contact': <ContactPage sx={{height: '100%'}} />,
}

function NavBar() {
  const { setThemeMode, themeMode } = useContext(ThemeContext);
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();
  
  const handleDrawerToggle = () => setMobileOpen((prevState) => !prevState);
  
  const location = useLocation();
  
  return (
    <Box p='38.5px'>
      <AppBar
        color="transparent"
        elevation={0}
        sx={{
          bgcolor: 'background.paper'
        }}
      >
        <Toolbar
          sx={{
            p: 0,
            mt: '8px',
            minHeight: '40px !important',
          }}
        >
          <IconButton
            color="inherit"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{
              mx: '8px',
              display: { sm: 'none' }
            }}
          >
            <Menu />
          </IconButton>
          <Typography
            variant="h6"
            align='left'
            sx={{
              flexGrow: 1,
              display: { xs: 'center', sm: 'block' },
            }}
          >
            Soren Schultz
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.map((item) => (
              <Button
                onClick={() => navigate(`/${item}`)}
                key={item}
                sx={{
                  color: themeMode === 'dark' ? 'white' : 'black',
                  borderRadius: 0,
                  pb: `/${item}` === location.pathname ? '1px' : '6px',
                  borderBottom: `/${item}` === location.pathname ? 5 : 0
                }}
              >
                {item}
              </Button>
            ))}
            <IconButton onClick={() => setThemeMode(themeMode === 'dark' ? 'light' : 'dark')}>
              {themeMode === 'dark' ? <Brightness7/> : <Brightness4/>}
            </IconButton>
            <IconButton href='https://github.com/sjs262' target="_blank">
              <GitHub />
            </IconButton>
          </Box>
        </Toolbar>
        <Divider sx={{ lineHeight: 0, pb: '5px' }}>
          {pathIcons[location.pathname]}
        </Divider>
      </AppBar>
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        sx={{
          display: { xs: 'block', sm: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240 },
        }}
      >
        <Box onClick={handleDrawerToggle} align='center'>
          <Typography variant="h6">
            Soren Schultz
          </Typography>
          <Divider variant='middle'/>
          <List>
            {navItems.map((item) => (
              <ListItem key={item} disablePadding>
                <Button
                  key={item}
                  onClick={() => navigate(`/${item}`)}
                  sx={{
                    color: themeMode === 'dark' ? 'white' : 'black',
                    borderRadius: 0,
                    pr: `/${item}` === location.pathname ? '3px' : '8px',
                    borderRight: `/${item}` === location.pathname ? 5 : 0,
                    height: '100%'
                  }}
                  fullWidth
                >
                  {item}
                </Button>
              </ListItem>
            ))}
            <ListItem>
              <Button
                onClick={() => setThemeMode(themeMode === 'dark' ? 'light' : 'dark')}
                sx={{
                  color: themeMode === 'dark' ? 'white' : 'black',
                  borderRadius: 0,
                }}
                fullWidth
              >
                {themeMode === 'dark' ? <Brightness7/> : <Brightness4/>}
              </Button>
              <Divider orientation='vertical' flexItem />
              <Button
                href='https://github.com/sjs262'
                target="_blank"
                sx={{
                  color: themeMode === 'dark' ? 'white' : 'black',
                  borderRadius: 0,
                }}
                fullWidth
              >
                <GitHub />
              </Button>
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </Box>
  );
}

export default NavBar;