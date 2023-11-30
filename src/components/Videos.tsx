import { FC } from 'react';
import { ApiItem } from '../utils/fetchFromAPI';
import { Box, Stack } from '@mui/material';
import { VideoCard, ChannelCard } from './';

type VideosProps = {
  videos: ApiItem[];
}

const Videos: FC<VideosProps> = ({ videos }) => {

  return (
    <Stack direction="row" flexWrap="wrap" justifyContent="start" gap={2}>
      {videos.map((item: ApiItem, idx: number) => (
        <Box key={idx}>
          {item.id.videoId && <VideoCard video={item} />}
          {item.id.channelId && <ChannelCard channelDetail={item} />}
        </Box>
      ))}
    </Stack>
  )
}

export default Videos