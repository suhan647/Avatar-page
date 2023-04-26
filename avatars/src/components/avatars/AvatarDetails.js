import Data from '../data/Data.json';
import { useNavigate, useParams } from 'react-router-dom';
import {
  Typography,
  Box,
  Grid,
  Paper,
  Rating,
  Button,
  Divider,
} from '@mui/material';
import { useDispatch } from 'react-redux';
import { addItem } from '../../redux/slices/AvatarCartSlice';

const AvatarDetails = () => {

  const { id } = useParams();
  const dispatch = useDispatch()

  console.log(id);

  const avatar = Data.Avatars.find((a) => a.id === Number(id));

  console.log(avatar);

  const addToCartHandler = (a) => {
    console.log(a);
    dispatch(addItem(a))
 }

 const navigate = useNavigate()

 function backHandler(){
  navigate('/')
 }

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
        <Button variant="outlined" color="primary" onClick={backHandler}>
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
            <Box sx={{display:'flex', justifyContent:'space-evenly'}}>
            <Button variant="contained" color="primary" sx={{ mt: 3 , backgroundColor:'green'}} onClick={()=> {addToCartHandler(avatar)}}>
              Add to Cart
            </Button>
            <Button variant="contained"  sx={{ mt: 3, backgroundColor:'red' }}>
              Buy Now
            </Button>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AvatarDetails;
