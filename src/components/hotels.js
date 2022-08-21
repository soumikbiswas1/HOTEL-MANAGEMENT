import * as React from 'react';
import {useEffect,useState} from 'react'
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import { Button } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import Paper from '@mui/material/Paper';


const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
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
    pointerEvents: 'none',
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

  
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));
  
export default function Hotels(){

    const[search, setSearch] = useState(null);
    const[hotel, setHotel] = useState("New York")

    useEffect(() => {
        const fetchApi = async () =>{
            const url = `https://hotels4.p.rapidapi.com/locations/v2/search?q=${search}&units=metric&appid=00b1918968msh05614656c615d05p1bd613jsnaa82f61c5101`
            const response = await fetch(url);
            const resJson = await response.json()
            setHotel(resJson.main);
        }
        fetchApi();
    },[search]
    )
    return(
        <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="open drawer"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
            >
             Hotels Of Your Comfort
            </Typography>
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search your hotel"
                type="search"
                className="inputField"
                  defaultValue=""
                  onChange= {(event) =>{   
                      setSearch(event.target.value)
                  }}
              />
            </Search>
            <Button href="/signup" style={{color: "white",backgroundColor: "#21b6ae",margin: "3px"}}>
              SignUp
            </Button>
            <Button href="/signup" style={{color: "white",backgroundColor: "#21b6ae",margin: "3px"}}>
              SignIn
            </Button>
          </Toolbar>
        </AppBar>
        {
            !hotel ? (
              <><h1 style={{textAlign: "center"}}>HOTELS FOR YOUR COMFORT</h1>


                <Box sx={{ width: '100%' }}>
                  <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid xs={6}>
                      <Item>1</Item>
                    </Grid>
                    <Grid xs={6}>
                      <Item>2</Item>
                    </Grid>
                    <Grid xs={6}>
                      <Item>3</Item>
                    </Grid>
                    <Grid xs={6}>
                      <Item>4</Item>
                    </Grid>
                  </Grid>
                </Box>
 

                </>  
            ) :(
                <><h1>{search}</h1></>
            )
       }
      </Box>
       
       
    )
}

