import { BrowserRouter, Routes, Route  } from 'react-router-dom';
import {Box} from '@mui/material';

import {Navbar,Feed,VedioDetail,ChannelDetail,SearchFeed } from './components'

const App = () => (
    <BrowserRouter>
    <Box sx={{backgroundColor:'#000'}}>
        <Navbar/>
        <Routes>
            <Route path="/" exact element={<Feed/>}/>
            <Route path="/video/:id"  element={<VedioDetail/>}/>
            <Route path="/channel/:id"  element={<ChannelDetail/>}/>
            <Route path="/search/:searchTerm"  element={<SearchFeed/>}/>

            </Routes>

         </Box>
    </BrowserRouter>
)

export default App;