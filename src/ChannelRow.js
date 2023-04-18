import { Avatar } from '@material-ui/core';
import React from 'react';
import "./ChannelRow.css";
import CheckCircleOutlineOutlined  from '@material-ui/icons/CheckCircleOutlineOutlined';

function ChannelRow ({image,channel,sbubs,noOfVideos,descroption,verified
}) {
  return (
    <div className='channelRow'>
    <Avatar className='channelRow_logo'
     alt={channel} src={image} />
     <div className='channelRow_text'>
     <h4 >
     {channel} {verified && <CheckCircleOutlineOutlined /> } 
     </h4>
     <p>
     {sbubs} subscribers {noOfVideos} videos
     </p>
     <p>{descroption}</p>
     </div>
      
    </div>
  )
}

export default  ChannelRow;
