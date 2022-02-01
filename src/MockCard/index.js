import { Card, Typography, Box, Link, Grid, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';

const CardGrid = styled(Card)(() => ({
  width: '100%', 
  paddingTop: '100%',
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  cursor: 'pointer',
  '&:hover .text-grid': {
    transform: 'scale(1)',
    opacity: 1,
  },
  '&:hover .card-img': {
    transform: 'scale(5)',
    opacity: 0,
  }
}));

const CardImg = styled(Box)(() => ({
  height: '100%',
  width: '100%',
  objectFit: 'cover',
  background: 'no-repeat',
  position: 'absolute',
  top: 0,
  transition: '0.5s',
  opacity: 1,
}));

const TextGrid = styled(Grid)(() => ({
  width: '100%',
  height: '100%',
  backgroundColor: 'white',
  position: 'absolute',
  top: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  transform: 'scale(0)',
  transition: '0.4s',
  opacity: 0,
}));

function MockCard(data) {
  const { cardInfo } = data;

  return (
    <CardGrid>
      <CardImg
        className='card-img'
        component='img'
        src={`https://impreza.us-themes.com/wp-content/uploads/Square-Book-Mockup-By-PuneDesign.jpg`}
        alt='img'
      />      
      <TextGrid className='text-grid'>
        <Typography align='center' variant="h6" gutterBottom>
          Weather {cardInfo.prec_type === 'none' ? '' : `- ${cardInfo.prec_type}`}
        </Typography>
        <Typography align='center'>
          Mockups Transparency - {cardInfo.transparency}
        </Typography>
      </TextGrid>
    </CardGrid>
  );
}

export default MockCard;