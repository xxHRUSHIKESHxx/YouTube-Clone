import { useState, useEffect } from 'react';
import { Box,  Typography } from '@mui/material';
import { fetchFromAPI } from '../utils/fetchFromAPI';
import {Videos } from './';
import { FaceRetouchingNatural } from '@mui/icons-material';
import { useParams } from 'react-router-dom';


const SearchFeed = () => {

  

  const [videos, setVideos] = useState([]);
  const { searchTerm } = useParams();

 useEffect(()=>{

  fetchFromAPI(`search?part=snippet&q=${searchTerm}`) 
  .then((data) => {setVideos(data.items)})
  .catch((error) => {
    console.log(error)
  })
 }, [searchTerm]);

  return (
    <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
    <Typography
      variant="h4"
      fontWeight="bold"
      mb={2}
      sx={{
        color: "white",
      }}
    >
     Search Results For: <span style={{ color: "#a503fc" }}>{searchTerm}</span> videos
    </Typography>
    <Videos videos={videos} />
  </Box>
  );
};

export default SearchFeed;
  
