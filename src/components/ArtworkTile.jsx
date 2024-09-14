import React, { useState } from 'react';
import {
  Button,
  Skeleton,
} from '@mui/material';

import './artworkTile.css';

function ArtworkTile({ name, src, onClick }) {
  const [loaded, setLoaded] = useState(false);
  
  return (
    <Button
      onClick={onClick}
      sx={{
        position: 'relative',
        p: 0,
        overflow: 'hidden',
        borderRadius: 0,
        width: '100%',
        height: '100% !important',
        flexDirection: 'column',
      }}
    >
      {!loaded &&
        <Skeleton
          variant='rectangular'
          sx={{
            width: '100%',
            height: '100%',
          }}
        />
      }
      {
        <img
          src={src}
          alt={name}
          onLoad={() => setLoaded(true)}
          width='100%'
          height={!loaded ? '0%' : '100%'}
        />
      }
    </Button>
  )
}

export default ArtworkTile;