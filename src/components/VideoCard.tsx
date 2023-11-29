import { FC } from 'react';
import { ApiItem } from '../utils/fetchFromAPI';

type VideoCardProps = {
  video: ApiItem;
}

const VideoCard: FC<VideoCardProps> = ({ video }) => {
  return (
    <div>VideoCard</div>
  )
}

export default VideoCard