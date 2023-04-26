import { Button, Card, CardContent, CardMedia, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { removeItem } from '../../redux/slices/AvatarCartSlice';
import { useNavigate } from 'react-router-dom';

export default function Cart() {
  const data = useSelector((state) => state.AvatarCart.items)
  const dispatch = useDispatch()

  const removeCartHandler = (item) => {
    dispatch(removeItem(item.id))
  }

  const buyHandler = () => {
    alert("Great choice! Avatar successfully purchased")
   }
  
  return (
    <div style={{ background: "#F8F8F8", padding: "20px" }}>
      <Typography variant="h4" style={{ marginBottom: "20px" }}>Shopping Cart</Typography>
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
              <Typography variant="subtitle1" color="textSecondary" style={{ marginBottom: "10px" }}>
                {item.smallName} | {item.gender} | {item.system}
              </Typography>
              <Typography sx={{ fontWeight: 'bold', marginBottom: "10px" }}>
                ${item.price}
              </Typography>
              <Typography variant="subtitle2" style={{ marginBottom: "10px" }}>
                {item.description}
              </Typography>
              <Typography variant="subtitle2">
                {item.starsandLikes}
              </Typography>
            </CardContent>
            <div style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
              <Button size="small" variant="contained" sx={{ mt: 3, mb:3, backgroundColor:'red' }} onClick={()=>{removeCartHandler(item)}}>
                Remove
              </Button>

              <Button size="small" variant="contained"  sx={{ mt: 3, mb:3, mr:2, backgroundColor:'green' }} onClick={ buyHandler}>
              Buy Now
            </Button>
            </div>
          </div>
        </Card>
      ))}
      {data.length === 0 && (
        <Typography variant="subtitle1" style={{ marginTop: "20px" }}>
          Your cart is empty.
        </Typography>
      )}
    </div>
  );
}
