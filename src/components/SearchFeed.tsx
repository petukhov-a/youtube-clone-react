import { FC, useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';
import { useParams } from 'react-router-dom';

import { ApiItem, fetchFromAPI } from '../utils/fetchFromAPI';
import { Videos } from './';

const SearchFeed: FC = () => {
  const [videos, setVideos] = useState<ApiItem[]>([]);
  const { searchTerm } = useParams();

  useEffect(() => {
    fetchFromAPI(`search?part=snippet,id&q=${searchTerm}`)
      .then((data) => setVideos(data.items));
  }, []);

  return (
    <Box p={2} sx={{ overflowY: 'auto', height: '90vh', flex: 2 }}>
      <Typography variant="h4" fontWeight="bold" mb={2} sx={{ color: 'white' }}>
        Search Results for: <span style={{ color: '#f31503' }}>{searchTerm}</span> videos
      </Typography>
      <Videos videos={videos} />
    </Box>
  );
};
 
export default SearchFeed;
