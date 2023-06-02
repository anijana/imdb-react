
import { Box, styled } from '@mui/material';
import React, { useEffect, useState } from 'react'
import Banner from '../components/Banner';
import Header from '../components/common/Header'
import Slide from '../components/Slide';
import UpNext from '../components/UpNext';
import { NOWPLAYING_API_URL } from '../constants/constants';
import { categoryMovies } from '../services/api';

const Component = styled(Box)`
  padding: 0 115px;
`

const Home = () => {

  const [movies, setMovies] = useState([]);

  useEffect(()=>{
    const getData = async () =>{
      let response = await categoryMovies(NOWPLAYING_API_URL);
      setMovies(response.results);
    }
    getData();
  },[]);
  return (
    <>
        <Header/>
        <Component>
        <Box style = {{display:'flex', padding:'20px 0'}}>
          <Banner movies = {movies}/>
          <UpNext movies = {movies}/>
        </Box>
        <Slide movies={movies}/>
        <Slide movies={movies}/>
        <Slide movies={movies}/>
        <Slide movies={movies}/>
        </Component>
    </>
  )
}

export default Home