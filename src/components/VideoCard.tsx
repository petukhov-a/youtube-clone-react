import { FC } from 'react';
import { ApiItem } from '../utils/fetchFromAPI';

import { demoThumbnailUrl, demoVideoUrl, demoVideoTitle, demoChannelUrl, demoChannelTitle } from '../utils/constants';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { CheckCircle, Snooze } from '@mui/icons-material';

type VideoCardProps = {
  video: ApiItem;
}

const VideoCard: FC<VideoCardProps> = ({ video }) => {
  const { id: { videoId }, snippet } = video;

  return (
    <Card sx={{ width: { md: '320px', xs: '100%' }, boxShadow: '0', borderRadius: 'none' }}>
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
        <CardMedia
          image={snippet?.thumbnails?.high?.url as string}
          alt={snippet?.title}
          sx={{ width: 358, height: 180 }}
          component='img'
        />
      </Link>
      <CardContent  sx={{ backgroundColor: '#1e1e1e', height: '106px' }}>
        <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
          <Typography variant='subtitle1' fontWeight="bold" color="#fff">
            {snippet?.title.slice(0, 60) ||
             demoVideoTitle.slice(0, 60)}
          </Typography>
        </Link>
        <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl}>
          <Typography variant='subtitle2' fontWeight="bold" color="gray">
            {snippet?.channelTitle ||
             demoChannelTitle}
             <CheckCircle sx={{ fontSize: 12, color: 'gray', ml: '5px' }} />
          </Typography>
        </Link>
      </CardContent>
    </Card>
  )
}

export default VideoCard;