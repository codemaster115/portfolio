import { useState, useEffect } from 'react';
import { Typography, Box, Grid } from '@mui/material';
import axios from 'axios';
import MockCard from './MockCard';

function App() {
  let [cardData, setCardData ] = useState();

  useEffect(() => {
    axios.get("http://www.7timer.info/bin/api.pl?lon=113.17&lat=23.09&product=astro&output=json")
    .then((res) => {
      setCardData(res.data.dataseries);
    })
    .catch((error) => {
      console.log(error);
    })
  }, [])

  if (!cardData) {
    return null;
  }
  return (
    <Grid>
      <Box sx={{ my: 4 }}>
        <Typography align='center' variant="h3" gutterBottom>
          Portfolio Grid 4
        </Typography>
        <Typography align='center' variant='h6'>
          This grid shows the items pages in a popup
        </Typography>
      </Box>
      <Grid container spacing={2}>
        {
          cardData.map((card, idx) => 
            <Grid key={idx}item xs={12} sm={6} md={4} lg={2.4}>
              <MockCard cardInfo={card} />
            </Grid>)
        }
      </Grid>
    </Grid>
  );
}

export default App;
