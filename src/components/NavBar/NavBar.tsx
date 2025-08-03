import {useState} from 'react';
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
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Menu } from '@mui/icons-material';
import theme from '../../../theme';
import {HashLink as Link} from 'react-router-hash-link';
import { scrollToTop } from '../../helper/contants';


const drawerWidth = 240;
const navItems = ['Features', 'How it works?', 'Contact Us'];

export default function NavBar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center'}}>
      <Typography variant="h6" sx={{ my: 2, textAlign: 'center' }}>
        <Link to={'/'} className='flex align-middle justify-center' onClick={scrollToTop}>
                    <img width={'150px'} src='/cnarios.svg' alt='cnarios logo'/>

        </Link>
      </Typography>
      <Divider />
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

  return (
    <Box sx={{ display: 'flex', marginBottom: '4rem'}}>
      <CssBaseline />
      <AppBar component="nav" sx={{backgroundColor: theme.palette.background.default, color: theme.palette.text.primary}}>
        <Toolbar sx={{padding: '12px 32px !important'}}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <Menu />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' }, color: theme.palette.primary.main, fontWeight: '600' }}
          >
                    <Link to={'/'} smooth onClick={scrollToTop}>
                    <img width={'150px'} src='/cnarios.svg' alt='cnarios logo'/>
                    </Link>

          </Typography>
          <Box className='gap-4' sx={{ display: { xs: 'none', sm: 'flex' } }}>
            {navItems.map((item) => (
                <Link
  to={`/#${item.replaceAll(' ', '-').replace('?', '').toLocaleLowerCase()}`}
  key={item}
  smooth
  className="text-base border-b-2 border-transparent hover:border-[#4052B5] transition duration-300"
>
  {item}
</Link>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
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
    </Box>
  );
}
