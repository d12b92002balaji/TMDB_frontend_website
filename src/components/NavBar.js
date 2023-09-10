import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl/FormControl';
import { InputLabel } from '@mui/material';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

const drawerWidth = 240;
const navItems = ['Watch List', 'Sign in','language'];
function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };
  const [language, setLanguage] = React.useState('');

  const handleChange = (event) => {
    setLanguage(event.target.value);
  };
  const lang=(
    <Box sx={{ minWidth: 120 }}>
     <FormControl fullWidth>
       <InputLabel id="demo-simple-select-label">Language</InputLabel>
       <Select
         labelId="demo-simple-select-label"
         id="demo-simple-select"
         value={language}
         label="language"
         onChange={handleChange}
       >
         <MenuItem value={10}>english</MenuItem>
         <MenuItem value={20}>tamil</MenuItem>
         <MenuItem value={30}>telugu</MenuItem>
       </Select>
     </FormControl>
     </Box>
  );

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        TMDB
      </Typography>
      <Divider />
      {lang}
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
     
    
  );
 

  const container = window !== undefined ? () => window().document.body : undefined;
  return (
      
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar component="nav">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            TMDB
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.map((item) => (
              <Button key={item} sx={{ color: '#fff' }}>
                {item}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
          
        </Drawer>
      </nav>
      
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
        <Typography>
         
        </Typography>
      </Box>
    </Box>
  );
}
DrawerAppBar.propTypes = {
  window: PropTypes.func,
};
export default DrawerAppBar;