import { FC } from 'react';
import { ApiItem } from '../utils/fetchFromAPI';

import { demoThumbnailUrl, demoVideoUrl, demoVideoTitle, demoChannelUrl, demoChannelTitle } from '../utils/constants';
import { Card, CardMedia } from '@mui/material';
import { Link } from 'react-router-dom';

type VideoCardProps = {
  video: ApiItem;
}

const VideoCard: FC<VideoCardProps> = ({ video }) => {
  const { id: { videoId }, snippet } = video;

  return (
    <Card>
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
        <CardMedia
          image={snippet?.thumbnails?.high?.url as string}
          alt={snippet?.title}
          sx={{ width: 358, height: 180 }}
          component='img'
        />
      </Link>
    </Card>
  )
}

export default VideoCard;