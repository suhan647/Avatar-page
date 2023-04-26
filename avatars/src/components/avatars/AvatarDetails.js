import { useState } from 'react';
import Data from '../data/Data.json';
import { useParams } from 'react-router-dom';
import {
  Typography,
  Box,
  Grid,
  Paper,
  Rating,
  Button,
  Divider,
} from '@mui/material';

const AvatarDetails = () => {

  const { id } = useParams();

  console.log(id);

  const avatar = Data.Avatars.find((a) => a.id === Number(id));

  console.log(avatar);

  return (
    <Box sx={{ p: 3 }}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          mb: 3,
        }}
      >
        <Typography variant="h4">{avatar.name}</Typography>
        <Button variant="outlined" color="primary">
          Back
        </Button>
      </Box>

      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <img src={avatar.image} alt={avatar.name} style={{ width: '80%' }} />
          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
            <img src={avatar.image} alt={avatar.name} style={{ width: '20%' }} />
            <img src={avatar.image} alt={avatar.name} style={{ width: '20%', ml: 2 }} />
            <img src={avatar.image} alt={avatar.name} style={{ width: '20%', ml: 2 }} />
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 2 }}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Rating name="avatar-rating" value={4.7} precision={0.1} readOnly />
              <Typography variant="body2" sx={{ ml: 1 }}>
                {avatar.starsandLikes}
              </Typography>
            </Box>
            <Typography variant="h5" sx={{ my: 2 }}>
              {avatar.name}
            </Typography>
            <Typography variant="body1" sx={{ my: 2 }}>
              {avatar.description}
            </Typography>
            <Typography variant="body2" sx={{ my: 2 }}>
              {avatar.smallName} - {avatar.system}
            </Typography>
            <Divider sx={{ my: 2 }} />
            <Typography variant="h6" sx={{ my: 2 }}>
              ${avatar.price}
            </Typography>
            <Button variant="contained" color="primary" sx={{ mt: 3 }}>
              Add to Cart
            </Button>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AvatarDetails;
