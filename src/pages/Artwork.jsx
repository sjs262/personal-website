import React, { useState } from 'react';

import ArtworkTile from '../components/ArtworkTile';

import {
  Box,
  Grid,
  Modal
} from '@mui/material';

const imageList = [
  'https://firebasestorage.googleapis.com/v0/b/sorenschultz-2c08e.appspot.com/o/AluminumTendril.png?alt=media&token=e1dc8d36-6a07-4dc2-9792-dc63e11ba0e7',
  'https://firebasestorage.googleapis.com/v0/b/sorenschultz-2c08e.appspot.com/o/AshenValley.png?alt=media&token=f95ae5c4-afe1-47af-a228-e5e66a66fb0e',
  'https://firebasestorage.googleapis.com/v0/b/sorenschultz-2c08e.appspot.com/o/BuddhasRetreat.png?alt=media&token=a5b65b05-54f7-4f1a-8a22-fbccb6cbd139',
  'https://firebasestorage.googleapis.com/v0/b/sorenschultz-2c08e.appspot.com/o/CaterpillarFeet.png?alt=media&token=743f8d08-c142-4e2f-93a2-81bceab52f4d',
  'https://firebasestorage.googleapis.com/v0/b/sorenschultz-2c08e.appspot.com/o/EatYourGreens.png?alt=media&token=fa8dbe9b-d97b-49b0-bf66-686086ac34e0',
  'https://firebasestorage.googleapis.com/v0/b/sorenschultz-2c08e.appspot.com/o/Endless%20Delta.png?alt=media&token=23e7bdab-02a5-4c10-b330-47ecdb7443ec',
  'https://firebasestorage.googleapis.com/v0/b/sorenschultz-2c08e.appspot.com/o/Entanglement.png?alt=media&token=68f4bebc-8a85-432f-8f74-fb2b9732969b',
  'https://firebasestorage.googleapis.com/v0/b/sorenschultz-2c08e.appspot.com/o/Flowering%20Hell.png?alt=media&token=9914cf74-fac1-4479-818e-5330f26b5961',
  'https://firebasestorage.googleapis.com/v0/b/sorenschultz-2c08e.appspot.com/o/Honey%20Comb.png?alt=media&token=1a3e5e36-82bf-4f9c-a331-122170ca71c7',
  'https://firebasestorage.googleapis.com/v0/b/sorenschultz-2c08e.appspot.com/o/LavanderField.png?alt=media&token=2d05b996-0f03-447d-91ca-f13cbc7f22ff',
  'https://firebasestorage.googleapis.com/v0/b/sorenschultz-2c08e.appspot.com/o/LizardWorld.png?alt=media&token=d95bcd3e-0285-4e8c-9df9-9a6861220966',
  'https://firebasestorage.googleapis.com/v0/b/sorenschultz-2c08e.appspot.com/o/buddhabrot.png?alt=media&token=c71096b1-2620-4cd5-abae-c3d8383f05a9',
  'https://firebasestorage.googleapis.com/v0/b/sorenschultz-2c08e.appspot.com/o/Poisonous%20Forest.png?alt=media&token=1d6fc0bf-b7da-4d46-a7b2-610eca114fa7',
  'https://firebasestorage.googleapis.com/v0/b/sorenschultz-2c08e.appspot.com/o/RoseBush.png?alt=media&token=1c54c8ee-bb49-42f8-802c-4480cedc9b10',
  'https://firebasestorage.googleapis.com/v0/b/sorenschultz-2c08e.appspot.com/o/SkyHigh.png?alt=media&token=eb805653-ef64-482f-8b61-18a2007cccb9',
  'https://firebasestorage.googleapis.com/v0/b/sorenschultz-2c08e.appspot.com/o/StaringIntoTheVoid.png?alt=media&token=9d8ab60f-5e0d-447f-8822-4b5a1b498092',
  'https://firebasestorage.googleapis.com/v0/b/sorenschultz-2c08e.appspot.com/o/StarrySky.png?alt=media&token=b0e0dda0-6569-436e-88d9-aaeeaa20b057',
  "https://firebasestorage.googleapis.com/v0/b/sorenschultz-2c08e.appspot.com/o/Sun%20God's%20Banner.png?alt=media&token=99ef1957-7e3b-4816-91b1-36e3b7d3251d",
  'https://firebasestorage.googleapis.com/v0/b/sorenschultz-2c08e.appspot.com/o/Tides%20of%20Time.png?alt=media&token=d06c7bb8-e792-41b8-8dc2-69df0a2cb3ff',
  'https://firebasestorage.googleapis.com/v0/b/sorenschultz-2c08e.appspot.com/o/terminalBackground.png?alt=media&token=665f8cba-053c-4074-b18c-3704a316db5f',
  'https://firebasestorage.googleapis.com/v0/b/sorenschultz-2c08e.appspot.com/o/Onyx.png?alt=media&token=b6ed1ad6-a57a-4349-a2b5-754369d42668',
  'https://firebasestorage.googleapis.com/v0/b/sorenschultz-2c08e.appspot.com/o/Oasis%20at%20Sunrise.png?alt=media&token=fc78f01e-8417-4ec7-903a-13e464aecc34',
]

function Artwork() {
  const [modal, setModal] = useState(null)
  
  return (
    <Box  sx={{ overflow: 'hidden', mx: '16px' }}>
      <Grid container spacing={0}>
        {
          imageList.map((image) =>
            <Grid key={image} item xs={6} sm={4} md={3} lg={2}>
              <ArtworkTile
                src={image}
                onClick={() => setModal(image)}
              />
            </Grid>
          )
        }
      </Grid>
      <Modal
        open={modal !== null}
        onClose={() => setModal(null)}
        sx={{
          display: 'flex',
          position: 'fixed',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
          height: '100%',
          p: '40px',
          lineHeight: 0.6,
        }}
      >
        <img
          src={modal}
          alt={modal}
          style={{ maxHeight: "100%", maxWidth: "100%" }}
        />
      </Modal>
    </Box>
  );
}

export default Artwork;