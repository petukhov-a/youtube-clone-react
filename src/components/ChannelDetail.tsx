import { FC, useEffect, useState } from 'react';

import { Videos, ChannelCard } from './';
import { useParams } from 'react-router-dom';
import { ApiItem, fetchFromAPI } from '../utils/fetchFromAPI';
import { Box } from '@mui/material';

const ChannelDetail: FC = () => {
  const [channelDetail, setChannelDetail] = useState<ApiItem>();
  const [videos, setVideos] = useState<ApiItem[]>([]);

  const { id } = useParams();

  useEffect(() => {
    fetchFromAPI(`channels?part=snippet&id=${id}`)
      .then((data) => setChannelDetail(data?.items[0]));

    fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`)
      .then((data) => setVideos(data?.items));
  }, [id]);

  if (!channelDetail) {
    return null;
  }

  return (
    <Box minHeight="95vh">
      <Box>
        <div
          style={{
            background: 'linear-gradient(90deg, rgba(31,205,249,1) 0%, rgba(194,54,208,1) 100%)',
            zIndex: '10',
            height: '300px'
          }}
        />
        <ChannelCard marginTop='-110px' channelDetail={channelDetail} />
      </Box>
      <Box display='flex' p="2" justifyContent="center">
        <Box sx={{ mr: { sm: '100px' } }} />
        <Videos videos={videos} />
      </Box>
    </Box>
  )
}

export default ChannelDetail;