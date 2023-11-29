import { FC } from 'react';
import { ApiItem } from '../utils/fetchFromAPI';

type ChannelCardProps = {
  channelDetail: ApiItem;
}

const ChannelCard: FC<ChannelCardProps> = ({ channelDetail }) => {
  return (
    <div>ChannelCard</div>
  )
}

export default ChannelCard