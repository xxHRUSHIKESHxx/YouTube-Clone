import { useState, useEffect } from 'react';
import { Box, Stack, Typography } from '@mui/material';
import { fetchFromAPI ,axios} from '../utils/fetchFromAPI';
import { Sidebar, Videos } from './';
import { FaceRetouchingNatural } from '@mui/icons-material';


const Feed = () => {

  const [selectedcategory, setselectedcategory] = useState(['New']);

  const [videos, setVideos] = useState([]);

 useEffect(()=>{

  fetchFromAPI(`search?part=snippet&q=${selectedcategory}`) 
  .then((data) => {setVideos(data.items)})
  .catch((error) => {
    console.log(error)
  })
 }, [selectedcategory]);

  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
      <Box
        sx={{
          height: { sx: "auto", md: '92vh' },
          borderRight: "1px solid #3d3d3d",
          px: { sx: 0, md: 2 },
        }}
      >
        <Sidebar
        selectedCategory={selectedcategory}
        setselectedcategory ={setselectedcategory}
        />
        <Typography
          className="copyright"
          variant="body2"
          sx={{ mt: 1.5, color: "#fff" }}
        >
          CopyRight 2023 xxHRUSHIKESHxx
        </Typography>
      </Box>

      <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
        <Typography
          variant="h4"
          fontWeight="bold"
          mb={2}
          sx={{
            color: "#fff",
          }}
        >
          {selectedcategory} <span style={{ color: "#a503fc" }}>videos</span>
        </Typography>
        <Videos videos={videos} />
      </Box>
    </Stack>
  );
};

export default Feed;
  
