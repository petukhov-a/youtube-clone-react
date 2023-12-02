import { FC } from 'react';
import { ApiItem } from '../utils/fetchFromAPI';
import { Box, Stack } from '@mui/material';
import { VideoCard, ChannelCard } from './';

type VideosProps = {
  videos: ApiItem[];
  direction?: "row" | "column" | "row-reverse" | "column-reverse" | undefined;
}

const Videos: FC<VideosProps> = ({ videos, direction }) => {

  if (!videos.length) {
    return (
      <div>
        ...loading
      </div>
    );
  }

  return (
    <Stack direction={direction || "row"} flexWrap="wrap" justifyContent="start" gap={2}>
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