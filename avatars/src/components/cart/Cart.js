import { Button, Card, CardContent, CardMedia, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { removeItem } from '../../redux/slices/AvatarCartSlice';

export default function Cart() {

  const data = useSelector((state) => state.AvatarCart.items)
  const dispatch = useDispatch()

  const removeCartHandler = (item) => {
    dispatch(removeItem(item.id))
  }
  return (
    <div>
      {data.map((item) => (
        <Card  sx={{display: 'flex', marginBottom: "20px"}} key={item.id}>
          <CardMedia
            sx={{ width: 100,height: 100,margin: '10px'}}
            image={item.image}
            title={item.name}
          />
          <div  sx={{display: 'flex',flexDirection: 'column',justifyContent: 'space-between'}}>
            <CardContent sx={{ flex: '1 0 auto'}}>
              <Typography component="h5" variant="h5">
                {item.name}
              </Typography>
              <Typography variant="subtitle1" color="textSecondary">
                {item.smallName} | {item.gender} | {item.system}
              </Typography>
              <Typography sx={{ fontWeight: 'bold'}}>
                ${item.price}
              </Typography>
              <Typography variant="subtitle2">
                {item.description}
              </Typography>
              <Typography variant="subtitle2">
                {item.starsandLikes}
              </Typography>
            </CardContent>
            <div>
              <Button size="small" color="secondary" onClick={()=>{removeCartHandler(item)}}>
                Remove
              </Button>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}
