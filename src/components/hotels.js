import * as React from 'react';
import { useEffect, useState } from 'react'
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
import oberoi from './images/oberoi.jpg';
import rajbari from './images/rajbari.jpg';
import westin from './images/westin.jpg';
import royal from './images/royal.jpg';
import oberr from './images/oberr.jpg';
import aloft from './images/aloft.jpg';
import vanson from './images/vanson.jpg';
import roseate from './images/roseate.jpg';
import land from './images/land.jpg';
import taj from './images/taj.jpg';
import ramee from './images/ramee.jpg';
import restel from './images/restel.jpg';
import olive from './images/olive.jpg';
import trident from './images/trident.jpg';
import fab from './images/fab.jpg';
import novtel from './images/novtel.jpg';
import {format} from "date-fns"
import {DateRange} from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file

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

export default function Hotels() {

  const [search, setSearch] = useState(null);
  const [hotel, setHotel] = useState("New York")
  const[date,setDate] = useState([
    {
        startDate : new Date(),
        endDate: new Date(),
        key: 'selection'
    }
  ]);

  useEffect(() => {
    const fetchApi = async () => {
      const url = `https://hotels4.p.rapidapi.com/locations/v2/search?q=${search}&units=metric&appid=00b1918968msh05614656c615d05p1bd613jsnaa82f61c5101`
      const response = await fetch(url);
      const resJson = await response.json()
      setHotel(resJson.main);
    }
    fetchApi();
  }, [search]
  )
  return (
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
          <Box>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search your hotel"
              type="search"
              className="inputField"
              // defaultValue=""
              // onChange={(event) => {
              //   setSearch(event.target.value)
              // }}
            />
          </Search>
          <span> Date to Date</span>
          <DateRange
          editableDateInputs={true}
          onChange={item => setDate([item.selection])}
          moveRangeOnFirstSelection={false}
          ranges={date}

          style={{position: "absolute", backgroundColor: "white"}}
          />
          <span>2 Adults 2 children 1 roon</span>
          <Button  style={{ color: "white", backgroundColor: "#21b6ae", margin: "3px" }}>SEARCH</Button>
          </Box>
         
          <Button href="/signup" style={{ color: "white", backgroundColor: "#21b6ae", margin: "3px" }}>
            SignUp
          </Button>
          <Button href="/signup" style={{ color: "white", backgroundColor: "#21b6ae", margin: "3px" }}>
            SignIn
          </Button>

         
        </Toolbar>
      </AppBar>
      {
        !hotel ? (
          <><h1 style={{ textAlign: "center" }}>HOTELS FOR YOUR COMFORT</h1>


            <Box sx={{ width: '100%' }}>
              <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 4 }} style={{ marginTop: "2em" }}>
                <Grid xs={12} style={{
                  background: "#fd746c", /* fallback for old browsers */
                  background: "-webkit-linear-gradient(to right, #ff9068, #fd746c)",  /* Chrome 10-25, Safari 5.1-6 */
                  background: "linear-gradient(to right, #ff9068, #fd746c)", /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
                  marginBottom: "3em"
                }}>
                  <Item><h2>Famous Hotels of Kolkata</h2>
                    {/* <Box style={{marginRight: "0"}}> 
                      <Button href='https://www.booking.com/luxury/city/in/calcutta.en-gb.html?aid=375816&label=calcutta-FYY4NUUeuqbA3LFHigVxhgS538263914615%3Apl%3Ata%3Ap1%3Ap2%3Aac%3Aap%3Aneg%3Afi%3Atiaud-297601666475%3Akwd-3868687862%3Alp9040193%3Ali%3Adec%3Adm%3Appccp%3DUmFuZG9tSVYkc2RlIyh9YboIMJYQAPicNVDGWXPgwtU&sid=06a627ec8234a0ffa2c6d7bfd826015a&keep_landing=1&gclid=Cj0KCQjwr4eYBhDrARIsANPywCik0P8V_Wso-Lt29SbgXNP_5xsLsbvGbXDIxyj2Uxdeno2g_LxfZLAaAuGTEALw_wcB&'>
                        VISIT US
                      </Button>
                     </Box> */}
                  </Item>
                </Grid>
                <Grid xs={3}>
                  <Item><a href='https://www.booking.com/hotel/in/the-oberoi-grand-kolkata.en-gb.html?aid=375816&label=calcutta-FYY4NUUeuqbA3LFHigVxhgS538263914615%3Apl%3Ata%3Ap1%3Ap2%3Aac%3Aap%3Aneg%3Afi%3Atiaud-297601666475%3Akwd-3868687862%3Alp9040193%3Ali%3Adec%3Adm%3Appccp%3DUmFuZG9tSVYkc2RlIyh9YboIMJYQAPicNVDGWXPgwtU&sid=06a627ec8234a0ffa2c6d7bfd826015a'
                    style={{ textDecoration: "none" }}><h3>The Oberoi Grand Kolkata</h3></a>
                    <img src={oberoi} style={{ width: "100%", height: "100%" }} />
                  </Item>
                </Grid>
                <Grid xs={3}>
                  <Item><a href='https://www.booking.com/hotel/in/itc-royal-bengal-a-luxury-collection-kolkata.en-gb.html?aid=375816&label=calcutta-FYY4NUUeuqbA3LFHigVxhgS538263914615%3Apl%3Ata%3Ap1%3Ap2%3Aac%3Aap%3Aneg%3Afi%3Atiaud-297601666475%3Akwd-3868687862%3Alp9040193%3Ali%3Adec%3Adm%3Appccp%3DUmFuZG9tSVYkc2RlIyh9YboIMJYQAPicNVDGWXPgwtU&sid=e41be07a6a1f09bf1a22274d5d2ce9af'
                    style={{ textDecoration: "none" }}><h3>ITC Royal Bengal</h3></a>
                    <img src={royal} style={{ width: "100%", height: "100%" }} /></Item>
                </Grid>
                <Grid xs={3}>
                  <Item><a href='https://www.booking.com/hotel/in/the-westin-kolkata-rajarhat.en-gb.html?aid=375816&label=calcutta-FYY4NUUeuqbA3LFHigVxhgS538263914615%3Apl%3Ata%3Ap1%3Ap2%3Aac%3Aap%3Aneg%3Afi%3Atiaud-297601666475%3Akwd-3868687862%3Alp9040193%3Ali%3Adec%3Adm%3Appccp%3DUmFuZG9tSVYkc2RlIyh9YboIMJYQAPicNVDGWXPgwtU&sid=e41be07a6a1f09bf1a22274d5d2ce9af'
                    style={{ textDecoration: "none" }}><h3>The Westin Kolkata Rajarhat</h3></a>
                    <img src={westin} style={{ width: "100%", height: "100%" }} /></Item>
                </Grid>
                <Grid xs={3}>
                  <Item><a href='https://www.booking.com/hotel/in/the-rajbari-bawali.en-gb.html?aid=375816&label=calcutta-FYY4NUUeuqbA3LFHigVxhgS538263914615%3Apl%3Ata%3Ap1%3Ap2%3Aac%3Aap%3Aneg%3Afi%3Atiaud-297601666475%3Akwd-3868687862%3Alp9040193%3Ali%3Adec%3Adm%3Appccp%3DUmFuZG9tSVYkc2RlIyh9YboIMJYQAPicNVDGWXPgwtU&sid=06a627ec8234a0ffa2c6d7bfd826015a'
                    style={{ textDecoration: "none" }}><h3>The Rajbari Bawali </h3></a>
                    <img src={rajbari} style={{ width: "100%", height: "100%" }} /></Item>
                </Grid>
              </Grid>

              {/* mumbai */}
              <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 4 }} style={{ marginTop: "5em" }}>
                <Grid xs={12} style={{
                  background: "#fd746c", /* fallback for old browsers */
                  background: "-webkit-linear-gradient(to right, #ff9068, #fd746c)",  /* Chrome 10-25, Safari 5.1-6 */
                  background: "linear-gradient(to right, #ff9068, #fd746c)", /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
                  marginBottom: "3em"
                }}>
                  <Item><h2>Famous Hotels of Mumbai</h2>
                  </Item>
                </Grid>
                <Grid xs={3}>
                  <Item><a href='https://www.booking.com/hotel/in/the-taj-mahal-palace-tower.en-gb.html?aid=375816&label=calcutta-FYY4NUUeuqbA3LFHigVxhgS538263914615%3Apl%3Ata%3Ap1%3Ap2%3Aac%3Aap%3Aneg%3Afi%3Atiaud-297601666475%3Akwd-3868687862%3Alp9040193%3Ali%3Adec%3Adm%3Appccp%3DUmFuZG9tSVYkc2RlIyh9YboIMJYQAPicNVDGWXPgwtU&sid=e41be07a6a1f09bf1a22274d5d2ce9af&dest_id=-2092174&dest_type=city&dist=0&group_adults=2&group_children=0&hapos=2&hpos=2&no_rooms=1&req_adults=2&req_children=0&room1=A%2CA&sb_price_type=total&sr_order=popularity&srepoch=1661101930&srpvid=0ff478f4db8906f9&type=total&ucfs=1&activeTab=main'
                    style={{ textDecoration: "none" }}><h3>The Taj Mahal Tower Mumbai</h3></a>
                    <img src={taj} style={{ width: "100%", height: "31vh" }} />
                  </Item>
                </Grid>
                <Grid xs={3}>
                  <Item><a href='https://www.booking.com/hotel/in/trident-nariman-point.en-gb.html?aid=375816&label=calcutta-FYY4NUUeuqbA3LFHigVxhgS538263914615%3Apl%3Ata%3Ap1%3Ap2%3Aac%3Aap%3Aneg%3Afi%3Atiaud-297601666475%3Akwd-3868687862%3Alp9040193%3Ali%3Adec%3Adm%3Appccp%3DUmFuZG9tSVYkc2RlIyh9YboIMJYQAPicNVDGWXPgwtU&sid=e41be07a6a1f09bf1a22274d5d2ce9af&dest_id=-2092174;dest_type=city;dist=0;group_adults=2;group_children=0;hapos=3;hpos=3;no_rooms=1;req_adults=2;req_children=0;room1=A%2CA;sb_price_type=total;sr_order=popularity;srepoch=1661101930;srpvid=0ff478f4db8906f9;type=total;ucfs=1&#hotelTmpl'
                    style={{ textDecoration: "none" }}><h3>Trident Nariman Point</h3></a>
                    <img src={trident} style={{ width: "100%", height: "31.2vh" }} /></Item>
                </Grid>
                <Grid xs={3}>
                  <Item><a href='https://www.booking.com/hotel/in/ramee-techome.en-gb.html?aid=375816&label=calcutta-FYY4NUUeuqbA3LFHigVxhgS538263914615%3Apl%3Ata%3Ap1%3Ap2%3Aac%3Aap%3Aneg%3Afi%3Atiaud-297601666475%3Akwd-3868687862%3Alp9040193%3Ali%3Adec%3Adm%3Appccp%3DUmFuZG9tSVYkc2RlIyh9YboIMJYQAPicNVDGWXPgwtU&sid=e41be07a6a1f09bf1a22274d5d2ce9af&dest_id=-2092174;dest_type=city;dist=0;group_adults=2;group_children=0;hapos=6;hpos=6;no_rooms=1;req_adults=2;req_children=0;room1=A%2CA;sb_price_type=total;sr_order=popularity;srepoch=1661101930;srpvid=0ff478f4db8906f9;type=total;ucfs=1&#hotelTmpl'
                    style={{ textDecoration: "none" }}><h3>Ramee Techome</h3></a>
                    <img src={ramee} style={{ width: "100%", height: "31.4vh" }} /></Item>
                </Grid>
                <Grid xs={3}>
                  <Item><a href='https://www.booking.com/hotel/in/taj-lands-end.en-gb.html?aid=375816&label=calcutta-FYY4NUUeuqbA3LFHigVxhgS538263914615%3Apl%3Ata%3Ap1%3Ap2%3Aac%3Aap%3Aneg%3Afi%3Atiaud-297601666475%3Akwd-3868687862%3Alp9040193%3Ali%3Adec%3Adm%3Appccp%3DUmFuZG9tSVYkc2RlIyh9YboIMJYQAPicNVDGWXPgwtU&sid=e41be07a6a1f09bf1a22274d5d2ce9af&dest_id=-2092174&dest_type=city&dist=0&group_adults=2&group_children=0&hapos=9&hpos=9&no_rooms=1&req_adults=2&req_children=0&room1=A%2CA&sb_price_type=total&sr_order=popularity&srepoch=1661101930&srpvid=0ff478f4db8906f9&type=total&ucfs=1&activeTab=photosGallery'
                    style={{ textDecoration: "none" }}><h3>Taj Lands End</h3></a>
                    <img src={land} style={{ width: "100%", height: "31.5vh" }} /></Item>
                </Grid>
              </Grid>


              {/* delhi */}
              <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 4 }} style={{ marginTop: "5em" }}>
                <Grid xs={12} style={{
                  background: "#fd746c", /* fallback for old browsers */
                  background: "-webkit-linear-gradient(to right, #ff9068, #fd746c)",  /* Chrome 10-25, Safari 5.1-6 */
                  background: "linear-gradient(to right, #ff9068, #fd746c)", /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
                  marginBottom: "3em"
                }}>
                  <Item><h2>Famous Hotels of Delhi</h2>
                  </Item>
                </Grid>
                <Grid xs={3}>
                  <Item><a href='https://www.booking.com/hotel/in/aloft-new-delhi-aerocity.en-gb.html?aid=375816&label=calcutta-FYY4NUUeuqbA3LFHigVxhgS538263914615%3Apl%3Ata%3Ap1%3Ap2%3Aac%3Aap%3Aneg%3Afi%3Atiaud-297601666475%3Akwd-3868687862%3Alp9040193%3Ali%3Adec%3Adm%3Appccp%3DUmFuZG9tSVYkc2RlIyh9YboIMJYQAPicNVDGWXPgwtU&sid=e41be07a6a1f09bf1a22274d5d2ce9af&dest_id=-2106102&dest_type=city&dist=0&group_adults=2&group_children=0&hapos=3&hpos=3&no_rooms=1&req_adults=2&req_children=0&room1=A%2CA&sb_price_type=total&sr_order=popularity&srepoch=1661100833&srpvid=c37076d03bba030d&type=total&ucfs=1&activeTab=main'
                    style={{ textDecoration: "none" }}><h3>Aloft New Delhi Aerocity</h3></a>
                    <img src={aloft} style={{ width: "100%", height: "100%" }} />
                  </Item>
                </Grid>
                <Grid xs={3}>
                  <Item><a href='booking.com/hotel/in/vanson-delite.en-gb.html?aid=375816&label=calcutta-FYY4NUUeuqbA3LFHigVxhgS538263914615%3Apl%3Ata%3Ap1%3Ap2%3Aac%3Aap%3Aneg%3Afi%3Atiaud-297601666475%3Akwd-3868687862%3Alp9040193%3Ali%3Adec%3Adm%3Appccp%3DUmFuZG9tSVYkc2RlIyh9YboIMJYQAPicNVDGWXPgwtU&sid=e41be07a6a1f09bf1a22274d5d2ce9af&dest_id=-2106102&dest_type=city&dist=0&group_adults=2&group_children=0&hapos=5&hpos=5&no_rooms=1&req_adults=2&req_children=0&room1=A%2CA&sb_price_type=total&sr_order=popularity&srepoch=1661100833&srpvid=c37076d03bba030d&type=total&ucfs=1&activeTab=photosGallery'
                    style={{ textDecoration: "none" }}><h3>Hotel Vanson Delite</h3></a>
                    <img src={vanson} style={{ width: "100%", height: "100%" }} /></Item>
                </Grid>
                <Grid xs={3}>
                  <Item><a href='https://www.booking.com/hotel/in/roseate-new-delhi.en-gb.html?aid=375816&label=calcutta-FYY4NUUeuqbA3LFHigVxhgS538263914615%3Apl%3Ata%3Ap1%3Ap2%3Aac%3Aap%3Aneg%3Afi%3Atiaud-297601666475%3Akwd-3868687862%3Alp9040193%3Ali%3Adec%3Adm%3Appccp%3DUmFuZG9tSVYkc2RlIyh9YboIMJYQAPicNVDGWXPgwtU&sid=e41be07a6a1f09bf1a22274d5d2ce9af&dest_id=-2106102;dest_type=city;dist=0;group_adults=2;group_children=0;hapos=6;hpos=6;no_rooms=1;req_adults=2;req_children=0;room1=A%2CA;sb_price_type=total;sr_order=popularity;srepoch=1661100833;srpvid=c37076d03bba030d;type=total;ucfs=1&#hotelTmpl'
                    style={{ textDecoration: "none" }}><h3>Roseate House</h3></a>
                    <img src={roseate} style={{ width: "100%", height: "100%" }} /></Item>
                </Grid>
                <Grid xs={3}>
                  <Item><a href='https://www.booking.com/hotel/in/the-oberoi-new-delhi.en-gb.html?aid=375816&label=calcutta-FYY4NUUeuqbA3LFHigVxhgS538263914615%3Apl%3Ata%3Ap1%3Ap2%3Aac%3Aap%3Aneg%3Afi%3Atiaud-297601666475%3Akwd-3868687862%3Alp9040193%3Ali%3Adec%3Adm%3Appccp%3DUmFuZG9tSVYkc2RlIyh9YboIMJYQAPicNVDGWXPgwtU&sid=e41be07a6a1f09bf1a22274d5d2ce9af&dest_id=-2106102;dest_type=city;dist=0;group_adults=2;group_children=0;hapos=10;hpos=10;no_rooms=1;req_adults=2;req_children=0;room1=A%2CA;sb_price_type=total;sr_order=popularity;srepoch=1661100833;srpvid=c37076d03bba030d;type=total;ucfs=1&#hotelTmpl'
                    style={{ textDecoration: "none" }}><h3>The Oberoi New Delhi</h3></a>
                    <img src={oberr} style={{ width: "100%", height: "100%" }} /></Item>
                </Grid>
              </Grid>

              {/* hyderabad*/}
              <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 4 }} style={{ marginTop: "5em" }}>
                <Grid xs={12} style={{
                  background: "#fd746c", /* fallback for old browsers */
                  background: "-webkit-linear-gradient(to right, #ff9068, #fd746c)",  /* Chrome 10-25, Safari 5.1-6 */
                  background: "linear-gradient(to right, #ff9068, #fd746c)", /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
                  marginBottom: "3em"
                }}>
                  <Item><h2>Famous Hotels of Hyderabad</h2>
                  </Item>
                </Grid>
                <Grid xs={3}>
                  <Item><a href='https://www.booking.com/hotel/in/restel-studio-flats-hyderabad.en-gb.html?aid=375816&label=calcutta-FYY4NUUeuqbA3LFHigVxhgS538263914615%3Apl%3Ata%3Ap1%3Ap2%3Aac%3Aap%3Aneg%3Afi%3Atiaud-297601666475%3Akwd-3868687862%3Alp9040193%3Ali%3Adec%3Adm%3Appccp%3DUmFuZG9tSVYkc2RlIyh9YboIMJYQAPicNVDGWXPgwtU&sid=e41be07a6a1f09bf1a22274d5d2ce9af&dest_id=-2097701&dest_type=city&dist=0&group_adults=2&group_children=0&hapos=1&hpos=1&no_rooms=1&req_adults=2&req_children=0&room1=A%2CA&sb_price_type=total&sr_order=popularity&srepoch=1661102715&srpvid=7a6d7a7d96660248&type=total&ucfs=1&activeTab=main'
                    style={{ textDecoration: "none" }}><h3>RESTEL STUDIO FLATS</h3></a>
                    <img src={restel} style={{ width: "100%", height: "100%" }} />
                  </Item>
                </Grid>
                <Grid xs={3}>
                  <Item><a href='https://www.booking.com/hotel/in/olive-service-apartments-hyderabad.en-gb.html?aid=375816&label=calcutta-FYY4NUUeuqbA3LFHigVxhgS538263914615%3Apl%3Ata%3Ap1%3Ap2%3Aac%3Aap%3Aneg%3Afi%3Atiaud-297601666475%3Akwd-3868687862%3Alp9040193%3Ali%3Adec%3Adm%3Appccp%3DUmFuZG9tSVYkc2RlIyh9YboIMJYQAPicNVDGWXPgwtU&sid=e41be07a6a1f09bf1a22274d5d2ce9af&dest_id=-2097701;dest_type=city;dist=0;group_adults=2;group_children=0;hapos=2;hpos=2;no_rooms=1;req_adults=2;req_children=0;room1=A%2CA;sb_price_type=total;sr_order=popularity;srepoch=1661102715;srpvid=7a6d7a7d96660248;type=total;ucfs=1&#hotelTmpl'
                    style={{ textDecoration: "none" }}><h3>Olive Service Apartments Hitech City</h3></a>
                    <img src={olive} style={{ width: "100%", height: "30.8vh" }} /></Item>
                </Grid>
                <Grid xs={3}>
                  <Item><a href='https://www.booking.com/hotel/in/novotel-hyderabad-convention-center.en-gb.html?aid=375816&label=calcutta-FYY4NUUeuqbA3LFHigVxhgS538263914615%3Apl%3Ata%3Ap1%3Ap2%3Aac%3Aap%3Aneg%3Afi%3Atiaud-297601666475%3Akwd-3868687862%3Alp9040193%3Ali%3Adec%3Adm%3Appccp%3DUmFuZG9tSVYkc2RlIyh9YboIMJYQAPicNVDGWXPgwtU&sid=e41be07a6a1f09bf1a22274d5d2ce9af&dest_id=-2097701&dest_type=city&dist=0&group_adults=2&group_children=0&hapos=3&hpos=3&no_rooms=1&req_adults=2&req_children=0&room1=A%2CA&sb_price_type=total&sr_order=popularity&srepoch=1661102715&srpvid=7a6d7a7d96660248&type=total&ucfs=1&activeTab=main'
                    style={{ textDecoration: "none" }}><h3>Novotel Hyderabad Convention Centre</h3></a>
                    <img src={novtel} style={{ width: "100%", height: "27.3vh" }} /></Item>
                </Grid>
                <Grid xs={3}>
                  <Item><a href='https://www.booking.com/hotel/in/fabhotel-eminent-suites-hyderabad.en-gb.html?aid=375816&label=calcutta-FYY4NUUeuqbA3LFHigVxhgS538263914615%3Apl%3Ata%3Ap1%3Ap2%3Aac%3Aap%3Aneg%3Afi%3Atiaud-297601666475%3Akwd-3868687862%3Alp9040193%3Ali%3Adec%3Adm%3Appccp%3DUmFuZG9tSVYkc2RlIyh9YboIMJYQAPicNVDGWXPgwtU&sid=e41be07a6a1f09bf1a22274d5d2ce9af&dest_id=-2097701;dest_type=city;dist=0;group_adults=2;group_children=0;hapos=4;hpos=4;no_rooms=1;req_adults=2;req_children=0;room1=A%2CA;sb_price_type=total;sr_order=popularity;srepoch=1661102715;srpvid=7a6d7a7d96660248;type=total;ucfs=1&#hotelTmpl'
                    style={{ textDecoration: "none" }}><h3>FabHotel Eminent Suites</h3></a>
                    <img src={fab} style={{ width: "100%", height: "30.8vh" }} /></Item>
                </Grid>
              </Grid>
            </Box>


          </>
        ) : (
          <><h1>{search}</h1></>
        )
      }
    </Box>


  )
}

