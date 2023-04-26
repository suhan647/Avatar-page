import * as React from 'react';
import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';
import logo1 from '../../logo/logo1.png'
import { Badge } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  marginLeft: 0,
  // marginRight:0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

export default function SearchAppBar() {

  const cartlength = useSelector((state) => state.AvatarCart.items)

  return (
    <Box sx={{ flexGrow: 1, }}>
      
      <AppBar position="fixed" sx={{background:"linear-gradient(91.1deg, rgb(57, 31, 105) -2.3%, rgb(115, 43, 155) 44.4%, rgb(231, 75, 184) 120.4%);"}}>
        <Toolbar>
            <img src={logo1} alt='logo' height='50px'  />

<Box sx={{display:'flex', justifyContent:'space-between', }}>
  <Box sx={{display:'flex', alignItems:'center', mr:'50px'}}>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{  display: { xs: 'none', sm: 'block' },ml:5, fontSize:'22px', fontWeight:500,   }}
          >
            Go To Market Page
          </Typography>
          </Box>

          <Box sx={{display:'flex', alignItems:'center', ml:'420px'}}>
           
          <Search  sx={{backgroundColor:'white', color:'black'}}>
            <SearchIconWrapper>
              <SearchIcon sx={{color:'black'}} />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>

          <div style={{backgroundColor:'black', height:'40px', width:'40px', display:'flex', justifyContent:'center', alignItems:"center", borderRadius:'5px', marginLeft:'10px'}}>
          <Badge  badgeContent={4} color="error">
          <NotificationsIcon />
          </Badge>
          </div>

          <div style={{backgroundColor:'black', height:'40px', width:'40px', display:'flex', justifyContent:'center', alignItems:"center", borderRadius:'5px', marginLeft:'10px'}}>
            <NavLink to='/cart' sx={{backgroundColor:'white', color:'white'}}>
          <Badge  badgeContent={cartlength.length ? cartlength.length : "0" } color="error">
          <ShoppingCartIcon sx={{ color:'white'}}/>
          </Badge>
          </NavLink >
          </div>

          <div style={{backgroundColor:'white', height:'40px', width:'40px', display:'flex', justifyContent:'center', alignItems:"center", borderRadius:'5px', marginLeft:'10px', marginRight:0}}>
          <img alt='profile' src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.ndmzWlDy0P6s6JxKVyJUfAHaHa%26pid%3DApi&f=1&ipt=f6d8ddfb13add17158ce1263e362a537dccd8848803711e8ba2b1283b538edf8&ipo=images' hieght="30px" width="30px"  />
          </div>
          </Box>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}