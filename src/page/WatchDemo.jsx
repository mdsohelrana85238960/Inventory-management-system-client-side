

import React from 'react';
import { Helmet } from 'react-helmet';

const WatchDemo = () => {
  const videoId = 'wWQAN7bBlI8';

  // Construct the YouTube video URL
  const youtubeUrl = `https://www.youtube.com/embed/${videoId}`;

  return (
    
    <div className='flex justify-center items-center my-20'>
      <Helmet >
            <title>Inventory | Demo</title>
            </Helmet>
      <iframe
        width="760"
        height="415"
        src={youtubeUrl}
        title="YouTube Video Demo"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default WatchDemo;
